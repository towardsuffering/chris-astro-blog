import Papa from 'papaparse'

export const loadCSV = async (url) => {
	const response = await fetch(url)
	const reader = response.body.getReader()
	const result = await new Promise((resolve, reject) => {
		Papa.parse(reader, {
			header: true,
			dynamicTyping: true,
			complete: resolve,
			error: reject
		})
	})
	return result.data
}
