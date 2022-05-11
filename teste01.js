new Promise((resolve, rejeita) => {
    let a = 10;
    let b = 20;

    resolve(a+b)
}).then(
    function(res){
        console.log(res)
}).then(
    function(){
        console.log("O primeiro then funcionou")

        // chamado em caso de sucesso
}).then(
    function(){
        console.log("O segundo then funcionou")
}).catch((reject)=>{
    console.log(reject)
})

