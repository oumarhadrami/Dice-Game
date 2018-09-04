// example
var someFamily = {
    'income': 42577,
    'numberOfMembers': 4
}

console.log(someFamily.income)
console.log(someFamily['numberOfMembers'])

someFamily.income = 70000
someFamily.numberOfMembers = 5
console.log(someFamily)

// declaring object

turtle = new Object()
turtle.name = 'Raphael'
turtle.size = 40
console.log(turtle)
turtle['size'] = 70
console.log(turtle)

// object methods
elephant = {
    'name': 'Zou',
    'height': 14,
    'weight': function (height) {
        return height ** 3
    }
}
console.log(elephant.name, elephant.height, elephant.weight(4))

//this keyword
cat = {
    'name': 'Tom',
    'height': 2,
    'weight': function () {
        return this.height ** 2
    }
}
console.log(cat)


dog = new Object({
    name: 'Tom',
    size: 4,
    weight: 40

})
console.log(cat)