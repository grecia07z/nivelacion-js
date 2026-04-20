
let nombre = prompt ('nombre ')
function saludar (nombre){
    console.log ('nombre' + nombre)
    console.log (`hola ${nombre}`)

}
saludar( nombre)

let sumar= (nro1,nro2) => {alert(nro1+nro2)}

let restar= (nro1,nro2) => {alert (nro1-nro2)}

let calcular= (nro1, nro2, accion) => {
    accion (nro1,nro2)
}
calcular ()
