// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/about.tsx";
import * as $1 from "./routes/contact.tsx";
import * as $2 from "./routes/gallery.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/project.tsx";
import * as $$0 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/about.tsx": $0,
    "./routes/contact.tsx": $1,
    "./routes/gallery.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/project.tsx": $4,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
