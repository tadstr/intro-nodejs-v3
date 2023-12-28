const wait = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

const run = async () => {
	await wait(await something())
	wait(2000)
	wait(1000)
}
