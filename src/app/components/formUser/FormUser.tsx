import { useState } from "react"
import style from './formUser.module.scss'

const FormUser = () => {
  const [login, setLogin] = useState(false)
  const [activate, setActivate] = useState(true)

  const handleActions = () => {
    setLogin(!login)
    setActivate(!activate)
  }

  return (
    <div className={style.formuser}>
      <div className={style.actions}>
        <button
          style={{ backgroundColor: activate ? '#F0B90B' : '#262626' }}
          onClick={() => handleActions()}>
          Sign up
        </button>
        <button
          style={{ backgroundColor: !activate ? '#F0B90B' : '#262626' }}
          onClick={() => handleActions()}>
          Log in
        </button>
      </div>
      {!login &&
        <div className={style.signup}>
          <button>Register with your Email</button>
          <p>For any questions, reach out to support@Quickbetdmovies.com</p>
        </div>
      }
      {login &&
        <div className={style.login}>
          <p>We love having you back</p>
          <form >
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <button>Continue</button>
            <p>For any questions, reach out to support@Quickbetdmovies.com</p>
          </form>
        </div>
      }
    </div>
  )
}

export default FormUser