import 'bootstrap/dist/css/bootstrap.min.css'
import TituloSecundario from './components/TituloSecundario'
import Contador from './components/Contador';

function App() {
 // aqui agregaos toda la logica que necesita el componente
const anioActual = 2023;
  return (
    //aqui puedo agregar logica muy pequena
    <>
    {/*aqui empiezo a maquetar en el fragment o en una etiqueta contenedora */}
   <section className='container my-4'>
    <h1 className='display-3 text-center'>Contador con React</h1>
    <TituloSecundario comision='c73i' anioActualProps={anioActual}></TituloSecundario>
    <Contador/>
   </section>
   </>
  )
}

export default App
