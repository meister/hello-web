import type { Handle } from '@sveltejs/kit';
import os from 'node:os';
import { getIP } from './lib';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.serverHost = os.hostname();
	event.locals.serverIP = getIP();
	event.locals.clientIP = event.getClientAddress();

	return await resolve(event);
};
