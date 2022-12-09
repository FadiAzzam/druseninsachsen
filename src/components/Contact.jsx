import React, { useEffect } from 'react'
import headImg from "../static/imgs/essa-mhmad-_IzsIUGy4tQ-unsplash.jpg"

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
  return (
    <div className="container py-4 min-vh-100">
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-top">
            <div className="col-lg-12">
              <h2 className="font-weight-light">Kontaktiere uns</h2>
              Sende uns eine Mail <a
                className=""
                href="mailto:drusen-in-sachsen@outlook.de"
              >
                Drusen-in-sachsen@outlook.de
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact