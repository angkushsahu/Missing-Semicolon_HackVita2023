import { Schema, model } from "mongoose";
import { compare, genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import crypto from "crypto";
import { IUser } from "../types";

const userSchema = new Schema(
    {
        name: { type: String, required: [true, "Please enter your name"] },
        email: { type: String, required: [true, "Please enter your e-mail"], unique: true },
        type: { type: String, enum: ["user", "transport", "storage"], required: [true, "Please enter user type"] },
        password: { type: String, required: [true, "Please enter a password"] },
        phone: { type: String, required: [true, "Please enter your phone number"] },
        zone: { type: String, enum: ["", "nation", "state"], default: "" },
        state: { type: String, default: "" },
        locality: { type: String, default: "" },
        resetPassword: { type: String, default: "" },
    },
    { timestamps: true }
);

// hashing password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});

// compare hashed password
userSchema.methods.comparePassword = async function (enteredPassword: string) {
    return await compare(enteredPassword, this.password);
};

// Creating JWT tokens
userSchema.methods.getJWTToken = function () {
    return sign({ id: this._id }, String(process.env.JWT_SECRET));
};

userSchema.methods.encryptResetToken = function () {
    const resetToken = crypto.randomBytes(16).toString("hex");
    this.resetPassword = crypto.createHash("sha256").update(resetToken).digest("hex");

    return resetToken;
};

userSchema.methods.getUser = function () {
    return {
        _id: this._id,
        name: this.name,
        email: this.email,
        type: this.type,
        phone: this.phone,
        zone: this.zone,
        state: this.state,
        locality: this.locality,
    };
};

export default model<IUser>("User", userSchema);
