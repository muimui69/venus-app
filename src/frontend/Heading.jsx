import { useGlobal } from '../backend/context/GlobalContext';
import { useNavigate,useLocation,Link} from 'react-router-dom';

export const Heading =()=>{

    const { logout,user} = useGlobal();
    const navigate = useNavigate();
    const location = useLocation();
   
    return (
        <>
            {
                user && location.pathname!=='/404' &&   
                    <nav className="nav">
                
                        <div className="nav-container">
                            <div className="nav-title">
                        
                                <h1> Cartas digitales </h1>

                                <Link to='/home' className="btn-superior"> Pendientes </Link>

                                <Link to='/home/listview-aceptado' className="btn-superior"> Aprobadas </Link>

                                <Link to='/home/listview-rechazado' className="btn-superior"> Rechazadas </Link>

                                <Link to='/home/pdf-redact' className="btn-superior"> Redactar Carta </Link>

                                <button onClick={()=>{logout()}} className="btn-superior">
                                    Cerrar Sesion
                                </button>
                            </div>
                        </div>
                    </nav>

                /*
                    <a href="#menu" className="nav-menu">
                        <img src="../../ramaPur/assets/menu.svg" className="nav-icon"/>
                    </a>

                    <a href="#" className="nav-menu nav-menu-second">
                        <img src="../../ramaPur/assets/close.svg" className="nav-icon"/>
                    </a>


                    <ul className="dropdown" id="menu">
                        <li className="dropdown-list">
                            <a href="" className="dropdown-link">
                                <img src="../../ramaPur/assets/house.svg" className="dropdown-icon" alt=""/>
                                    <span className="dropdown-span" > MENÚ </span>
                            </a>
                        </li>

                        <li className="dropdown-list">
                            <a href="" className="dropdown-link">
                                <img src="../../ramaPur/assets/projects.svg" className="dropdown-icon" alt=""/>
                                <span className="dropdown-span" > Lista de cartas </span>
                                <img src="../../ramaPur/assets/down.svg" className="dropdown-arrow"/>

                                <input type="checkbox" className="dropdown-check"/>
                            </a>

                            <div className="dropdown-content">
                                <ul className="dropdown-sub">
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Project 1 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Project 2 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Project 2 </a>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        <li className="dropdown-list">
                            <a href="" className="dropdown-link">
                                <img src="../../ramaPur/assets/email.svg" className="dropdown-icon" alt=""/>
                                <span className="dropdown-span" > Nueva Carta </span>
                                <img src="../../ramaPur/assets/down.svg" className="dropdown-arrow"/>
                                <input type="checkbox" className="dropdown-check"/>
                            </a>

                            <div className="dropdown-content">
                                <ul className="dropdown-sub">
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 1 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 2 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 3 </a>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        <li className="dropdown-list">
                            <a href="" className="dropdown-link">
                                <img src="../../ramaPur/assets/help.svg" className="dropdown-icon" alt=""/>
                                <span className="dropdown-span" > Aceptados </span>
                                <img src="../../ramaPur/assets/down.svg" className="dropdown-arrow"/>
                                <input type="checkbox" className="dropdown-check"/>
                            </a>

                            <div className="dropdown-content">
                                <ul className="dropdown-sub">
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 1 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 2 </a>
                                    </li>
                                    <li className="dropdown-li">
                                        <a href="#" className="dropdown-anchor"> Contacto 3 </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="dropdown-list">
                            <a href="" className="dropdown-link">
                                <img src="../../ramaPur/assets/help.svg" className="dropdown-icon" alt=""/>
                                <span className="dropdown-span" > Rechazados </span>
                                <img src="../../ramaPur/assets/down.svg" className="dropdown-arrow"/>
                                <input type="checkbox" className="dropdown-check"/>
                            </a>

                                <div className="dropdown-content">
                                    <ul className="dropdown-sub">
                                        <li className="dropdown-li">
                                            <a href="#" className="dropdown-anchor"> Contacto 1 </a>
                                        </li>
                                        <li className="dropdown-li">
                                            <a href="#" className="dropdown-anchor"> Contacto 2 </a>
                                        </li>
                                        <li className="dropdown-li">
                                            <a href="#" className="dropdown-anchor"> Contacto 3 </a>
                                        </li>
                                    </ul>
                                </div>
                        </li>
                    </ul>
                </div>
            </nav>  
             */      
            }  
        </>
   )
}