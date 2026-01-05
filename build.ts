import { $ } from "bun";

await $`rm -rf dist`;

await Bun.build({
  outdir: "./dist",
  target: "bun",
  sourcemap: "linked",
  entrypoints: ["./src/index.ts"],
  minify: {
    syntax: true,
    identifiers: false,
    whitespace: true,
  },
});
