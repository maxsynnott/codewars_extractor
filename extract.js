const snakeCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');

const languageToExtension = {
	"C": ".c",
	"C#": ".cs",
	"C++": ".cpp",
	"Clojure": ".clj",
	"CoffeeScript": ".coffee",
	"Coq": ".coq",
	"Crystal": ".cr",
	"Dart": ".dart",
	"Elixir": ".ex",
	"F#": ".fs",
	"Go": ".go",
	"Groovy": ".groovy",
	"Haskell": ".hs",
	"Java": ".java",
	"JavaScript": ".js",
	"Kotlin": ".kt",
	"Lean": ".lean",
	"Lua": ".lua",
	"PHP": ".php",
	"Python": ".py",
	"Racket": ".rkt",
	"Ruby": ".rb",
	"Rust": ".rs",
	"Scala": ".scala",
	"Shell": ".sh",
	"SQL": ".sql",
	"Swift": ".swift",
	"TypeScript": ".ts"
};

const fileName = solution => snakeCase(solution.title) + languageToExtension[solution.language];

const extractSolutions = () => {
	const solutions = [];

	[...document.querySelectorAll('.list-item.solutions')].forEach((kata) => {
		const titleDiv = kata.querySelector('.item-title');
		const rank = titleDiv.querySelector('div').innerText;
		const title = titleDiv.querySelector('a').innerText;

		[...kata.querySelectorAll('h6 + .markdown')].forEach((solution) => {
			const language = solution.previousSibling.innerText.slice(0, -1);
			const code = solution.innerText;

			solutions.push({ title, rank, language, code });
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

	console.log("Content copied to clipboard.");
};

const solutions = extractSolutions();
const fileStructure = solutionsToFileStructure(solutions);
const extracted = JSON.stringify(fileStructure);

copyToClipboard(extracted);

// The developer console logs the last line
fileStructure;
