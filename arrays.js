console.log('Hi')

var a = [47, 'hi', 11, 79]
console.log(a[2])
console.log('The array a is of length ', a.length)

/* Push, unshift, pop,  operations
Push adds an element at the end
Unshift adds an element at the beginning
Pop removes the last element
Shift removes the first element
*/
a.push(55)
console.log('The array a now is of length ', a.length)
a.pop()
console.log('The array a now is of length ', a.length)
a.unshift(1)
console.log(a)
a.shift()
console.log(a)
console.log(a.indexOf(47))

// Ternary operators
console.log(a.indexOf(47) === 0 ? 'yep' : 'Nope')