/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Red Hat Display", "Arial", "sans-serif"],
            },
            gridTemplateColumns: {
                featuredProject: "100px 1fr max-content",
            },
            translate: {
                tick: "1.5px",
            },
        },
    },
    plugins: [],
};
