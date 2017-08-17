'use strict';

// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }
//
//     return false;
// }

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    // for (let item of collectionA) {
    //     if (includes(objectB.value, item)) {
    //         result.push(item);
    //     }
    // }
    result = collectionA.filter( x => objectB.value.includes(x));
    return result;
}
