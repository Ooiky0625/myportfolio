import { FadeInSection } from "../components/FadeInSection"
import "../styles/Education.css"

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "Secondary School",
      institution: "SMJK Chung Ling Butterworth",
      degree: "Sijil Pelajaran Malaysia (SPM)",
      duration: "2017-2021",
      description:
        "Completed secondary education with strong academic performance. Participated in various extracurricular activities including robotics club and some olympic mathematics competitions.",
      achievements: [
        "SPM: 10A",
        "School librarian",
        "Corporal Cadet of Police Cadet in District Area",
        "Sergeat/ Vice President in Police Cadet Unit",
        "2018 IET Faraday Challenge Penang State Level - Champion",
        "2019 IET Faraday Challenge Penang State Level - Champion",
        "2019 IET Faraday Challenge National Level - 5th Place"
      ],
      logo: "/assets/images/clb.png",
    },
    {
      id: 2,
      level: "Pre-University",
      institution: "Penang of Matriculation College",
      degree: "Pre-University Program",
      duration: "2022-2023",
      description:
        "Completed pre-university studies with focus on mathematics, physics, chemistry and computer science. Developed strong analytical and problem-solving skills through rigorous coursework.",
      achievements: [
        "CGPA: 4.00",
        "Peer-Assisted Learning (PAL) Physics",
        "Physic Alert 2022/2023 Top Scorer",
        "President for Woodball Club SF(B)",
        "Karnival Kokurikulm Matrikulasi (KAKOM) 2022 - 1st Runner Up in Basketball",
      ],
      logo: "/assets/images/kmpp.png",
    },
    {
      id: 3,
      level: "University",
      institution: "University Malaya",
      degree: "Bachelor of Computer Science (Multimedia)",
      duration: "2023-Present",
      description:
        "Specializing in multimedia computing with focus on web development, UI/UX design, and VR game development. Relevant coursework includes artificial intelligence, and advanced programming concepts.",
      achievements: [
        "CGPA: 3.81",
        "Committee of Pesta Tanglung University Malaya (PTUM) 2023 in Multimedia and Technical Department",
        "Committee of Pesta Tanglung University Malaya (PTUM) 2024 in Multimedia and Technical Department",
        "Committee of MyTech Career Fair 2025 in Sposorship and Public Relation Department",
      ],
      logo: "/assets/images/UM.png",
    },
  ]

  return (
    <div className="education container">
      <FadeInSection>
        <h2 className="section-title">Education</h2>
      </FadeInSection>

      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <FadeInSection
            key={edu.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            threshold={0.1}
            rootMargin="0px 0px -50px 0px"
          >
            <div className="timeline-content">
              <div className="education-header">
                <div className="education-logo">
                  <img src={edu.logo || "/placeholder.svg"} alt={edu.institution} />
                </div>
                <div className="education-title">
                  <h3>{edu.level}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-duration">{edu.duration}</p>
                </div>
              </div>

              <div className="education-details">
                <p className="education-description">{edu.description}</p>

                <div className="education-achievements">
                  <h5>Achievements</h5>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  )
}

export default Education
