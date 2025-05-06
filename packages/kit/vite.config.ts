import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default () => {
  return defineConfig({
    build: {
      outDir: 'dist',
      lib: {
        formats: ['es'],
        entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        name: 'Kit',
        fileName: 'kit',
      },
      commonjsOptions: {
        esmExternals: true,
      },
      emptyOutDir: true,
    },
    publicDir: false,
    plugins: [
      dts({
        rollupTypes: true,
        tsconfigPath: fileURLToPath(new URL('./tsconfig.app.json', import.meta.url)),
        outDir: fileURLToPath(new URL('./dist', import.meta.url)),
        // beforeWriteFile: (filePath, content) => {
        //   let newfilePath = filePath.replace('/src', '');
        //   newfilePath = newfilePath.replace('.vue.d.ts', '.d.ts');
        //   const newContent = content.replace(/((export|import) ["'*./{} A-Za-z0-9]+ from ["'./A-Za-z0*9]+)(.vue)(["';]+)/g, `$1$4`);
        //   return {
        //     filePath: newfilePath,
        //     content: newContent,
        //   };
        // },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src/', import.meta.url)),
        },
      ],
    },
  });
};
