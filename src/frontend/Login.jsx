import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../backend/context/GlobalContext';

export const Login = () => {

  const [user, setUser] = useState({
    email: '',
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
      const res = login(user.email, user.password);
      if(res){
        navigate('/home')
      }
    } catch (err) {
      console.log(err)
    }
  };

  const handleClick =() =>{
    navigate('/verify-user-email')
  }
 

  return (
    <div className='background-inicio'>
      <div className="login-box">
            <h1>UAGRM</h1>
            <form onSubmit={handleSubmit}>

              <label>Usuario</label>
              <input name='email' type="text"  onChange={handleChange}  placeholder="Escribe tu usuario"/>

              <label>Contraseña</label>

              <input name='password'  type="password" onChange={handleChange} placeholder="Escribe tu contraseña"/>

              <input type="submit" value="Entrar"/>


              <a onClick={()=>handleClick()}>Lost your password?</a>

              <br/>

            </form>
          </div>
    </div>
  )
}


