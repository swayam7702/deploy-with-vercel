import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComp = () => {
  return (
    <div className='err-comp'>
        <img src="https://img.freepik.com/premium-vector/page-found-404-error-gradient-vector-illustration-upset-man-sitting-work-desk-with-laptop-seeing-404-error-people-using-website-having-problems-due-broken-web-page_509478-153.jpg?ga=GA1.1.682724094.1724996015&semt=ais_hybrid" width="500px" alt="" />
        <p>Unfortunately the page you are looking for has been moved or deleted</p>
        <Link className='link' to='/'>Go To Home</Link>
    </div>
  )
}

export default ErrorComp
