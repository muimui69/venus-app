import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {

  const [emailUser, setEmail] = useState({
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setEmail({ ...emailUser, [name]: value });
    console.log(name,value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/verify-user-email/reset-password');
  };
 

  return (
    <div className='background-inicio'>
      <div className="login-box">
            <h1>Cambiar contraseña para </h1>
            <form onSubmit={handleSubmit}>

              <label>Ingrese su correo</label>
              <input name='email'  type="text" onChange={handleChange} />

              <input type="submit" value="Verificar Email"/>
              <br/>
            </form>
          </div>
    </div>
  )
}


