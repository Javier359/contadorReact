import 'bootstrap/dist/css/bootstrap.min.css'
import TituloSecundario from './components/TituloSecundario'

function App() {
 // aqui agregaos toda la logica que necesita el componente

  return (
    //aqui puedo agregar logica muy pequena
    <>
    {/*aqui empiezo a maquetar en el fragment o en una etiqueta contenedora */}
   <section className='container my-4'>
    <h1 className='display-3 text-center'>Contador con React</h1>
    <TituloSecundario></TituloSecundario>
   </section>
   </>
  )
}

export default App
