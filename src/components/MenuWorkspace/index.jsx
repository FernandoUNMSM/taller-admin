import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function MenuWorkspace({ }) {
  return (
    <>
      <div className="container">
        <div className="menu">
          <Link to='/usuarios'>
            <div className="item">
              <p>Usuarios</p>
            </div>
          </Link>
          <Link to='/incidencias'>
            <div className="item">
              <p>Incidencias</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}