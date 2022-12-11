//suma del ahorro total

const TuAhorro= sum(ingresoinicial + gastoinicial)
    let ingresoinicial= document.querySelector("#ingresoinicial").value;
    let gastoinicial= document.querySelector("#gastoinicial").value;

return (TuAhorro)

// agregar al historial todas las cantidades de concepto

const historial = document.querySelector('#historial');
    let hist= document.querySelector("#historial").value;
localStorage.setItem("#historial", historial).value;

    let nuevohistorial ={
        concept,
        amount
    }
    let history =JSON.parse(localStorage.getItem("historial"));
    historial.push(nuevohistorial);
    localStorage.setItem("historial", JSON.stringify(Historial));

    document.querySelector("#historial").reset();

const updateHistorial=()=>{
    let amount=JSON.parse(localStorage.getItem("amount"));

    let amounttotal=0;
    let listadoHTML="";
    amount.map(amounttotal=>{
        listadoHTML += <li class="amount">
                            <p>$ {amount.concept}
                            <span class="amounttotal"> ${amounttotal.amount}</span>
                            </p>
                        </li>;
        
    })

}
// sumar en ingrso solo las cantidades posittivas
// sumar en gasto todas las cantidades negativas

const agregarTransaccion=()=>{
    let concept= document.querySelector("#concept").value;
    let amount= document.querySelector("#amount").value;

    
    if (amount>1 || isNaN(amount) || concept.trim()===""){
        return ingresoinicial;
    }

    if (amount<1 || isNaN(amount) || concept.trim()===""){
        return gastoinicial;
    }

    return (agregarTransaccion)

}



