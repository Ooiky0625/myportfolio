import { FadeInSection } from "../components/FadeInSection"
import "../styles/About.css"

const About = () => {
  // Your actual profile image
  const profileImage = "assets/images/AboutMe.jpeg"

  return (
    <div className="about container">
      <FadeInSection>
        <h2 className="section-title">About Me</h2>
      </FadeInSection>
      <div className="about-content">
        <FadeInSection className="about-image" threshold={0.2}>
          <img src={profileImage || "/placeholder.svg"} alt="Profile" className="profile-image" />
        </FadeInSection>
        <div className="about-text">
          <FadeInSection threshold={0.2} className="stagger-1">
            <p>
              I'm a passionate and driven Computer Science (Multimedia) student with a diverse set of skills and
              interests across technology, design and digital innovation. My journey so far has involved exploring a
              variety of fields, from web development to multimedia design and beyond. I'm passionate about leveraging
              technology to create solutions that not only work well but also offer a great user experience.
            </p>
          </FadeInSection>
          <FadeInSection threshold={0.2} className="stagger-2">
            <p>
              I've gained hands-on experience with front-end and back-end development, UI/UX design, VR game development
              and web development frameworks such as React. But my curiousity doesn't stop there - I'm also deeply
              interest in artificial intelligence(AI), blockchain and problem-solving. I'm seeking to expand my skill
              set and explore new technologies.
            </p>
          </FadeInSection>
          <FadeInSection threshold={0.2} className="stagger-3">
            <p>
              Whether it's designing interactive interfaces, writing clean code or analyzing data to extract insights, I
              thrive on learning new things and tackling challenges across various domains. I believe in the power of
              creativity and innovation to make a positive impact on people's lives and I'm always looking for
              opportunities to collaborate, grow and apply my skills in real-world scenarios.
            </p>
          </FadeInSection>
          <FadeInSection threshold={0.2}>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}

export default About
