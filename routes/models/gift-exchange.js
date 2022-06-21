class GiftExchange {
    pairs(names) {
        if (names.length %2 != 0) {
            throw new Error("The number of names cannot be odd")
        }

        arr1 = names.slice()
        arr2 = names.slice()
    
        arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
        arr2.sort(function() { return 0.5 - Math.random();});

        pairings = []

        while (arr1.length) {
            var name1 = arr1.pop(), // get the last value of arr1
                name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                //        ^^ if the first value is the same as name1, 
                //           get the last value, otherwise get the first
    
            pairings.push([name1, name2])
            console.log(name1 + ' gets ' + name2); 
        }

        return pairings;
    }

    traditional(names) {
        
    }

}

module.exports = GiftExchange 