import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/client"],
    bundle: true,
    outfile: "./dist/client.js",
    sourcemap: "inline",
    minify: true,
    loader: {
      ".html": "text",
      ".css": "text",
    },
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["./src/server"],
    bundle: true,
    outfile: "./dist/server.js",
    sourcemap: "inline",
    minify: true,
  })
  .catch(() => process.exit(1));
