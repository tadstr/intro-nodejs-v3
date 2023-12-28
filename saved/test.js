// import fs from 'node:fs'
import fs from 'node:fs/promises'

const readPjson = async () => {
	const pJsonPath = new URL('./package.json', import.meta.url).pathname
    
	console.log(JSON.parse(await fs.readFile(pJsonPath, 'utf-8')))
	// return JSON.parse(fs.readFile(pJsonPath,  'utf-8'))
}

const writeFile = async () => {
    const newFile = new URL('./write.js', import.meta.url).pathname
    await fs.writeFile(newFile, `console.log('Writing file!')`)
}

// readPjson()
writeFile()
