import { createTransport } from "nodemailer";

export default async function sendResetEmail(email: string, resetToken: string) {
    try {
        const transporter = createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASS,
            },
        });

        const text: string = `
        WE GOT YOUR REQUEST TO RESET YOUR PASSWORD

        CLICK ON THE LINK BELOW WHICH WILL REDIRECT TO A PAGE WHERE YOU CAN SAFELY RESET YOUR PASSWORD

        LINK - ${process.env.BROWSER_URL}/reset-password/${resetToken}

        THANKS.
        KHETI BAZAAR
        `;

        const mailOptions = {
            from: process.env.MAIL,
            to: email,
            subject: "KHETI BAZAAR RESET PASSWORD",
            text,
        };

        await transporter.sendMail(mailOptions);
        return { success: true, message: "Mail sent successfully" };
    } catch (error) {
        return { success: false, message: "Unable to send e-mail" };
    }
}
