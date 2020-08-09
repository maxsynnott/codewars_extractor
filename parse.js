const fs = require('fs');

const parseFile = filePath => JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8'}));

const createFileStructure = (solutionsPath, fileStructure) => {
	// Create solutions directory
	fs.mkdirSync(solutionsPath, { recursive: true });

	Object.keys(fileStructure).forEach((rank) => {
		// Create rank directory
		const rankPath = [solutionsPath, rank].join('/');
		fs.mkdirSync(rankPath, { recursive: true });

		Object.keys(fileStructure[rank]).forEach((fileName) => {
			const filePath = [rankPath, fileName].join('/');

			// Read existing solution file
			fs.readFile(filePath, { encoding: 'utf-8'}, (err, data) => {
				// If there is an error other than the file doesn't exist, throw it
				if (err && err.code != 'ENOENT') throw err;

				const code = fileStructure[rank][fileName];
				
				// If current solution does not exist or is different then create/overwrite it respectively
				if (data != code) {
					const message = fileName + (err ? ' created.' : ' overwritten.');

					fs.writeFile(filePath, code, 'utf8', (err) => {
						if (err) throw err;

						console.log(message);
					});
				};
			});
		});
	});
};

const fileStructure = parseFile('./extracted.json');

// Change this variable if you wish for you solutions to be stored elsewhere
const solutionsPath = '../codewars_solutions';
createFileStructure(solutionsPath, fileStructure);

console.log("Parsing complete.");