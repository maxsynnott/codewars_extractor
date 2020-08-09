## Codewars Extractor
###### 3 step process to extracting all your codewars solutions to an organised file structure on your computer (ready for github)

Example output: https://github.com/maxsynnott/codewars_solutions

Steps:
1. Visit https://www.codewars.com/users/USERNAME/completed_solutions and scroll down to load all solutions.
2. Copy and paste the contents on extract.js into your developers console (this will copy a json of all your solutions to your clipboard).
3. Completely replace the contents of extracted.json with the contents of your clipboard and in your terminal run ```node parse.js```

**You're done**

*By default the solutions will be placed in a folder called codewars_solutions in the parent directory. This can be changed by changing the following line in parse.js ```const solutionsPath = '../codewars_solutions';```*