import React from 'react'

const Contact = () => {
  return (
    <div className="container py-4 min-vh-100">

    <form id="contactForm">

        <div className="mb-3">
        <label className="form-label" htmlFor="name">Name</label>
        <input className="form-control" id="name" type="text" placeholder="Name" />
        </div>

        <div className="mb-3">
        <label className="form-label" htmlFor="emailAddress">Email Address</label>
        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>

        <div className="mb-3">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-control" id="message" type="text" placeholder="Message" ></textarea>
        </div>

        <div className="d-grid">
        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>

    </form>

    </div>
  )
}

export default Contact