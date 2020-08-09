const fs = require('fs');

const solutionsPath = '../codewars_solutions';
fs.mkdir(solutionsPath, (err) => {
	if (!err) console.log(`Directory: ${solutionsPath} successfully created.`)
})

const fileStructure = JSON.parse(fs.readFileSync('./extracted.json', { encoding: 'utf-8'}));

Object.keys(fileStructure).forEach((rank) => {
	const dirPath = [solutionsPath, rank].join('/')
	fs.mkdir(dirPath, (err) => {
	  if (!err) console.log(`Directory: ${rank} successfully created.`);
	});

	Object.keys(fileStructure[rank]).forEach((fileName) => {
		const filePath = [solutionsPath, rank, fileName].join('/');
		const code = fileStructure[rank][fileName];

		fs.writeFile(filePath, code, (err) => {
			if (!err) console.log(`${fileName} saved.`);
		})
	})
});
