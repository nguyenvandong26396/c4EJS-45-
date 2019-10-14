let str=prompt("Nhap string:");
async function kiemTra(str){
    let newPromise= new Promise(function(resolve,reject){
        if(isNaN(str)===true){
            resolve(str);
        }else{
            reject("not a string")
        }
        return newPromise;
    })
}
function call(){
    kiemTra(str).then(function(){
        console.log(str);
    }).catch(function(){
        console.log(reject);
    })

}
call();