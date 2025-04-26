import { FadeInSection } from "../components/FadeInSection"
import { Link } from "react-router-dom"
import "../styles/Projects.css"

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Rythm of the Ages",
      description: "A VR rhythm game inspired by Beat Saber where players slash to the beat of custom tracks. Built with Unity, it features immersive environments, smooth gameplay, and reactive music-based mechanics.",
      image: "assets/images/RythmOfAges.JPG",
      technologies: ["Unity", "VR", "C#"],
      githubLink: "https://github.com/Ooiky0625/RythmOfAges.git",
    },
    {
      id: "2",
      title: "NavAi",
      description: "NavAI is an innovative AI-powered solution aimed at enhancing road safety and efficiency. By integrating intelligent navigation, real-time dashcam recording, and advanced features like lane detection and object detection, NavAI helps reduce road accidents and supports the development of smarter, safer transportation systems.",
      image: "assets/images/NavAI.png",
      technologies: ["Android Studio", "Firebase", "API", "OpenCV"],
      githubLink: "https://github.com/ZYLIM0702/NavAi.git",
    },
    {
      id: "3",
      title: "NBA Team Management System",
      description: "A comprehensive basketball team management system developed for Data Structure course at the Faculty of Computer Science and Information Technology, Universiti Malaya",
      image: "assets/images/NBA.png",
      technologies: ["HTML", "JavaScript", "CSS", "Springboot"],
      githubLink: "https://github.com/ZYLIM0702/WIA1002_Basketball.git",
    },
  ]

  return (
    <div className="projects container">
      <FadeInSection>
        <h2 className="section-title">Projects</h2>
      </FadeInSection>
      <div className="projects-grid">
        {projects.map((project) => (
          <FadeInSection className="project-card" key={project.id} threshold={0.1} rootMargin="0px 0px -50px 0px">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
              <Link to={`/project/${project.id}`} className="btn">
                  View Detail
                </Link>
                <a href={project.githubLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  )
}

export default Projects
