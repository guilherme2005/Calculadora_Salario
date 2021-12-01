

function salarios(){

    let valorHora = document.getElementById('valorHora').value
    let horasTrabalhadas = document.getElementById('horasTrabalhadas').value
    
    let bruto = valorHora * horasTrabalhadas
    
    let salarioBruto = document.getElementById('salarioBruto').value = bruto.toFixed(2)
    
    if(horasTrabalhadas >155 && horasTrabalhadas < 165){
        var gratificacao = bruto * 0.15
        bruto + gratificacao
    }

    if(salarioBruto > 2000){
        var impostoRenda = (salarioBruto * 0.15)
        bruto - impostoRenda
    }
    
    

    let imposto = document.getElementById('imposto').value = impostoRenda.toFixed(0)



}