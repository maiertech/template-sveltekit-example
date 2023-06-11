# sveltekit-example-template

This is a [SvelteKit](https://kit.svelte.dev/) skeleton project which I use as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create SvelteKit examples:

- It uses [JSDoc annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) for TypeScript support.
- It comes with a `.gitpod.yml` configuration for [Gitpod](https://www.gitpod.io).
- It comes with workspace settings for VS Code.

## Keeping dependencies up-to-date

I update dependencies in this template now and then. These are the steps:

1. Run `npm create svelte@latest .` to regenerate the SvelteKit skeleton project into the existing directory.
1. **Where should we create your project?** Leave blank for the current directory.
1. **Directory not empty. Continue?** Yes.
1. **Which Svelte app template?** Skeleton project.
1. **Add type checking with TypeScript?** Yes, using JavaScript with JSDoc comments.
1. Add ESLint and Prettier.
1. Delete `node_module` and `package-lock.json` and run `npm i`.
