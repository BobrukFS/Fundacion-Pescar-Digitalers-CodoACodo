let montoTotal = document.getElementsByClassName("monto__total");
let select = document.querySelector(".select");
let cantidad = document.querySelector(".cantidad").value;
let inputCantidad = document.querySelector(".cantidad");
let btnBorrar = document.querySelector(".borrar")
let btnResumen = document.querySelector(".resumen")
let ticket = document.querySelector(".ticket")
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let correo = document.querySelector(".correo");
let formulario = document.querySelector(".formulario-ticket")

function calcularTotal(categoria, cantidad){
    let descuento;
    const cantidadTotal = parseInt(cantidad);
    if(categoria == "estudiante"){
        descuento = 80;
    } else if (categoria == "trainee"){
        descuento = 50;
    }else{
        descuento = 15;
    }
    return (200 - (descuento * 200) / 100) * cantidadTotal;
}


montoTotal[0].textContent = `$${calcularTotal(select.value, cantidad)}`;

select.addEventListener("change", (event)=>{
    const option = event.target.options[event.target.selectedIndex];
    const valor = option.value;
    montoTotal[0].textContent = `$${calcularTotal(valor , cantidad)}`;
})

inputCantidad.addEventListener("change", (event)=>{
    
    cantidad = document.querySelector(".cantidad").value;
    montoTotal[0].textContent = `$${calcularTotal(select.value, cantidad)}`;
})

btnBorrar.addEventListener("click", ()=>{
    cantidad = 1;
    select.value = "estudiante";
    montoTotal[0].textContent = `$${calcularTotal(select.value, cantidad)}`;
})

formulario.addEventListener("submit", ()=>{
    ticket.innerHTML = `
        <p class="fs-1 fw-bold text-success">Muchas gracias por su compra!</p>
        <div class="ticket-resumen  d-flex flex-column align-items-start justify-content-between  text-center p-3 border-2 rounded-1">
            <div>
            <p class="fs-3 fw-bold">Ticket</p>
            <p class="fs-4">Nombre: ${nombre.value}</p>
            <p class="fs-4">Apellido: ${apellido.value}</p>
            <p class="fs-4 my-0
            ">Correo: ${correo.value}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#28a745" class="bi bi-bag-check-fill align-self-center" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            </svg>
            <div>
            <p  class="fs-5">Cantidad de Tickets: ${cantidad}</p>
            <p class="fs-3 fw-bold">Monto a pagar: $${calcularTotal(select.value, cantidad)}</p>
            <p class="fs-5">* presentar documentacion</p>
            </div>
        </div>
    `
})