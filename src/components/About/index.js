import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faLaravel, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { SiMysql } from "react-icons/si";
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
  return (
    <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious software engineer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpentually working on improving my chops one design problem at a time
                </p>
                <p>
                If I had to define myself in a single sentence, it would be as follows; someone who is hungry to learn and work, who can handle any job that comes my way in the best way.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faPython} color='#ffd948'/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faLaravel} color='#ff291a'/>
                    </div>
                    <div className="face4">
                        <SiMysql color='#065f8b' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNode} color='#3f873e'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC444D'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default About