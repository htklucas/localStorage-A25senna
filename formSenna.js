
function sent(){

    let numero = document.getElementById('numero').value
    
    localStorage.setItem('Numero', numero)
    
    let result = localStorage.getItem('Numero')
    let resultShow = document.getElementById('resultShow')

    resultShow.value = result
    
    console.log(`${numero} & ${result}`)

}