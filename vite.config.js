import { defineConfig } from 'vite';
import insertGATag from './bin/insert-ga-tag';

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
