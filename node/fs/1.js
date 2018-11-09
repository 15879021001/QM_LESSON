const fs = require('fs');

try {
    const fileAPromise = new Promise((resolve, reject) => {
        fs.readFile('./a.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    const fileBPromise = new Promise((resolve, reject) => {
        fs.readFile('./b.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    const fileCPromise = new Promise((resolve, reject) => {
        fs.readFile('./c.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    Promise.all([fileAPromise,fileBPromise,fileCPromise])
           .then(responses => {
               console.log(responses);
           })
//---------------------------------------------------------------------
    // fileAPromise
    //     .then(data =>{
    //         console.log('文件A',data);
    //         return fileBPromise;
            
    //     })
    //     .then(data => {
    //         console.log('文件B',data);
    //         return fileCPromise;
    //     })
    //     .then(data => {
    //         console.log('文件C',data);
    //     })
    //     .catch(err => {
    //         console.log(err);

    //     });

//--------------------------------------------------------------------------
    // const fileBPromise = new Promise((resolve,reject) =>{
    //     fs.readFile('./ab.txt','utf-8',function(err,data){
    //         if(err){
    //             reject(err);
                
    //         } else{
    //             resolve(data);
    //         }
    //     })
    // });
    // fileBPromise
    //     .then(data=>{
    //         console.log(data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
            
    //     })
    
} catch (e) {
    console.log('读取文件失败' + e.message);
}

//-------------------------------------------------------------
// try {
//     const dataA = fs.readFileSync('./a.txt','utf-8');
//     const dataB = fs.readFileSync('./b.txt','utf-8');
//     const dataC = fs.readFileSync('./c.txt','utf-8');
//     console.log(dataA);
//     console.log(dataB);
//     console.log(dataC);



// } catch (e) {
//     console.log('读取文件失败'+e.message);

// }


// try {
//     fs.readFile('./a.txt', 'utf-8',
//         function (err, data) {
//             console.log(data);
//             fs.readFile('./b.txt', 'utf-8',
//                 function (err, data) {
//                     console.log(data);
//                     fs.readFile('./c.txt', 'utf-8',
//                         function (err, data) {
//                             console.log(data);

//                         })
//                 })

//         })
// } catch (e) {

// }