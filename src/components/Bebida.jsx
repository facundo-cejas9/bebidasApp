import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export const Bebida = ({ bebida }) => {


    const { showModal, handleBebidaId } = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`imagen de ${bebida.strDrink}`}

                />
                <Card.Body>
                    <Card.Title className='text-center'>{bebida.strDrink}</Card.Title>
                    <Button className='text-uppercase w-100 mt-2'
                        onClick={() => {
                            showModal()
                            handleBebidaId(bebida.idDrink)
                        }}
                    >
                        Ver receta
                    </Button>
                </Card.Body>

            </Card>
        </Col>
    )
}
