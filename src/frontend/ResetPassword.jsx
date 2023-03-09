import { useState } from 'react';

export const ResetPassword = () => {

  const [passwordUser, setPassword] = useState({
    password: '',
    passwordcondirm: ''
  });



  const handleChange = ({ target: { name, value } }) => {
    setPassword({ ...passwordUser, [name]: value });
    console.log(name,value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
 

  return (
    <div className='background-inicio'>
      <div className="login-box">
            <h1>Cambiar contraseña para </h1>
            <form onSubmit={handleSubmit}>

              <label>Contraseña</label>
              <input name='password'  type="password" onChange={handleChange} />

              <label>Confirmar contraseña</label>

              <input name='passwordcondirm'  type="password" onChange={handleChange} />

              <label>Escriba una contraseña de minimo 6 caracteres con combinacion de numeros,letras o caracteres especiales</label>
              
              <input type="submit" value="Cambiar contraseña"/>

              <br/>

            </form>
          </div>
    </div>
  )
}


