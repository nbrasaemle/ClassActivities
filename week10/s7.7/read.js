var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function (err, data) {

    if (err) {
        return console.log(err);
    }//end if



    var dataArr = data.split(",");
    //console.log(dataArr);

    for (var i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i]);

    }//end for loop

}); //end readFile