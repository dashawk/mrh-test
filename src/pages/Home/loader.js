import { sleep } from '@/helpers/sleep'

export async function homeLoader() {
	await sleep(1000)

	return {
		data: new Date().toISOString()
	}
}
