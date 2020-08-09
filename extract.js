const languageToExtension = { java_script: '.js', ruby: '.rb', python: '.py' };
const snakeCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
const fileName = solution => snakeCase(solution.title) + languageToExtension[snakeCase(solution.language)];

const extractSolutions = () => {
	const solutions = [];

	[...document.querySelectorAll('.list-item.solutions')].map((kata) => {
		const [rank, title] = kata.querySelector('.item-title').innerText.split('\n');

		[...kata.querySelectorAll('h6 + .markdown')].forEach((solution) => {
			const language = solution.previousSibling.innerText;
			const code = solution.innerText;

			solutions.push({ title, rank, language, code })
		});
	});

	return solutions;
};

const solutionsToFileStructure = (solutions) => {
	const fileStructure = {};

	solutions.forEach((solution) => {
		const fileObject = { [fileName(solution)]: solution.code };
		fileStructure[snakeCase(solution.rank)] = Object.assign((fileStructure[snakeCase(solution.rank)] || {}), fileObject);
	});

	return fileStructure;
}

const copyToClipboard = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  console.log("Content copied to clipboard.")
};

const solutions = extractSolutions();
const fileStructure = solutionsToFileStructure(solutions);
const extracted = JSON.stringify(fileStructure);

copyToClipboard(extracted);
