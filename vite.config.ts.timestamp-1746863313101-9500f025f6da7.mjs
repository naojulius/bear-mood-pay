// vite.config.ts
import { defineConfig } from "file:///C:/Users/NaoJulius/Documents/NAO/BearMoodPay/bear-mood-pay/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///C:/Users/NaoJulius/Documents/NAO/BearMoodPay/bear-mood-pay/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { qwikCity } from "file:///C:/Users/NaoJulius/Documents/NAO/BearMoodPay/bear-mood-pay/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import tsconfigPaths from "file:///C:/Users/NaoJulius/Documents/NAO/BearMoodPay/bear-mood-pay/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "Blank project with routing included",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/vercel-edge/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "vercel deploy",
    dev: "vite --mode ssr",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.13.0",
    "@builder.io/qwik-city": "^1.13.0",
    "@ditadi/qwik-hooks": "^0.1.6",
    "@qwikest/icons": "^0.0.13",
    "@tailwindcss/vite": "^4.0.0",
    "@types/eslint": "8.56.10",
    "@types/gsap": "^1.20.2",
    "@types/node": "20.14.11",
    "@types/three": "^0.176.0",
    "@typescript-eslint/eslint-plugin": "7.16.1",
    "@typescript-eslint/parser": "7.16.1",
    eslint: "8.57.0",
    "eslint-plugin-qwik": "^1.13.0",
    gsap: "^3.13.0",
    prettier: "3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.11",
    tailwindcss: "^4.0.0",
    typescript: "5.4.5",
    undici: "*",
    vercel: "^29.1.1",
    vite: "5.3.5",
    "vite-tsconfig-paths": "^4.2.1"
  },
  dependencies: {
    "idb-keyval": "^6.2.2",
    three: "^0.176.0"
  }
};

