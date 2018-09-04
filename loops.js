for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('\n')
for (var i = 0; i < 10; i += 2) {
    console.log(i)
}
console.log('\n')
var a = [7, 4, 7, 8]
for (var i = 0; i < a.length; i++) {
    console.log(a[i])
}
console.log('\n')

var i = 4
while (i < 25) {
    console.log(i ** 2)
    i += 10
}

console.log('\n')
var a = [7, 4, 7, 8]
for (var i = 0; i < a.length; i++) {
    if (a[i] == 7) {
        continue
    } else if (a[i] == 8) {
        break
    } else {
        console.log(a[i])
    }
}