import { defineConfig } from 'vite';
import packageJson from './package.json';
import includeHtml from './scripts/vite-include-html';

export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        define: {
            'import.meta.env.PACKAGE_VERSION': JSON.stringify(
                packageJson.version,
            ),
        },
        plugins: [
            includeHtml(mode),
        ],
        base: '/'
    };
});
