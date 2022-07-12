import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		hmr: {
			clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000,
			host: process.env.GITPOD_WORKSPACE_URL
				? process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-')
				: 'localhost'
		}
	}
};

export default config;
