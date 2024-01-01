import { defineConfig } from 'vite';
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
