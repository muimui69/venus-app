import { useGlobal } from "../backend/context/GlobalContext";


const renderList = (tipo, solicitud,count) => {
    switch (tipo) {
        case 'pendiente':
            return (
                <>
                    {
                        (count === 0)?
                            <section>
                                <h1 className="text">Aun no tiene solicitudes pendientes</h1>
                            </section>
                        :
                        <section >
                            <h1 className="text">Lista De Cartas Pendientes</h1>
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
                                    {
                                         solicitud.map(({id, codigo, tipo, fecha }) => (
                                            <tbody key={id}>
                                                <tr>
                                                    <td>{codigo}</td>
                                                    <td>{tipo}</td>
                                                    <td>{fecha}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-green">VER</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn btn-orange">PASOS</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                   
                                </table>
                            </div>
                        </section>
                    }
                </>
            )

            break;

        case 'aceptado':
            return (
                <>
                    {
                        (count === 0)?
                            <section>
                                <h1 className="text" >Aun no tiene solicitudes aceptadas</h1>
                            </section>
                        :
                        <section >
                            <h1 className="text">Lista De Cartas Aceptadas</h1>
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
                                    {
                                         solicitud.map(({id, codigo, tipo, fecha }) => (
                                            <tbody key={id}>
                                                <tr>
                                                    <td>{codigo}</td>
                                                    <td>{tipo}</td>
                                                    <td>{fecha}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-green">VER</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn btn-orange">PASOS</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                   
                                </table>
                            </div>
                        </section>
                    }
                </>
            )

            break;

        case 'rechazado':
            return (
                <>
                    {
                        (count === 0)?
                            <section>
                                <h1 className="text" >Aun no tiene solicitudes rechazadas</h1>
                            </section>
                        :
                        <section >
                            <h1 className="text">Lista De Cartas Rechazadas</h1>
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
                                    {
                                         solicitud.map(({id, codigo, tipo, fecha }) => (
                                            <tbody key={id}>
                                                <tr>
                                                    <td>{codigo}</td>
                                                    <td>{tipo}</td>
                                                    <td>{fecha}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-green">VER</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn btn-orange">PASOS</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                   
                                </table>
                            </div>
                        </section>
                    }
                </>
            )

            break;

        default:
            returm (<></>)
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