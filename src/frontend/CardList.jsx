export const CardList =()=>{
    return(
        <div className="background-card">

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
                        <td>1258879</td>
                        <td>SOLICITUD 1</td>
                        <th>24/08/22</th>
                        <div id="main-container"></div>
                        <a href="#" className="btn btn-green">VER</a>
                        <div id="main-container3"></div>
                        <a href="#" className="btn3 btn-orange3">PASOS</a>
                    </tr>
                    <tr> 
                        <td>1594275</td>
                        <td>SOLICITUD 2</td>
                        <th>30/07/22</th>
                        <div id="main-container2"></div>
                        <a href="#" className="btn2 btn-green2">VER</a>
                        <div id="main-container4"></div>
                        <a href="#" className="btn4 btn-orange4">PASOS</a>
                    </tr>               
                </tbody>
            </table>
        </div>
        </div>
    )
}