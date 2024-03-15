import { useEffect, useState } from "react"

import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"

import { Button, Form, Row, Col, Alert } from "react-bootstrap"





export const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: 'Baileys',
        categoria: 'Cocoa'
    })

    const [error, setError] = useState('')
    const { consultarBebida } = useBebidas()
    const { categorias } = useCategorias()

    useEffect(() => {
        consultarBebida(busqueda)
    }, [busqueda.nombre])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        consultarBebida(busqueda)
    }

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Busca la bebida de tu preferencia</Form.Label>
                        <Form.Control
                            id='nombre'
                            type="text"
                            placeholder="Ej: Vino, fernet, etc"
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">Nombre de la bebida</Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option disabled>- Selecciona Categoría -</option>
                            {categorias.map(categoria => (
                                <option key={categoria.strCategory} value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col md={3}>
                    <Button type="submit" variant="danger" className="text-uppercase w-100">Buscar Bebidas</Button>
                </Col>
            </Row>
        </Form>
    )
}
