import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../backend/context/GlobalContext';

export const Login = () => {

  const [user, setUser] = useState({
    code: '',
    password: ''
  });

  const { login } = useGlobal();

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.code,user.password)
      navigate('/home')
    } catch (err) {
      console.log(err)
    }
  };

  const handleClick =() =>{
    navigate('/verify-user-email')
  }

  return (
    <div className=''>
        <div className="login-box"> 
          
          <h1> Ingresar al sistema de cartas digitales </h1>

          <form onSubmit={handleSubmit}>
             
              <div className="div-aux">
                <label htmlFor="usuario">Usuario</label>
              </div>

              <input name='code' type="text"  onChange={handleChange} placeholder="example123"/>
            
              <div className="div-aux">
                <label for="Contraseña">Contraseña</label>
              </div>
              
              <input name='password' onChange={handleChange} type="password" placeholder="********"/>

              <input type="submit" value="Entrar"/>
          </form>
          <div className="div-foot">
              <a onClick={()=>handleClick()} href="#">Olvidaste tu contraseña?</a><br/>
          </div>
      </div>
    </div>
  )
}


