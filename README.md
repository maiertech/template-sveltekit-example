# sveltekit-example-template

This is a [SvelteKit](https://kit.svelte.dev/) skeleton project which I use as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to create repositories with SvelteKit examples. This repository has been created from the [official SvelteKit template](https://github.com/sveltejs/kit-template-default).

It adds configurations for [StackBlitz](https://stackblitz.com/) and [Gitpod](https://www.gitpod.io), i.e. any repository created from this template will run on both platforms without additional configuration. Both platforms install dependencies automatically, then run `npm run dev` and launch a preview.

StackBlitz projects can be [embedded in web pages](https://developer.stackblitz.com/docs/platform/embedding/), but [are currently not cross-browser compatible](https://developer.stackblitz.com/docs/platform/browser-support/).

You can also launch a SvelteKit project with these shortcuts (maintained by StackBlitz):

- skeleton SvelteKit project: https://node.new/sveltekit,
- example app project: https://sveltekit.new.

## Keeping dependencies up-to-date

I update the dependencies in this template every now and then. These are the steps:

1. Run `npm init svelte@next .` to regenerate the SvelteKit skeleton project into the **same** directory.
1. **Which app template?** Skeleton project.
1. **Use Typescript?** No.
1. **Use ESLint?** Yes.
1. **Use Prettier?** Yes.
1. **Add Playwright?** No.
1. Review changes in `svelte.config.js` and make sure you do not loose the Vite HMR config for Gitpod.
1. Delete `node_module` and `package-lock.json` and run `npm i`.
