import { Brule } from "../src";

const db = ["Item 01", "Item 02"];

const metadata = new Brule({ name: "metadata" })
  .rule("index", ({ input }) => db[input])
  .rule("find", ({ input }) => db.find((item) => item.includes(input)))
  .rule("findProxy", ({ input, handle }) => handle("find", input));

console.log(metadata.handle("index", 1));
