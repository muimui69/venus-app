import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from "../backend/context/GlobalContext";


export const LetterRequest =()=>{
    const {userAddRedactLetter} = useGlobal();

    const [letter, setLetter] = useState({
        codigo: '',
        tipo:'',
        referencia: '',
        fecha:'',
        estado:'pendiente',
        destino:'',
        uidAdmin:'',
        mensaje:''
    });

    const navigate = useNavigate();

    const generarCodigo = () => { 
        return Math.random().toString(30).substring(2, 7);           
    } 

    const handleChange = ({ target: { name, value } }) => {
        setLetter({ ...letter, [name]: value });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await userAddRedactLetter({...letter,codigo:`${generarCodigo()}`});
            navigate('/home');  
        } catch (error) {
            console.log(error)
        }
    }

    const redirectCancel =()=>{
        navigate('/home')
    }


    return(
    <>
        <div className="container-form">
            <h1 className="text2">Nueva Solicitud</h1>

            <form onSubmit={handleSubmit} className="formulario">
                <label onChange={handleChange} htmlFor="tipo">
                    <span>TIPO</span>
                    <input name="tipo" list="tipos" />
                    <datalist id="tipos">
                        <option   value="SOLICITUD"></option>
                        <option   value="RECLAMACION"></option>
                        <option  value="PERMISO"></option>
                    </datalist>
                </label>

                <label htmlFor="fechaz">
                    <span>FECHA</span>
                    <input onChange={handleChange} name="fecha" type="date" id="fechaz"/>
                </label>

                <label onChange={handleChange} htmlFor="destino">
                    <span>DESTINO</span>
                    <input name="destino" list="destinos" />
                    <datalist id="destinos">
                        <option value="DIRECTOR DE GRANJA"></option>
                        <option value="DIRECTOR DE CENTROS DE INVESTIGACION"></option>
                        <option value="DECANO FACULTATIVO"></option>
                        <option value="DIRECTOR DE AREA FINANCIERA"></option>
                    </datalist>
                </label>

                <label htmlFor="referencia">
                    <span>REFERENCIA</span>
                    <input onChange={handleChange} name="referencia" type="text" id="Referencia" placeholder="Motivo de la carta" required />
                </label>


                <label htmlFor="Mensajes">
                    <span>MENSAJE</span>
                    <textarea onChange={handleChange} name="mensaje" placeholder="Redactar contenido" id="Mensajes" onResize="false" cols="30" rows="10"></textarea>
                </label>
                <div>
                    <input onClick={()=>{redirectCancel()}} type="button" value="CANCELAR" className="boton boton-red"/>
                    <input type="submit" value="ENVIAR" className="boton boton-verde"/>
                </div>
            </form>
        </div>
    </>
    )
}