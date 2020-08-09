// Extract solutions into fileStructure object.
const languageToExtension = { java_script: '.js', ruby: '.rb', python: '.py' };
const snakeCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
const fileName = solution => snakeCase(solution.title) + languageToExtension[snakeCase(solution.language)];

const fileStructure = {};

const solutions = [...document.querySelectorAll('.list-item.solutions')].map((solution) => {
	const [rank, title] = solution.querySelector('.item-title').innerText.split('\n');
	const language = solution.querySelector('h6').innerText;
	const code = solution.querySelector('code').innerText;

	return { title, rank, language, code };
});

solutions.forEach((solution) => {
	const fileObject = { [fileName(solution)]: solution.code };
	fileStructure[snakeCase(solution.rank)] = Object.assign((fileStructure[snakeCase(solution.rank)] || {}), fileObject);
});
//

// Copy the extracted json to clipboard
const copyToClipboard = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

const extracted = JSON.stringify(fileStructure);

copyToClipboard(extracted);
//
