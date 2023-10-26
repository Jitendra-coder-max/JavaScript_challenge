let arr = ["a","b","c","d","e"]
// let arr1 = arr.splice(2,2)
        // let arr1 = arr.splice(2,2,'k', 'l')
        // let arr1 = arr.splice(2)
        let arr1 = arr.splice(2,0, 'l') // add element without deleting

        console.log(arr1)
        console.log(arr)
        