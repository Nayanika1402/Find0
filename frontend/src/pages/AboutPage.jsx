import './pages.css'
import img from './about.jpg'
const AboutPage = () => {
    return (
        <div>
            <div className="section">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="className">

                    <div className="content-section">

                        <div className="content">
                            <p>At <b>Find 0</b>,we are passionate about bringing together a community of Innovators,Learners,and Enthusiasts who
                                thrive on knowledge,creativity,and collaboration.Our platform serves as a hub for individuals and organizations looking to explore
                                the realms of events,hackathons,domain expertise,and valuable resources all available at our footsteps just at one click making our platform more time-effective..
                            </p>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
