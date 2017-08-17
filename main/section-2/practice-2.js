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
    let obj = result.find(n => n.key == item)
    if (obj) {
        obj.count += count;
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

module.exports = function countSameElements(collection) {
    // let expandedArray = expand(collection);
    // return summarize(expandedArray);
    let result = [];
    collection.map(function (item) {
        if (item.length === 1) {
            summarize(result, item, 1);
        } else {
            let {key, count} = split(item);
            summarize(result, key , count);
        }
    });
    return result;
}
