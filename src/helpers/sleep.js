export async function sleep(n = 500) {
	return new Promise(r => setTimeout(r, n))
}
