import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{ height: this.context.height }}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>Software Engineer</h3>
                            <div className="separator" />
                            <p>Software Engineer with 9 years of experience in developing dynamic, user-centric websites, intuitive user interfaces, and robust web applications tailored for enterprise environments. Skilled in creating and deploying scalable solutions that enhance data retrieval, streamline workflows, and improve operational efficiencies. Proficient in a wide range of technologies including React.js, Vue.js, Angular.js, Node.js, Express, Redux, MongoDB, MySQL and RESTful APIs, with a proven ability to integrate and optimize these technologies for seamless performance. My recent experience includes the development of an enterprise-grade e-commerce platform, focusing on delivering a tailored user experience. I've designed and implemented workflows to handle multiple asynchronous API requests efficiently, ensuring responsiveness and high availability across web and mobile platforms. I have also engineered end-to-end solutions for data retrieval, maintainability, and real-time updates, supporting the platform’s scalability and performance objectives. My specialty lies in developing e-commerce enterprise applications with a focus on professional design, user experience, and highly performant asynchronous functionalities, along with seamless API integration and responsive cross-platform experiences tailored to meet complex business requirements.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com/brandon6475')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/brandon-anthony-galli/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                        <div className="line-text">
                            <h4>My Skills</h4>
                        </div>
                        <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Web Development</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Javascript</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Typescript</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>React</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Vue</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Angular</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>MySQL</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>MongoDB</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Google Cloud Platform</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>AWS</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Azure</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>CSS3</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>HTML5</p>
                            <p style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Shopify</p>
                        </div>
                    </Col>


                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
                }} />
        )
    }

}

export default Hero