//~ node index.js one two
// node path
// file path
// order you parse
/*
[
  '/Users/Aana/.nvm/versions/node/v20.10.0/bin/node',
  '/Users/Aana/Development/Learning/frontend-masters/Fullstack-for-frontend/intro-nodejs-v3/index.js',
  'one',
  'two'
] 
 */

console.log(process.argv)  

(function(){
  console.log("IIFE")
})()

import fs from 'node:fs' 

const noteContent = process.argv[2]
const newNote = {
	content: noteContent,
	id: Date.now(),
}

yargs(hideBin(process.argv))
  .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .parse() 