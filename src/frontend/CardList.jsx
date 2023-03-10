import { useGlobal } from "../backend/context/GlobalContext";


const renderList = (tipo, solicitud,count) => {
    switch (tipo) {
        case 'pendiente':
            return (
                <>
                    {
                        (count === 0)?
                            <h1>Aun no tiene solicitudes pendientes</h1>
                        :
                            <>
                                {
                                    solicitud.map(({id, codigo, referencia, fecha }) => (
                                        <>

                                            <div key={id} className="background-card">

                                                <kbody>
                                                    <h1 className="text">Lista De Cartas Pendientes</h1>
                                                </kbody>


                                                <div className="container">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>CODIGO</th>
                                                                <th>REFERENCIAR</th>
                                                                <th>FECHA</th>
                                                                <th>VER</th>
                                                                <th>PASOS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{codigo}</td>
                                                                <td>{referencia}</td>
                                                                <th>{fecha}</th>
                                                                <div id="main-container"></div>
                                                                <a href="#" className="btn btn-green">VER</a>
                                                                <div id="main-container3"></div>
                                                                <a href="#" className="btn3 btn-orange3">PASOS</a>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                    }
                </>
            )

            break;

        case 'aceptado':
            return (
                <>
                    {
                        (count === 0)?
                            <h1>Aun no tiene solicitudes aceptadas</h1>
                        :
                            <>
                                {
                                    solicitud.map(({id, codigo, referencia, fecha }) => (
                                        <>

                                            <div key={id} className="background-card">

                                                <kbody>
                                                    <h1 className="text">Lista De Cartas Pendientes</h1>
                                                </kbody>


                                                <div className="container">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>CODIGO</th>
                                                                <th>REFERENCIAR</th>
                                                                <th>FECHA</th>
                                                                <th>VER</th>
                                                                <th>PASOS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{codigo}</td>
                                                                <td>{referencia}</td>
                                                                <th>{fecha}</th>
                                                                <div id="main-container"></div>
                                                                <a href="#" className="btn btn-green">VER</a>
                                                                <div id="main-container3"></div>
                                                                <a href="#" className="btn3 btn-orange3">PASOS</a>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                    }
                </>
            )
            break;

        case 'rechazado':
            return (
                <>
                    {
                        (count === 0)?
                            <h1>Aun no tiene solicitudes rechazadas</h1>
                        :
                            <>
                                {
                                    solicitud.map(({id, codigo, referencia, fecha }) => (
                                        <>

                                            <div key={id} className="background-card">

                                                <kbody>
                                                    <h1 className="text">Lista De Cartas Rechazados</h1>
                                                </kbody>


                                                <div  className="container">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>CODIGO</th>
                                                                <th>REFERENCIAR</th>
                                                                <th>FECHA</th>
                                                                <th>VER</th>
                                                                <th>PASOS</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{codigo}</td>
                                                                <td>{referencia}</td>
                                                                <th>{fecha}</th>
                                                                <div id="main-container"></div>
                                                                <a href="#" className="btn btn-green">VER</a>
                                                                <div id="main-container3"></div>
                                                                <a href="#" className="btn3 btn-orange3">PASOS</a>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                    }
                </>
            )
            break;

        default:
            break;
    }
}


export const CardList = ({ prop }) => {

    const { solicitud,caseCount } = useGlobal();

    return (
        <>
            {renderList(prop, solicitud,caseCount(prop))}
        </>
    )
}