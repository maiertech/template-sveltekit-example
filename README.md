# template-sveltekit-example

You probably don't need this template and should just run `npx sv create`.

This is a [SvelteKit](https://kit.svelte.dev/) minimal project, which I use as a
[GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
to speed up my workflow when creating screencasts.

## Keeping dependencies up-to-date

Before updating the dependencies in this template, delete `eslint.config.js` because it will not be
regenerated if it exists already. Then run `npx sv create` to regenerate a minimal SvelteKit project
into the existing directory.

### Where would you like your project to be created?

Hit enter to use the current directory.

### Directory not empty. Continue?

Yes.

### Which template would you like?

SvelteKit minimal.

### Add type checking with TypeScript?

Yes, using TypeScript syntax.

### What would you like to add to your project?

- [x] `prettier`
- [x] `eslint`
- [x] `devtools-json`
- [x] `mcp` (for VS Code)

### Which package manager do you want to install dependencies with?

`pnpm`

### Wrap it up

- Revert `README.md`.
- Revert `.vscode/settings.json`.
- Delete folder `node_modules` and file `pnpm-lock.yaml` and run `pnpm i`.
- Run `pnpm dev` to test if the app still launches.

## Debugging

Just launch the application in the
[JavaScript Debug Terminal](https://code.visualstudio.com/docs/editor/debugging#_launch-javascript-debug-terminal).
