const { fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')

// test('Should calculate total with tip', () => {
//     const total = calculateTip(10, .3)
//     expect(total).toBe(13)
// })

// test('Should calculate total with default tip', () => {
//     const total = calculateTip(10)
//     expect(total).toBe(12.5)
// })

test('Should convert 32 F to 0 C', ()=> {
	const temp = fahrenheitToCelsius(32)
	expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', ()=> {
	const temp = celsiusToFahrenheit(0)
	expect(temp).toBe(32)
})

// test('Async test demo', (async) => {
// 	setTimeout(() => {
// 		expect(10).toBe(2)
// 		async()
// 	}, 3000)
// })

test('Should add to numbers', (done) => {
	add(2, 3).then((sum) => {
		expect(sum).toBe(5)
		done()
	})
})

test('should add two numbrs async/await', async() => {
	const sum = await add(2, 4)
	expect(sum).toBe(6)
})
// 
// Why test?
// 
// - Saves time
// - Creates reliable software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// - Peace of mind