// vite.config.ts
import tailwindcss from "file:///C:/Users/NaoJulius/Documents/NAO/BearMoodPay/bear-mood-pay/node_modules/@tailwindcss/vite/dist/index.mjs";
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), tailwindcss()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmFvSnVsaXVzXFxcXERvY3VtZW50c1xcXFxOQU9cXFxcQmVhck1vb2RQYXlcXFxcYmVhci1tb29kLXBheVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmFvSnVsaXVzXFxcXERvY3VtZW50c1xcXFxOQU9cXFxcQmVhck1vb2RQYXlcXFxcYmVhci1tb29kLXBheVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTmFvSnVsaXVzL0RvY3VtZW50cy9OQU8vQmVhck1vb2RQYXkvYmVhci1tb29kLXBheS92aXRlLmNvbmZpZy50c1wiOy8qKlxyXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNvbmZpZyBmb3Igdml0ZS5cclxuICogV2hlbiBidWlsZGluZywgdGhlIGFkYXB0ZXIgY29uZmlnIGlzIHVzZWQgd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGFuZCBleHRlbmRzIGl0LlxyXG4gKi9cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrL29wdGltaXplclwiO1xyXG5pbXBvcnQgeyBxd2lrQ2l0eSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcbnR5cGUgUGtnRGVwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuY29uc3QgeyBkZXBlbmRlbmNpZXMgPSB7fSwgZGV2RGVwZW5kZW5jaWVzID0ge30gfSA9IHBrZyBhcyBhbnkgYXMge1xyXG4gIGRlcGVuZGVuY2llczogUGtnRGVwO1xyXG4gIGRldkRlcGVuZGVuY2llczogUGtnRGVwO1xyXG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XHJcbn07XHJcbmVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhkZXZEZXBlbmRlbmNpZXMsIGRlcGVuZGVuY2llcyk7XHJcbi8qKlxyXG4gKiBOb3RlIHRoYXQgVml0ZSBub3JtYWxseSBzdGFydHMgZnJvbSBgaW5kZXguaHRtbGAgYnV0IHRoZSBxd2lrQ2l0eSBwbHVnaW4gbWFrZXMgc3RhcnQgYXQgYHNyYy9lbnRyeS5zc3IudHN4YCBpbnN0ZWFkLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pOiBVc2VyQ29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW3F3aWtDaXR5KCksIHF3aWtWaXRlKCksIHRzY29uZmlnUGF0aHMoKSwgdGFpbHdpbmRjc3MoKV0sXHJcbiAgICAvLyBUaGlzIHRlbGxzIFZpdGUgd2hpY2ggZGVwZW5kZW5jaWVzIHRvIHByZS1idWlsZCBpbiBkZXYgbW9kZS5cclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAvLyBQdXQgcHJvYmxlbWF0aWMgZGVwcyB0aGF0IGJyZWFrIGJ1bmRsaW5nIGhlcmUsIG1vc3RseSB0aG9zZSB3aXRoIGJpbmFyaWVzLlxyXG4gICAgICAvLyBGb3IgZXhhbXBsZSBbJ2JldHRlci1zcWxpdGUzJ10gaWYgeW91IHVzZSB0aGF0IGluIHNlcnZlciBmdW5jdGlvbnMuXHJcbiAgICAgIGV4Y2x1ZGU6IFtdLFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBzZXR0aW5nLiBJdCBpbXByb3ZlcyB0aGUgYnVuZGxpbmcgb2YgeW91ciBzZXJ2ZXIgY29kZS4gVG8gdXNlIGl0LCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgd2hlbiB5b3VyIGNvbnN1bWVkIHBhY2thZ2VzIGFyZSBkZXBlbmRlbmNpZXMgb3IgZGV2IGRlcGVuZGVuY2llcy4gKG90aGVyd2lzZSB0aGluZ3Mgd2lsbCBicmVhayBpbiBwcm9kdWN0aW9uKVxyXG4gICAgICovXHJcbiAgICAvLyBzc3I6XHJcbiAgICAvLyAgIGNvbW1hbmQgPT09IFwiYnVpbGRcIiAmJiBtb2RlID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgLy8gICAgID8ge1xyXG4gICAgLy8gICAgICAgICAvLyBBbGwgZGV2IGRlcGVuZGVuY2llcyBzaG91bGQgYmUgYnVuZGxlZCBpbiB0aGUgc2VydmVyIGJ1aWxkXHJcbiAgICAvLyAgICAgICAgIG5vRXh0ZXJuYWw6IE9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcyksXHJcbiAgICAvLyAgICAgICAgIC8vIEFueXRoaW5nIG1hcmtlZCBhcyBhIGRlcGVuZGVuY3kgd2lsbCBub3QgYmUgYnVuZGxlZFxyXG4gICAgLy8gICAgICAgICAvLyBUaGVzZSBzaG91bGQgb25seSBiZSBwcm9kdWN0aW9uIGJpbmFyeSBkZXBzIChpbmNsdWRpbmcgZGVwcyBvZiBkZXBzKSwgQ0xJIGRlcHMsIGFuZCB0aGVpciBtb2R1bGUgZ3JhcGhcclxuICAgIC8vICAgICAgICAgLy8gSWYgYSBkZXAtb2YtZGVwIG5lZWRzIHRvIGJlIGV4dGVybmFsLCBhZGQgaXQgaGVyZVxyXG4gICAgLy8gICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZXRoaW5nIHVzZXMgYGJjcnlwdGAgYnV0IHlvdSBkb24ndCBoYXZlIGl0IGFzIGEgZGVwLCB5b3UgY2FuIHdyaXRlXHJcbiAgICAvLyAgICAgICAgIC8vIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKSwgJ2JjcnlwdCddXHJcbiAgICAvLyAgICAgICAgIGV4dGVybmFsOiBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLFxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIDogdW5kZWZpbmVkLFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyBEb24ndCBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIGRldiBtb2RlXHJcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3OiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyBEbyBjYWNoZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIHByZXZpZXcgKG5vbi1hZGFwdGVyIHByb2R1Y3Rpb24gYnVpbGQpXHJcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTYwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuLy8gKioqIHV0aWxzICoqKlxyXG4vKipcclxuICogRnVuY3Rpb24gdG8gaWRlbnRpZnkgZHVwbGljYXRlIGRlcGVuZGVuY2llcyBhbmQgdGhyb3cgYW4gZXJyb3JcclxuICogQHBhcmFtIHtPYmplY3R9IGRldkRlcGVuZGVuY2llcyAtIExpc3Qgb2YgZGV2ZWxvcG1lbnQgZGVwZW5kZW5jaWVzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmNpZXMgLSBMaXN0IG9mIHByb2R1Y3Rpb24gZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBlcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoXHJcbiAgZGV2RGVwZW5kZW5jaWVzOiBQa2dEZXAsXHJcbiAgZGVwZW5kZW5jaWVzOiBQa2dEZXAsXHJcbikge1xyXG4gIGxldCBtc2cgPSBcIlwiO1xyXG4gIC8vIENyZWF0ZSBhbiBhcnJheSAnZHVwbGljYXRlRGVwcycgYnkgZmlsdGVyaW5nIGRldkRlcGVuZGVuY2llcy5cclxuICAvLyBJZiBhIGRlcGVuZGVuY3kgYWxzbyBleGlzdHMgaW4gZGVwZW5kZW5jaWVzLCBpdCBpcyBjb25zaWRlcmVkIGEgZHVwbGljYXRlLlxyXG4gIGNvbnN0IGR1cGxpY2F0ZURlcHMgPSBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLmZpbHRlcihcclxuICAgIChkZXApID0+IGRlcGVuZGVuY2llc1tkZXBdLFxyXG4gICk7XHJcbiAgLy8gaW5jbHVkZSBhbnkga25vd24gcXdpayBwYWNrYWdlc1xyXG4gIGNvbnN0IHF3aWtQa2cgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZpbHRlcigodmFsdWUpID0+XHJcbiAgICAvcXdpay9pLnRlc3QodmFsdWUpLFxyXG4gICk7XHJcbiAgLy8gYW55IGVycm9ycyBmb3IgbWlzc2luZyBcInF3aWstY2l0eS1wbGFuXCJcclxuICAvLyBbUExVR0lOX0VSUk9SXTogSW52YWxpZCBtb2R1bGUgXCJAcXdpay1jaXR5LXBsYW5cIiBpcyBub3QgYSB2YWxpZCBwYWNrYWdlXHJcbiAgbXNnID0gYE1vdmUgcXdpayBwYWNrYWdlcyAke3F3aWtQa2cuam9pbihcIiwgXCIpfSB0byBkZXZEZXBlbmRlbmNpZXNgO1xyXG4gIGlmIChxd2lrUGtnLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG4gIH1cclxuICAvLyBGb3JtYXQgdGhlIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgZHVwbGljYXRlcyBsaXN0LlxyXG4gIC8vIFRoZSBgam9pbmAgZnVuY3Rpb24gaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIGVsZW1lbnRzIG9mIHRoZSAnZHVwbGljYXRlRGVwcycgYXJyYXkgYXMgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxyXG4gIG1zZyA9IGBcclxuICAgIFdhcm5pbmc6IFRoZSBkZXBlbmRlbmN5IFwiJHtkdXBsaWNhdGVEZXBzLmpvaW4oXCIsIFwiKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxyXG4gICAgUGxlYXNlIG1vdmUgdGhlIGR1cGxpY2F0ZWQgZGVwZW5kZW5jaWVzIHRvIFwiZGV2RGVwZW5kZW5jaWVzXCIgb25seSBhbmQgcmVtb3ZlIGl0IGZyb20gXCJkZXBlbmRlbmNpZXNcIlxyXG4gIGA7XHJcbiAgLy8gVGhyb3cgYW4gZXJyb3Igd2l0aCB0aGUgY29uc3RydWN0ZWQgbWVzc2FnZS5cclxuICBpZiAoZHVwbGljYXRlRGVwcy5sZW5ndGggPiAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICB9XHJcbn1cclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJteS1xd2lrLWVtcHR5LXN0YXJ0ZXJcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQmxhbmsgcHJvamVjdCB3aXRoIHJvdXRpbmcgaW5jbHVkZWRcIixcclxuICBcImVuZ2luZXNcIjoge1xyXG4gICAgXCJub2RlXCI6IFwiXjE4LjE3LjAgfHwgXjIwLjMuMCB8fCA+PTIxLjAuMFwiXHJcbiAgfSxcclxuICBcImVuZ2luZXMtYW5ub3RhdGlvblwiOiBcIk1vc3RseSByZXF1aXJlZCBieSBzaGFycCB3aGljaCBuZWVkcyBhIE5vZGUtQVBJIHY5IGNvbXBhdGlibGUgcnVudGltZVwiLFxyXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwic2NyaXB0c1wiOiB7XHJcbiAgICBcImJ1aWxkXCI6IFwicXdpayBidWlsZFwiLFxyXG4gICAgXCJidWlsZC5jbGllbnRcIjogXCJ2aXRlIGJ1aWxkXCIsXHJcbiAgICBcImJ1aWxkLnByZXZpZXdcIjogXCJ2aXRlIGJ1aWxkIC0tc3NyIHNyYy9lbnRyeS5wcmV2aWV3LnRzeFwiLFxyXG4gICAgXCJidWlsZC5zZXJ2ZXJcIjogXCJ2aXRlIGJ1aWxkIC1jIGFkYXB0ZXJzL3ZlcmNlbC1lZGdlL3ZpdGUuY29uZmlnLnRzXCIsXHJcbiAgICBcImJ1aWxkLnR5cGVzXCI6IFwidHNjIC0taW5jcmVtZW50YWwgLS1ub0VtaXRcIixcclxuICAgIFwiZGVwbG95XCI6IFwidmVyY2VsIGRlcGxveVwiLFxyXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBzc3JcIixcclxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXHJcbiAgICBcImZtdFwiOiBcInByZXR0aWVyIC0td3JpdGUgLlwiLFxyXG4gICAgXCJmbXQuY2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC5cIixcclxuICAgIFwibGludFwiOiBcImVzbGludCBcXFwic3JjLyoqLyoudHMqXFxcIlwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwicXdpayBidWlsZCBwcmV2aWV3ICYmIHZpdGUgcHJldmlldyAtLW9wZW5cIixcclxuICAgIFwic3RhcnRcIjogXCJ2aXRlIC0tb3BlbiAtLW1vZGUgc3NyXCIsXHJcbiAgICBcInF3aWtcIjogXCJxd2lrXCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpa1wiOiBcIl4xLjEzLjBcIixcclxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiXjEuMTMuMFwiLFxyXG4gICAgXCJAZGl0YWRpL3F3aWstaG9va3NcIjogXCJeMC4xLjZcIixcclxuICAgIFwiQHF3aWtlc3QvaWNvbnNcIjogXCJeMC4wLjEzXCIsXHJcbiAgICBcIkB0YWlsd2luZGNzcy92aXRlXCI6IFwiXjQuMC4wXCIsXHJcbiAgICBcIkB0eXBlcy9lc2xpbnRcIjogXCI4LjU2LjEwXCIsXHJcbiAgICBcIkB0eXBlcy9nc2FwXCI6IFwiXjEuMjAuMlwiLFxyXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIjIwLjE0LjExXCIsXHJcbiAgICBcIkB0eXBlcy90aHJlZVwiOiBcIl4wLjE3Ni4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiNy4xNi4xXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCI3LjE2LjFcIixcclxuICAgIFwiZXNsaW50XCI6IFwiOC41Ny4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcXdpa1wiOiBcIl4xLjEzLjBcIixcclxuICAgIFwiZ3NhcFwiOiBcIl4zLjEzLjBcIixcclxuICAgIFwicHJldHRpZXJcIjogXCIzLjMuM1wiLFxyXG4gICAgXCJwcmV0dGllci1wbHVnaW4tdGFpbHdpbmRjc3NcIjogXCJeMC42LjExXCIsXHJcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjQuMC4wXCIsXHJcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjQuNVwiLFxyXG4gICAgXCJ1bmRpY2lcIjogXCIqXCIsXHJcbiAgICBcInZlcmNlbFwiOiBcIl4yOS4xLjFcIixcclxuICAgIFwidml0ZVwiOiBcIjUuMy41XCIsXHJcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIlxyXG4gIH0sXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJpZGIta2V5dmFsXCI6IFwiXjYuMi4yXCIsXHJcbiAgICBcInRocmVlXCI6IFwiXjAuMTc2LjBcIlxyXG4gIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBSUEsU0FBUyxvQkFBcUM7QUFDOUMsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxnQkFBZ0I7QUFDekIsT0FBTyxtQkFBbUI7OztBQ1AxQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLHNCQUFzQjtBQUFBLEVBQ3RCLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULGdC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
