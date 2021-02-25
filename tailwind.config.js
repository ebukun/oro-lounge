module.exports = {
    purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {},

        textColor: {
            whitish: "#FFFFFF",
            secondary: "#e5cb9f",
            redish: "#ED1C24",
            blackish: "#231F20"
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#3490dc",
            secondary: "#ffed4a",
            danger: "#e3342f",
            blackish: "#252525",
            brownish: "#231F20"
        }),
        extend: {
            lineHeight: {
                "extra-big": "6.875rem",
                "extra-bigos": "4.57625rem",
            },
            gridTemplateRows: {
                // Simple 8 row grid
                7: "repeat(6, minmax(150px, 1fr))"
            },
            fontFamily: {
                barlow: ['"Barlow regular"'],
                barlowThin: ['"Barlow-thin"'],
                bebasBold: ['"BebasNeue Pro-bold"']
            },

            fontSize: {
                'nav': '4rem',
            },
            backgroundImage: (theme) => ({
                "hero-pattern": "url('/assets/images/shawn-ang-nmpW_WwwVSc-unsplash.png')",
                "cta-section": "url('/assets/images/cta-section.png')",
                "booking-section": "url('/assets/images/booking.png')",
                "hook-one": "url('/assets/images/hook-one.png')",
                "hook-two": "url('/assets/images/hook-two.png')",
                "hook-three": "url('/assets/images/hook-three.png')",
                map: "url('/assets/images/map.png')",
                testimonials: "url('/assets/images/test.png')",
                "tangle-two": "url('/assets/images/tangle-two.png')",
                "tangle-one": "url('/assets/images/tangle-one.png')",
                "menu-img": "url('/assets/images/menu-img.png')"
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
