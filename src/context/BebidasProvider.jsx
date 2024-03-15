import { createContext, useEffect, useState } from "react";
import axios from "axios";


const BebidaContext = createContext()


const BebidaProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if (!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])



    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)

            setBebidas(data.drinks);

        } catch (error) {
            console.log(error)
        }
    }

    const showModal = () => {
        setModal(!modal)
    }

    const handleBebidaId = (id) => {
        setBebidaId(id)
    }



    /*Exportarmos nuestras funciones, nuestra data, etc*/

    return (
        <BebidaContext.Provider value={{
            consultarBebida,
            bebidas,
            showModal,
            modal,
            handleBebidaId,
            receta,
            cargando
        }}>
            {children}
        </BebidaContext.Provider>
    )

}

export {
    BebidaProvider,
}

export default BebidaContext