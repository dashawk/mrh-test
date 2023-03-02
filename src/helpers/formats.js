export const toCurrency = (value, currency = 'USD', format = 'en-US') => {
	const valueToString = value.toString()

	const currencyRegex = /^(\$)?([0-9,]+)(\.[0-9]{2})?$/
	const match = currencyRegex.exec(valueToString)

	if (match !== null) {
		if (match[3]) {
			value = Number(match[2].replace(/,/g, '') + match[3])
		} else {
			value = Number(match[2].replace(/,/g, ''))
		}
	} else {
		value = Number(value)
	}

	if (isNaN(value)) {
		value = 0
	}

	const formatter = new Intl.NumberFormat(format, {
		style: 'currency',
		currency
	})

	return formatter.format(value)
}
