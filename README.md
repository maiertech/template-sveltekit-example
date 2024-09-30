# template-sveltekit-example

This is a [SvelteKit](https://kit.svelte.dev/) skeleton project which I use as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create SvelteKit examples.

## Keeping dependencies up-to-date

I update dependencies in this template regularly. These are the steps:

1. Run `pnpm create svelte@latest .` to regenerate the SvelteKit skeleton project into the existing directory.
1. **Where should we create your project?** Hit enter to use the current directory.
1. **Directory not empty. Continue?** Yes.
1. **Which Svelte app template?** Skeleton project.
1. **Add type checking with TypeScript?** Yes, using TypeScript syntax.
1. Add ESLint, Prettier and Svelte 5.
1. Revert `README.md`.
1. Delete folder `node_modules` and file `pnpm-lock.yaml` and run `pnpm i`.

## Debugging

Just launch the application in the [JavaScript Debug Terminal](https://code.visualstudio.com/docs/editor/debugging#_launch-javascript-debug-terminal).
