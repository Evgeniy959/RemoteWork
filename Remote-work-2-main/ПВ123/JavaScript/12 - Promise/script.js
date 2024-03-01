// console.log('Start : ' + Date.now());
// loadScript('one.js');
// console.log(' End  : ' + Date.now());


// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.append(script);
// }

// setTimeout(() => {
//     one();
// }, 500);




// console.log('Start : ' + Date.now());
// loadScript('ne.js', function(error) {
//     if (error) {
//         console.error(error);
//     } else {
//         one();
//     }
// });


// console.log(' End  : ' + Date.now());


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log('Script loaded');
//         callback();
//     };

//     script.onerror = function() {
//         console.log('Not found');
//         callback(new Error('Not found'));
//     };

//     document.body.append(script);
// }




//#region 
//#endregion






// loadScript('one.js', function(error) {
//     if (error) {
//         console.error(error);
//     } else {
//         one();
//     }
// });

// loadScript('two.js', function(error) {
//     if (error) {
//         console.error(error);
//     } else {
//         two();
//     }
// });

// loadScript('three.js', function(error) {
//     if (error) {
//         console.error(error);
//     } else {
//         three();
//     }
// });



// loadScript('one.js', function(error) {
//     one();

//     loadScript('two.js', function(error) {
//         two();
//         loadScript('three.js', function(error) {
//             three();
//         });
//     });
// });




// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         callback();
//     };

//     script.onerror = function() {
//         callback(new Error('Not found'));
//     };

//     document.body.append(script);
// }





// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         //resolve("Done");
//         reject("Error!");
//     }, 500);
//     // resolve("DONE");
//     // reject("Error!");
// });


// promise.then(function(result) {
//     console.log(result);
// }, function(error) {
//     console.error(error);
// })


// promise.then(function(result) {
//     console.log(result);
// }).catch(function(result) {
//     console.log(result);
// });

// promise.then(
//     result =>console.log(result),
//     error =>console.log(error)
// );


// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Test"))







// function loadScriptAsync(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = function() {
//             resolve(src);
//         };

//         script.onerror = function() {
//             reject(new Error('Not found'));
//         };

//         document.body.append(script);
//     })
// }


// loadScriptAsync('one.js')
//     .then(result => one());
// loadScriptAsync('two.js')
//     .then(result => two());
// loadScriptAsync('three.js')
//     .then(result => three());


// loadScriptAsync('one.js')
//     .then(result => one())
//     .catch(error => console.error(error));

// loadScriptAsync('two.js')
//     .then(result => two())
//     .catch(error => console.error(error));

// loadScriptAsync('three.js')
//     .then(result => three())
//     .catch(error => console.error(error));



// loadScriptAsync('one.js')
//     .then(result => {
//         one();
//         return loadScriptAsync('two.js');
//     }).then(result => {
//         two();
//         return loadScriptAsync('three.js');
//     }).then(result => three())


// console.log('Star');
// Promise.all([
//     loadScriptAsync('one.js'),
//     loadScriptAsync('two.js'),
//     loadScriptAsync('three.js')
// ]).then(results => {
//     console.log("All loaded!!");
//     one();
//     two();
//     three();


//     for (const str of results) {
//         console.log(str);
//     }
// })
// console.log('End');




function loadScriptAsync(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = function() {
            resolve(src);
        };

        script.onerror = function() {
            reject(new Error('Not found'));
        };

        document.body.append(script);
    })
}

// async function main() {
//     console.log('Start func');
//     await loadScriptAsync('one.js');

//     console.log('End func');

//     one();
// }

// console.log('Begin');
// main();
// console.log('End');


async function main() {
    console.log('Start func');
    await loadScriptAsync('one.js');

    console.log('End func');

    one();
}

console.log('Begin');
main();
console.log('End');



console.log(test);