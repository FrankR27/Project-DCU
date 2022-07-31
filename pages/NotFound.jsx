import React from 'react'
import { Link } from 'react-router-dom'

export function NotFound () {
  return (
      <div className="text-center pt-5">
        <div className="container-fliud">
          <h1 className="display-1 pt-5 font-weight-bold">404</h1>
          <h1 className="display-4 pt-1 pb-3">Page not found</h1>
          <h3 className="font-weight-light text-secondary">
            The page you are looking for might have been removed </h3>
          <Link to="/" className="btn btn-dark mt-3 pt-3 pb-3 pr-4 pl-4">
            Return to home
          </Link>
        </div>
      </div>
  )
}
