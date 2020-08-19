module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: ['./**/*.html'],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            center: true,
            padding: '2rem'
        },
    },
    variants: {},
    plugins: []
}
