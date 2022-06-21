const {BadRequestError} = require("../utils/errors")

class GiftExchange {

    /*static pairs(names) {
        if (names.length %2 != 0) {
            throw new Error("The number of names cannot be odd")
        }

        let arr1 = names.slice()
        let arr2 = names.slice()
    
        arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
        arr2.sort(function() { return 0.5 - Math.random();});

        let pairings = []

        while (arr1.length) {
            var name1 = arr1.pop(), // get the last value of arr1
                name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                //        ^^ if the first value is the same as name1, 
                //           get the last value, otherwise get the first
    
            pairings.push([name1, name2])
            console.log(name1 + ' gets ' + name2); 
        }

        return pairings;
    } */


    static pairs(names){
        if(names.length % 2 != 0) throw new BadRequestError("Number of names can't be odd")


        var result = (game = (i = names.length/2, xs = (ls = names) => {
            return ls.slice(0).sort(function(){
                return .5 - Math.random();
            });
        }) => {
            let ps = xs()
            var a = ps.slice(0,i);
            var b = ps.slice(i, ps.length);
            return [a,b]
        }) => {
            let games = game()
            return games[0].map(function(_,i){
                return games.map(function(x){
                    return x[i];
                });
        });
        }

        let pairsArray = result()
        return pairsArray
    }

/*
   static async traditional(names) {
    if (names.length %2 != 0) {
        throw new Error("The number of names cannot be odd")
    }

    var arr1 = names.slice()
    var arr2 = names.slice()

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    var order = []
    var returnString = []

    while (arr1.length) {
        var name1 = arr1.pop(), // get the last value of arr1
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            //        ^^ if the first value is the same as name1, 
            //           get the last value, otherwise get the first

        order.push(name1, name2)
        console.log(name1 + ' gets ' + name2); 
    }
    for (let i = 0; i < order.length; i++) {
        if ( i != order.length-1) {
            console.log("Not in end")
            returnString.push(order[i] + " is giving a gift to " + order[i+1])
        }
        else {
            console.log("Reached the end")
            returnString.push(order[i] + " is giving a gift to " + order[0])
        }
    }

    return returnString;

  }
*/

static traditional(names){
        if(names.length % 2 != 0) throw new BadRequestError("Number of names can't be odd")
        
        //declare the array
        let pairsArray = []

        var arr1 = names.slice(),
        arr2 = names.slice();
    
        arr1.sort(function() { return 0.5 - Math.random();});
        arr2.sort(function() { return 0.5 - Math.random();});
    
        while (arr1.length) {
            var name1 = arr1.pop(),
                name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
        
                pairsArray[arr1.length] = (name1 + ' is giving a gift to ' + name2);
    }
        return pairsArray
    }

} 

module.exports = GiftExchange 