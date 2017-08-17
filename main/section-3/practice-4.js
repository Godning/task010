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

function summarize(result, item, count) {
    let obj = result.find( n => n.key == item);
    if (obj) {
        obj.count+= count;
    } else {
        result.push({key: item, count: count});
    }
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

// function push(result, key, count) {
//     for (var i = 0; i < count; i++) {
//         result.push(key);
//     }
// }

// function expand(collection) {
//     let result = [];
//     for (let item of collection) {
//         if (item.length === 1) {
//             result.push(item);
//         } else {
//             let {key, count} = split(item);
//             push(result, key, count);
//         }
//     }
//     return result;
// }

// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }
//
//     return false;
// }

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
    // let expandedArray = expand(collectionA);
    // let summarizedArray = summarize(expandedArray);
    // return discount(summarizedArray, objectB.value);
    let result = [];
    collectionA.map(function (item) {
        if (item.length === 1) {
            summarize(result, item, 1);
        } else {
            let {key, count} = split(item);
            summarize(result, key, count);
        }
    });
    return result.map(function (item) {
        if(objectB.value.includes(item.key)){
            item.count = item.count - Math.floor(item.count / 3);
        }
        return item;
    });
}
