require('esbuild').build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: './build/bundle.js',
    watch: {
        onRebuild(error) {
            if (error) console.error('❌ build failed:', error);
            else console.log('\x1b[32m', 'Build succeeded ✔️');
        }
    }
});