import React from 'react'
import { Image, Modal } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export const ModalBebida = () => {

  const { modal, showModal, receta, cargando } = useBebidas()

  const mostrarBebidas = () => {
    let ingredientes = []
    for (let i = 0; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        )
      }

    }
    return ingredientes
  }




  return (
    !cargando &&
    (<Modal show={modal} onHide={() => {
      showModal()
    }}>
      <Image alt={`imagen receta ${receta.strDrink}`} src={receta.strDrinkThumb} />
      <Modal.Header>
        <Modal.Title className='text-center'>{receta.strDrink}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <h2>Ingredients:</h2>
          {mostrarBebidas()}
          <h2>Recipe: </h2>
          {receta.strInstructions}

        </div>
      </Modal.Body>
    </Modal>
    )
  )
}
