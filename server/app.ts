import express from "express";
const app = express();

import { Locals } from "./express";
app.use(function (req, res, next) {
    res.typedLocals = res.locals as Locals;
    next();
});

const limit = "1000mb";
app.use(express.urlencoded({ extended: true, limit }));
app.use(express.json({ limit }));

import cors from "cors";
app.use(cors({ origin: true, credentials: true }));

import cookieParser from "cookie-parser";
app.use(cookieParser());

import * as routes from "./routes";
app.use("/api/auth", routes.authRouter);
app.use("/api/user", routes.userRouter);
app.use("/api/product", routes.productRouter);

// production deployment
import { join } from "path";
if (process.env.NODE_ENV === "production") {
    app.use(express.static(join(__dirname, "../client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(join(__dirname, "../client", "build", "index.html"));
    });
}

import { error } from "./middlewares";
app.use(error.invalidUrl);
app.use(error.errors);

export default app;
