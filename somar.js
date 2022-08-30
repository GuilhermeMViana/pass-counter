function somar() {
    // Vars
    let inicio = document.getElementById('iniciotxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('passotxt')
    let resultado = document.getElementById('resultado')
    
    // No data error
    if(inicio.value.length == 0 || fim.value.length == 0){
        resultado.innerHTML = `Impossível contar!`
        //alert("[ERRO] Faltam dados!")
    } else{
        //Sum structure
        resultado.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            // Passo sem valor 
            alert('Passo inválido! Considerando 1!')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            //Contagem Decrescente
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
        
    }
        

}