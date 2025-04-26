import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaUnity, FaFigma } from "react-icons/fa"
import { GiArtificialIntelligence, GiSmartphone } from "react-icons/gi"
import { MdDesignServices } from "react-icons/md"
import { TbApi } from "react-icons/tb"
import { RiPuzzle2Line } from "react-icons/ri"
import { FadeInSection } from "../components/FadeInSection"
import "../styles/Skills.css"

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava/>, color: "#5382A1", mastery: 75 },
    { name: "Python", icon: <FaPython/>, color: "#306998", mastery: 50 },
    { name: "HTML", icon: <FaHtml5/>, color: "#E34F26", mastery: 65 },
    { name: "CSS", icon: <FaCss3Alt/>, color: "#1572B6", mastery: 60 },
    { name: "JavaScript", icon: <FaJs/>, color: "#F7DF1E", mastery: 60 },
    { name: "React", icon: <FaReact/>, color: "#61DBFB", mastery: 60 },
    { name: "Unity", icon: <FaUnity/>, color: "#000000", mastery: 55 },
    { name: "Figma", icon: <FaFigma/>, color: "#a259ff", mastery: 80 },
    { name: "Mobile App Design", icon: <GiSmartphone/>, color: "#FF6B6B", mastery: 60 },
    { name: "API", icon: <TbApi/>, color: "#00C7B7", mastery: 75 },
    { name: "UI/UX Design", icon: <MdDesignServices/>, color: "#9C27B0", mastery: 80 },
    { name: "AI/ML", icon: <GiArtificialIntelligence/>, color: "#E74C3C", mastery: 40 },
    { name: "Problem Solving", icon: <RiPuzzle2Line/>, color: "#2ECC71", mastery: 80 },
  ]

  return (
    <div className="skills container">
      <FadeInSection>
        <h2 className="section-title">Skills</h2>
      </FadeInSection>
      <div className="skills-content">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <FadeInSection className="skill-card" key={index} threshold={0.1} rootMargin="0px 0px -50px 0px">
              <div className="skill-header">
                <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-progress-container">
                <div
                  className="skill-progress-bar"
                  style={{
                    width: `${skill.mastery}%`,
                    backgroundColor: skill.color,
                    position: "relative"
                  }}
                ></div>
                <span className="skill-percentage">
                  {skill.mastery}%
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
