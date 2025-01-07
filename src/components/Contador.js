import Raeact, { useState } from "react";

const Contador = () => {
  const[cuenta, setContador]=useState(1);
  // se programa la funcion que va a hacer funcionar este contador
  const incrementar=()=>{
    setContador(cuenta+1);
  };
  const decrementar=()=>{
    setContador(cuenta-1);
  };

  return(
    <div>
      <button onClick={decrementar}>-</button>
      <input type="text" value={cuenta} size="2" style={{textAlign:"center"}}></input>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Contador;