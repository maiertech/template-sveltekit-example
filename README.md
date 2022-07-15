# sveltekit-example-template

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/maiertech/sveltekit-example-template?file=src/routes/index.svelte)

This is a [SvelteKit](https://kit.svelte.dev/) skeleton project which I use as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create SvelteKit examples.

I added configurations for [StackBlitz](https://stackblitz.com/) and [Gitpod](https://www.gitpod.io), i.e. every repository created from this template will run on both platforms without additional configuration. Both platforms install dependencies automatically and run `npm run dev` to launch a preview.

StackBlitz projects can be [embedded in web pages](https://developer.stackblitz.com/docs/platform/embedding/), but [are currently not cross-browser compatible](https://developer.stackblitz.com/docs/platform/browser-support/).

You can also launch a SvelteKit project with these shortcuts (maintained by StackBlitz):

- SvelteKit skeleton app: https://node.new/sveltekit.
- SvelteKit demo app: https://sveltekit.new.

## Keeping dependencies up-to-date

I update dependencies in this template every now and then. These are the steps:

1. Run `npm init svelte .` to regenerate the SvelteKit skeleton project into the existing directory.
1. **Where should we create your project?** Leave blank for current directory.
1. **Directory not empty. Continue?** Yes.
1. **Which Svelte app template?** Skeleton project.
1. **Add type checking with TypeScript?** No.
1. **Use ESLint for code linting?** Yes.
1. **Use Prettier for code formatting?** Yes.
1. **Add Playwright for browser testing?** No.
1. Review changes in `svelte.config.js`.
1. Review changes in `vite.config.js` and make sure to not loose my Vite HMR config for Gitpod.
1. Review changes in `package.json` and make sure to not loose description and repository fields.
1. Delete `node_module` and `package-lock.json` and run `npm i`.
