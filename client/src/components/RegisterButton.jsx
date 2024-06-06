import React from 'react'
import { Link } from 'react-router-dom'

const RegisterButton = () => {
  return (
    <div>
            <Link to={'/register'} className="btn mr-8 ">
                Register
              </Link>

    </div>
  )
}

export default RegisterButton
