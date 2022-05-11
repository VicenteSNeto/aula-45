function promessa(){

    return new Promise(
resolve => {
seTimetout(

    () => resolve(10),
    3000
)

}

    )
} 

const primeiraFuncao = async () => {


    const valor = await segundaFuncao()
    return valor + 3
}

const segundaFuncao = async () => {

    const valor = await promesssa()
    return valor * 3
}

primeiraFuncao().then(

    function(resultado){

        
    }
)