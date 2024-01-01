import fs from 'fs';

export default function includeHtml(mode) {
    return {
        name: 'insert-views',
        /**
         * Replace HTML include comments with the content of the included file.
         * @param {string} html
         * @returns {string}
         * @example <!--#include file="header.html" -->
         */
        transformIndexHtml(html) {
            const pattern = /<!--#include\s+file="([^"]+)"\s*-->/g;
            const matches = html.match(pattern);
            if (!matches) {
                return html;
            }
            let newHtml = html;
            for (let i = 0; i < matches.length; i++) {
                const match = matches[i];
                const filePath = match.replace(pattern, '$1').replace('./', '').replace('../', '');
                const fileContent = fs.readFileSync(`src/${filePath}`, 'utf-8');
                newHtml = newHtml.replace(match, fileContent.toString());
            }
            return newHtml;
        },
    };
}
