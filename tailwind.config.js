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
        extend: {
            gridTemplateRows: {
          // Simple 8 row grid
         '7': 'repeat(6, minmax(150px, 1fr))'
         },
            fontFamily: {
                barlow: ['"Barlow regular"'],
                barlowThin: ['"Barlow-thin"']
            },
            backgroundImage: (theme) => ({
                "hero-pattern": "url('/assets/images/shawn-ang-nmpW_WwwVSc-unsplash.png')",
                "cta-section": "url('/assets/images/cta-section.png')",
                "booking-section": "url('/assets/images/booking.png')",
                "hook-one": "url('/assets/images/hook-one.png')",
                "hook-two": "url('/assets/images/hook-two.png')",
                "hook-three": "url('/assets/images/hook-three.png')",
                "map": "url('/assets/images/map.png')",
                "testimonials": "url('/assets/images/test.png')",
                "tangle-two": "url('/assets/images/tangle-two.png')",
                "tangle-one": "url('/assets/images/tangle-one.png')",
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
