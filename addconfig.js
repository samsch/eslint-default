#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const dir = __dirname;

function copyFile(hereFile, thereFile) {
	try {
		fs.copyFileSync(
			path.resolve(dir, hereFile),
			thereFile,
			fs.constants.COPYFILE_EXCL,
		);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(`Skipping ${thereFile}, file already exists...`);
	}
}

copyFile('default-eslintrc.js', '.eslintrc.js');
copyFile('prettier.config.js', 'prettier.config.js');
copyFile('.editorconfig', '.editorconfig');

// eslint-disable-next-line no-console
console.log('Finished!');
