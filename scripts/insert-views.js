import fs from 'fs';

export default function insertViews(mode) {
    return {
        name: 'insert-views',
        transformIndexHtml(html) {
            const pattern = /<!--\s*([^\s]+\.[a-zA-Z0-9]+)\s*-->/g;
            const matches = html.match(pattern);
            if (!matches) {
                return html;
            }
            let newHtml = html;
            for (let i = 0; i < matches.length; i++) {
                const match = matches[i];
                const filePath = match.replace(pattern, '$1');
                const fileContent = fs.readFileSync(filePath);
                const fileHtml = fileContent.toString();
                newHtml = newHtml.replace(match, fileHtml);
            }
            return newHtml;
        },
    };
}
