/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "bg-col": "#f5f5f5",
                primary: "#3e824c",
                "primary-hover": "#346c3e",
            },
            backgroundImage: {
                banner: "linear-gradient(90deg, rgba(156,163,175,0.2) 45%, rgba(31,41,55,0.2) 65%);",
            },
            screens: {
                xs: "450px",
            },
        },
    },
    plugins: [],
};
