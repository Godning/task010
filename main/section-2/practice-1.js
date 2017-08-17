'use strict';

// function find(collection, ch) {
//     for (let item of collection) {
//         if (item.key === ch) {
//             return item;
//         }
//     }
//
//     return null;
// }

module.exports = function countSameElements(collection) {
    let result = [];
    // for (let item of collection) {
    //     let obj = find(result, item)
    //     if (obj) {
    //         obj.count++;
    //     } else {
    //         result.push({key: item, count: 1});
    //     }
    // }
    collection.map(function (x) {
        let obj = result.find((n) => n.key == x);
        if(obj){
            obj.count++;
        }
        else{
            result.push({key: x, count: 1});
        }
    });
    return result;
}
