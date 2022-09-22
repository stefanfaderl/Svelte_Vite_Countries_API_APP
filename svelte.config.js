import preprocess from "svelte-preprocess";
// Consult https://github.com/sveltejs/svelte-preprocess
// for more information about preprocessors
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
  }),
  // ...other svelte options
};

export default config;
