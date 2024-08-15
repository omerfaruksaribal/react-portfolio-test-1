import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;


  useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)

  }, [])

  useEffect(() => {

      emailjs.init(serviceID)
  }, [serviceID])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        serviceID,
        templateID,
        refForm.current,
        publicKey
      )
      .then(
        () => {
          alert('Message Successfully Sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, Please try again.')
        }
      )
  }  

  return (
    <>
      <div className='container contact-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type="email" name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                  <textarea placeholder="Message" name='message' required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.780200013551955, 32.82167695483017]} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[39.780200013551955, 32.82167695483017]}>
              <Popup>Ömerfaruk lives here, come over for a cup of coffee..!</Popup>
            </Marker>
          </MapContainer>
        </div>
        

      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact