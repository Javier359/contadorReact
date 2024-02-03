import { useState } from "react"; //ESTO ES PARA INCORPORRAR LOS ESTADOS AL COMPONENTE
const Contador = () => {
  //creo mi estado
  const [numero, setNumero] = useState(10); //nombre sel state, funcion del state
  //   let numero = 10;
//   setNumero(1); los estados se actualizan con la funcion set
  return (
    <article className="text-center">
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button className="btn btn-primary" onClick={() => setNumero(numero + 1)}>
        +1
      </button>
    </article>
  );
};

export default Contador;
