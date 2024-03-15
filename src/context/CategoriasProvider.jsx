
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const CategoriasContext = createContext()

const CategoriaProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([])
   

    const consultarAPi = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
        const { data } = await axios(url)
        setCategorias(data.drinks)
    }

   

    useEffect(() => {
        consultarAPi()
    }, [])

   



    return (
        <CategoriasContext.Provider
            value={{ categorias }}

        >
            {children}
        </CategoriasContext.Provider>
    )


}

export {
    CategoriaProvider
}

export default CategoriasContext