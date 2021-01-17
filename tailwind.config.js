module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            poppins: ["Poppins"]
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            cst_pink: "#F935A9",
            cst_black: "#000000",
            cst_indigo: "#7946C1",
            cst_beige: "#F7D9F2",
            cst_primary: {
                50: "#E2E3EC",
                100: "#707070",
                200: "#3C3F54",
                300: "#323874",
                400: "#262A41"
            },
            cst_white: {
                100: "#FFFFFF",
                200: "#FFFFFF29",
                300: "#FCFCFF",
                400: "#F7F7FF"
            },
            cst_teal: {
                100: "#30BBB574",
                200: "#75D6D1",
                300: "#30BBB5"
            },
            cst_gray: {
                100: "#0000000D",
                200: "#0000001A",
                300: "#E2E2EA",
                400: "#00000029",
                500: "#BABDD1"
            }
        },
        extend: {
            height: {
                "screen3/4": "75vh",
                "screen/2": "50vh",
                "screen/3": "calc(100vh / 3)",
                "screen/4": "calc(100vh / 4)",
                "screen/5": "calc(100vh / 5)"
            },
            borderWidth: {
                "5": "5px",
                "6": "6px"
            }
        },
    },
    variants: {
        extend: {
            fontFamily: ["focus", "hover"],
            backgroundColor: ["hover", "active"],
            display: ["responsive", "hover", "focus"],
            height: ["responsive"],
            appearance: ["hover", "focus"],
            borderWidth: ["hover", "focus"]
        },
    },
    plugins: [],
}