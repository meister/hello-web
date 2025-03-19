// place files you want to import through the `$lib` alias in this folder.

import os from 'node:os';

export const getIP = () => {
	let ip = '0.0.0.0';
	const ips = os.networkInterfaces();
	Object.keys(ips).forEach(function (_interface) {
		ips[_interface]?.forEach(function (_dev) {
			if (_dev.family === 'IPv4' && !_dev.internal) ip = _dev.address;
		});
	});

	return ip;
};
