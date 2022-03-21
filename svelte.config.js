import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000,
					host: process.env.GITPOD_WORKSPACE_URL
						? process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-')
						: 'localhost'
				}
			}
		}
	}
};

export default config;
