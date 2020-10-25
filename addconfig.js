#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function logInfo(...args) {
	// eslint-disable-next-line no-console
	console.log(...args);
}
function logError(...args) {
	// eslint-disable-next-line no-console
	console.error(...args);
}

const dir = __dirname;

function copyFile(hereFile, thereFile) {
	try {
		fs.copyFileSync(
			path.resolve(dir, hereFile),
			thereFile,
			fs.constants.COPYFILE_EXCL,
		);
	} catch (error) {
		logError(`Skipping ${thereFile}, file already exists...`);
	}
}

try {
	// eslint-disable-next-line import/no-dynamic-require
	require(`${process.env.PWD}/package.json`);
} catch (error) {
	logError(
		'Need to create package.json. You can run `npm init -y` to create one quickly.',
	);
	process.exit();
}

Promise.resolve()
	.then(() => {
		logInfo('Installing @samsch/eslint-default@latest');
		return new Promise((resolve, reject) => {
			// prettier-ignore
			const install = spawn('npm', ['i', '-D', '@samsch/eslint-default@latest']);
			install.on('close', code => {
				if (code === 0) {
					logInfo('Finished installing @samsch/eslint-default@latest');
					resolve();
				} else {
					reject(
						new Error(
							`"npm i -D @samsch/eslint-default@latest" failed with code ${code}`,
						),
					);
				}
			});
			install.stdout.on('data', data => {
				logInfo(`[npm i]: ${data}`);
			});

			install.stderr.on('data', data => {
				logError(`[npm i error]: ${data}`);
			});
		});
	})
	.then(() => {
		copyFile('default-eslintrc.js', '.eslintrc.js');
		copyFile('prettier.config.js', 'prettier.config.js');
		copyFile('.editorconfig', '.editorconfig');

		logInfo('Finished!');
		process.exit(0);
	})
	.catch(error => {
		logError(error);
		process.exit(1);
	});
