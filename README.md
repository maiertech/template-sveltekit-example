# template-sveltekit-example

This is a [SvelteKit](https://kit.svelte.dev/) skeleton project which I use as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create SvelteKit examples:

- It uses [JSDoc annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) for TypeScript support.
- It comes with linting support for JSDoc.
- It includes workspace settings for VS Code.

## Keeping dependencies up-to-date

I update dependencies in this template regularly. These are the steps:

1. Run `pnpm create svelte@latest .` to regenerate the SvelteKit skeleton project into the existing directory.
1. **Where should we create your project?** Hit enter to use the current directory.
1. **Directory not empty. Continue?** Yes.
1. **Which Svelte app template?** Skeleton project.
1. **Add type checking with TypeScript?** Yes, using JavaScript with JSDoc comments.
1. Add ESLint and Prettier.
1. Revert `README.md`.
1. Run `pnpm i -D eslint-plugin-jsdoc`.
1. Check changes in `eslint.config.js` and manually revert preserving `eslint-plugin-jsdoc`.
1. Delete folder `node_modules` and file `pnpm-lock.yaml` and run `pnpm i`.

## Debugging

Just launch the application in the [JavaScript Debug Terminal](https://code.visualstudio.com/docs/editor/debugging#_launch-javascript-debug-terminal).
