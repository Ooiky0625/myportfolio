"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { FadeInSection } from "../components/FadeInSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/ProjectDetail.css"

const projectsData = [
  {
    id: "1",
    title: "Rythm of Ages",
    description: "A VR rhythm game inspired by Beat Saber where players slash to the beat of custom tracks. Built with Unity, it features immersive environments, smooth gameplay, and reactive music-based mechanics.",
    fullDescription: 
    `Step into a fully immersive virtual world where rhythm and precision collide. In Rhythm of Ages, you’ll find yourself wielding two lightsabers, one in each hand, as you slice through incoming colored blocks in sync with an upbeat music track. Inspired by the popular rhythm game Beat Saber, this game offers an intense and exciting VR experience where your skills in timing and coordination will be tested.
    The gameplay revolves around a single, exhilarating music track that sets the stage for the entire experience. As the track plays, blocks fly toward you, each with a specific direction and angle you need to slice. The challenge increases as the blocks speed up and the angles get more complex. The goal is to hit as many blocks as possible, accurately matching the beats of the song to score higher.`,
    image: "/assets/images/RythmProject.png",
    technologies: ["Unity", "VR", "C#"],
    features: [
      "Immersive VR Environment: Step into a visually stunning, sci-fi world that dynamically changes with the rhythm of the music. The immersive environments range from glowing neon cities to futuristic landscapes, providing an ever-changing backdrop for each session.",
      "Precision and Timing: Blocks appear in sync with the music's beats, requiring precise timing to slice through. The game measures accuracy, rewarding players with higher scores for perfect hits and fast combos.",
      "Score Counter: Track your progress with a real-time score counter that reflects your performance based on accuracy and timing. Every block you slice increases your score, so aim for precision!",
    ],
    challenges: [
      "Lack of Knowledge and Experience: Zero experience and self learning throughout the whole project. Open source, online tutorial and documentation is my main resources for the whole project.",
      "Time Management: Solo developing the whole project for the event use. The project is broken down into smaller, manageable task and reduce my own entertainment time to have more time to focus on my own study and project.",
      "Installing and Configuring APK: Installing the APK into the VR device is complicated than expected. I make sure that Unity was properly configured for VR development by adjusting settings for Android builds, including encuring the correct SDK by double checking its compatibility between the Unity build setting and the VR specification. ",
    ],
    outcome:
      "Rhythm of Ages was successfully delivered, blending Chinese cultural elements with futuristic aesthetics for Pesta Tanglung University Malaya. The immersive VR experience, with its fusion of traditional motifs and neon-inspired landscapes, resonated with players, creating a memorable and engaging experience. The game effectively combined cultural representation with cutting-edge technology, garnering positive feedback from both users and event organizers.",
    githubLink: "https://github.com/Ooiky0625/RythmOfAges.git",
    liveLink: "/live-project/1",
  },
  {
    id: "2",
    title: "NavAi",
    description: "NavAI is an innovative AI-powered solution aimed at enhancing road safety and efficiency. By integrating intelligent navigation, real-time dashcam recording, and advanced features like lane detection and object detection, NavAI helps reduce road accidents and supports the development of smarter, safer transportation systems.",
    fullDescription:
      `NavAi is an advanced navigation and assistive technology application designed to enhance mobility for visually impaired individuals. Built with Android Studio, Firebase, OpenCV, and APIs, NavAi integrates real-time object recognition, voice assistance, and AI-driven navigation to provide a seamless experience. By leveraging state-of-the-art technology, the app helps users navigate their environment safely and independently, improving their quality of life.
        The app offers real-time guidance, helping users avoid obstacles, find paths, and reach their destinations with ease. With the power of machine learning and computer vision, NavAi can detect various objects and obstacles, alerting users via voice commands. It’s a smart and responsive navigation system that adapts to the environment, making it an essential tool for those with visual impairments.`,
    image: "/assets/images/NavAiProfile.png",
    technologies: ["Android Studio", "Firebase", "API", "OpenCV"],
    features: [
      "Real-Time Object Detection: Utilizes OpenCV and machine learning to recognize objects, such as people, vehicles, and obstacles in the environment, providing accurate voice alerts to the user.",
      "Integrated Dashcam: Auto-recording with timestamp/ speed overlays.",
      "Voice Guidance System: Integrates voice assistance to give users real-time information about the direction.",
      "Hands-Free Control: Google Assistant integration for voice command.",
    ],
    challenges: [
      "Battery Efficiency: Running the AI model, dashcam and navigation feature in a mobile simulatneously consumed a lot of battery. A lightweight AI model that provided good accuracy while requiring fewer computational resources is applied.",
      "Accuracy in Object Detection: Hard to detect the line on the road, it depends on road condition. A real-time feedback system, which would notify users is implemented.",
      "Real-Time AI Processing on Mobile: Running AI model and dashcam simultaneously will cause lag on low-end devices. The fps of the dashcam recording is fixed.",
    ],
    outcome:
      "NavAi successfully addressed the needs of visually impaired users by providing a reliable, real-time navigation tool.Through its integration of machine learning, voice assistance, and real-time navigation, NavAi improved the mobility and independence of visually impaired individuals, allowing them to navigate more confidently in their daily lives.",
    githubLink: "https://github.com/ZYLIM0702/NavAi.git",
    liveLink: "/live-project/2",
  },
  {
    id: "3",
    title: "NBA Team Management System",
    description: "A comprehensive basketball team management system developed for Data Structure course at the Faculty of Computer Science and Information Technology, Universiti Malaya",
    fullDescription:
      `NBA GManager is a comprehensive web-based basketball team management system developed as part of the WIA1002 Data Structure course at the Faculty of Computer Science and Information Technology, Universiti Malaya. The project aims to simulate a real-world NBA team management experience by incorporating essential functionalities like player management, contract handling, performance tracking, and more — all powered by Spring Boot and Java with data structure implementations.
      The application is accessible through Heroku, with separate views for administrators and guests. Administrators can fully manage team operations, while guests can view rankings, player info, and updates through a dedicated fan site.`,
    image: "/assets/images/NBAProfile.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Springboot"],
    features: [
      "Championship Team Builder: Display player info (Name, Age, Height, Position, Overall Score, Nationality) that can be view and edit detailed profile with radar chart.",
      "Drag-and-Drop Team Formation: Drag players from the scouting pool to team slots (G/F/C) including the salary cap validation with real-time error prompts.",
      "Journey Planner: DFS-based algorithm to find the shortest travel route starting from San Antonio and the total distance and optimal route displayed for NBA tour planning.",
      "Player Performance Ranking: Ranked by overall scores calculated from real NBA season statistics.",
      "NBA API Integration: Integrated with balldontlieAPI by combining personal and seasonal performance data via CSV after merging API responses.",
      "Injury Reserve Stack: Stacked-based injury management."
    ],
    challenges: [
      "API Limitation and Data Inconsistency: Due to API free tier limitation, it couldn't retrieve all necessary data in a single request and didn't provide up-to-date data. A multiple requests to different API endpoints are made and merged all the dataset manually",
      "Visualizing NBA City Routes: Representing NBA cities and their geographical relationships was complex. City data stored as an adjency list in the database. For routing, Depth-First Search (DFS) algorithm is applied to find the shortest path that visits each city once.",
      "Enforcing Team Composition Rules: The system needed to enforce several NBA rules for team formation. The embedded logical validation checks into the team formation module. The system would display custom error prompts if any rule violated.",
    ],
    outcome:
      "This project was a substantial step toward real-world software development. It showcased the group’s ability to integrate multiple technologies, solve practical challenges, and build a scalable, maintainable application. Through this experience, team members not only deepened their understanding of data structures but also grew more confident in backend development, system deployment, and collaborative project management.",
    githubLink: "https://github.com/ZYLIM0702/WIA1002_Basketball.git",
    liveLink: "/live-project/3",
  },
]

const ProjectDetail = () => {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === projectId)
    setProject(foundProject)
  }, [projectId])

  if (!project) {
    return (
      <div className="project-detail-container">
        <Header isHomePage={false} />
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <Header isHomePage={false} />
      <main className="project-detail-content">
        <FadeInSection>
          <h1 className="project-detail-title">{project.title}</h1>
        </FadeInSection>

        <FadeInSection className="project-detail-hero">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-detail-image" />
        </FadeInSection>

        <div className="project-detail-info">
          <FadeInSection className="project-overview">
            <h2>Project Overview</h2>
            <p>{project.fullDescription}</p>
          </FadeInSection>

          <FadeInSection className="project-technologies">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection className="project-features">
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection className="project-challenges">
            <h2>Challenges & Solutions</h2>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection className="project-outcome">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </FadeInSection>

          <FadeInSection className="project-links">
            <Link to={`/live-project/${projectId}`} className="btn">
              View Live Project
            </Link>
            <a href={project.githubLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <Link to="/#projects" className="btn btn-secondary">
              Back to Projects
            </Link>
          </FadeInSection>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
