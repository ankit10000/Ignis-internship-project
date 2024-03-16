import React from 'react'

function Signup() {
  return (
    <div className='w-50 container mt-5 signup'>
      <h2 className='mb-4 fw-bolder text-color-red'>Sign Up</h2>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="password"/>
      </div>
      <div className="mb-3">
        <label for="confirmpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirmpassword" placeholder="confirmpassword"/>
      </div>
      <button type="submit" className='btn btn-danger '>Signup</button>
    </div>
  )
}

export default Signup