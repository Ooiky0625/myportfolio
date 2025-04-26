import { FadeInSection } from "../components/FadeInSection"
import InteractiveAvatar from "../components/InteractiveAvatar"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home container">
      <div className="home-content">
        <FadeInSection className="home-avatar">
          <InteractiveAvatar />
        </FadeInSection>
        <div className="home-text">
          <FadeInSection className="stagger-1">
            <h1 className="home-greeting">Hi, my name is</h1>
          </FadeInSection>
          <FadeInSection className="stagger-2">
            <h2 className="home-name">Ooi Kwong Yang</h2>
          </FadeInSection>
          <FadeInSection className="stagger-3">
            <h3 className="home-title">I'm an enthusiastic Computer Science student to explore everything new and never stop grinding</h3>
          </FadeInSection>
          <FadeInSection>
            <div className="home-buttons">
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}

export default Home
