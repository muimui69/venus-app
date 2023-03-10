import { Link } from "react-router-dom"

export const Acept = () => {
    return (
        <>
            <div className="container-acept">
                <table>
                    <div>
                        <lbody>
                            <tr>
                                <td>
                                    <p className="text12">Felicidades</p>
                                </td>
                            </tr>
                        </lbody>
                    </div>
                    <div>
                        <pbody>
                            <tr>
                                <td>
                                    <h1 className="text15">Tu solicitud ha sido aceptada</h1>
                                </td>
                            </tr>
                        </pbody>
                    </div>
                </table>
                <div id="buton_atras"></div>
                <Link to='/home/listview-aceptado' className="buton buton-virde"> ATRAS </Link>
            </div>
        </>
    )
}