import { Container } from "react-bootstrap"
import { Formulario } from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriasProvider"
import { BebidaProvider } from "./context/BebidasProvider"
import { ListadoBebidas } from "./components/ListadoBebidas"
import { ModalBebida } from "./components/ModalBebida"





function App() {

  return (
    <CategoriaProvider>
      <BebidaProvider>
        <header className="py-5">
          <h1>Buscador de bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>
      </BebidaProvider>
    </CategoriaProvider>
  )
}

export default App
