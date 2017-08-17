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
//
// function summarize(collection) {
//     let result = [];
//     for (let item of collection) {
//         let obj = find(result, item)
//         if (obj) {
//             obj.count++;
//         } else {
//             result.push({key: item, count: 1});
//         }
//     }
//     return result;
// }
//
// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// function discount(collection, promotionItems) {
//     let result = [];
//     for (let item of collection) {
//         let key = item.key;
//         let count = item.count;
//         if (includes(promotionItems, key)) {
//             count = count - Math.floor(count / 3);
//         }
//         result.push({key, count});
//     }
//     return result;
// }

module.exports = function createUpdatedCollection(collectionA, objectB) {
    // let summarized = summarize(collectionA);
    // return discount(summarized, objectB.value);
    let result = [];
    collectionA.map(function (item) {
        let obj = result.find(n => n.key == item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result.map(function (item) {
       if(objectB.value.includes(item.key)){
           item.count = item.count - Math.floor(item.count / 3);
       }
       return item;
    });
}
