import {useGlobal} from '../backend/context/GlobalContext';

export const Home =()=>{

    const {logout} = useGlobal();

    return(
        <>
            <button onClick={()=>logout()}>salir</button>
            <div className="Alinear_Flex">
                <img src="http://3.bp.blogspot.com/-YSJFfxlZjoQ/TyhSf26nFJI/AAAAAAAAAGo/vA9cGat7CI4/s1600/logo_uagrm_1.jpg" alt="logo central"/>
            </div>
        </ >
    )
}