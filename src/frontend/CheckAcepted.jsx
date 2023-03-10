import { Link } from "react-router-dom"

export const CheckAcepted = () => {
    return (
        <>
            <div className="container-progress">
                <div className="t"></div>
                <table>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Director de la Granja
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Director de Centros de Investigación
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Decano Facultativo
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Director de Area Financiera
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Decano Facultativo
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio"/>
                                Director de Area Financiera
                        </td>
                    </tr>
                </table>

                <Link to='/home/listview-aceptado' className="btn-progress"> ATRAS </Link>
            </div>
        </>
    )
}