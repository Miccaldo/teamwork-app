module.exports = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: { config: "./src/tailwind/tailwind.config.ts" },
        autoprefixer: {}
    }
};
