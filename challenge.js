function tipCalculator(bill) {

    if (bill < 50) {
        console.log(54)
        return bill * 20 / 100
    } else if (bill > 50 && bill < 200) {
        return bill * 15 / 100
    } else {
        return bill * 10 / 100
    }
}


var bills = [40, 75, 400]
var a = []
a.push(tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[1]))
finalBills = [bills[0] + a[0], bills[1] + a[1], bills[2] + a[2]]
console.log(finalBills)