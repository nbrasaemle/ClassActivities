var command = process.argv[2]
var amount = process.argv[3]

var fs = require("fs")
const fileName = "bank.txt"

switch (command) {
    case "total":
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                return console.log(err)
            }
            let dataArr = data.split(",")
            let ourTotal = 0
            dataArr.forEach((entry) => {
                ourTotal += parseFloat(entry)
            })
            console.log("Total: " + ourTotal.toFixed(2))
        })
        break;
    case "deposit":
        if (amount < 0) {
            console.log("Cannot deposit a negative amount!!")
        }

        fs.appendFile(fileName, ", " + amount, (err) => {
            if (err) {
                return console.log(err)
            }

        })
        break;
    case "withdraw":
        if (amount < 0) {
            console.log("Cannot withdraw a negative amount!!")
        }

        fs.appendFile(fileName, ", -" + amount, (err) => {
            if (err) {
                return console.log(err)
            }

        })
        break;
    case "lotto":
        let magicNum = Math.floor(Math.random() * 21)
        if (amount == magicNum) {
            fs.appendFile(fileName, ", " + 1000000, (err) => {
                if (err) {
                    return console.log(err)
                }
                console.log("You won a million dollars!!! WOOHOO!!!")
            })
        } else {
            fs.appendFile(fileName, ", -" + amount, (err) => {
                if (err) {
                    return console.log(err)
                }
    
            })          
        }

        break;
    default:
        console.log("Command not recognized: " + command)
}