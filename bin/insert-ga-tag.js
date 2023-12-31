export default function insertGATag(mode) {
    return {
        name: 'insert-ga-tag',
        transformIndexHtml(html) {
            if (mode !== 'production') {
                return html;
            }
            return html.replace(
                '<!-- Google Analytics -->',
                `<!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TAG_ID}"></script>
    <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
        dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', '${process.env.GA_TAG_ID}')
    </script>`,
            );
        },
    };
}
