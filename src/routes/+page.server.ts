import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	return {
		serverHost: locals.serverHost,
		serverIP: locals.serverIP,
		clientIP: locals.clientIP,
		name: process.env.NAME || 'Web'
	};
};
