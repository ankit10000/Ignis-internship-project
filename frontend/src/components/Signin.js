import React from 'react'

function Signin() {
  return (
    <div className='w-50 container mt-5 signup'>
      <h2 className='mb-4 fw-bolder text-color-red'>Log in</h2>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="password"/>
      </div>
      <button type="submit" className='btn btn-danger '>Log in</button>
    </div>
  )
}

export default Signin