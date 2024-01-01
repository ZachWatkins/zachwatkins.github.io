import { defineConfig } from 'vite';
import packageJson from './package.json';
import insertGATag from './scripts/insert-views';

export default defineConfig(({ command, mode, ssrBuild }) => {
    return {
        define: {
            'import.meta.env.PACKAGE_VERSION': JSON.stringify(
                packageJson.version,
            ),
        },
        plugins: [
            insertGATag(mode),
        ],
    };
});
