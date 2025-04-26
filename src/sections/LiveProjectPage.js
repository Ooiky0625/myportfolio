"use client"

import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FadeInSection } from "../components/FadeInSection"
import "../styles/ProjectDetail.css"

const liveProjectAssets = {
  "1": {
    video: "/assets/videos/RythmOfAges.mp4",
    videoDescription: "A game playing demo showcase for Rhythm of Ages.",
    title: "Rhythm of Ages Showcase"
  },
  "2": {
    video: [
      "/assets/videos/CarDetection.mp4",
      "/assets/videos/LaneDetector.mp4",
      "/assets/videos/DashcamRecording.mp4",
      "/assets/videos/Map&Dashcam.mp4",
    ],
    videoDescription: [
        "Car detection in real-time",
        "Lane detection",
        "Live dashcam recording with speed overlay",
        "Dashcam and map sync to show real-time positioning"
    ],
    title: "NavAi Showcase"
  },
  "3": {
    screenshots: [
      "/assets/images/PlayerDetail.jpeg",
      "/assets/images/PlayerProfile.jpeg",
      "/assets/images/LocationGraph.jpeg",
      "/assets/images/PlayerSelection.jpeg",
      "/assets/images/InjuryStack.jpeg",
    ],
    screenshotDescription: [  // Corrected typo here
      "Players detail view",
      "Player profile view",
      "DPS graph of the location",
      "Drag and drop for player selection",
      "Injury stack view",
    ],
    title: "NBA Team Management Showcase"
  },
}

const LiveProjectPage = () => {
  const { projectId } = useParams()
  const content = liveProjectAssets[projectId]

  if (!content) {
    return (
      <div className="project-detail-container">
        <Header isHomePage={false} />
        <main className="project-detail-content">
          <FadeInSection>
            <h1 className="project-detail-title">Project Not Found</h1>
            <p>This project doesn't have live content yet.</p>
          </FadeInSection>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <Header isHomePage={false} />
      <main className="project-detail-content">
        <FadeInSection>
          <h1 className="project-detail-title">{content.title}</h1>
        </FadeInSection>

        {content.video && (
          <FadeInSection className="project-detail-hero">
            <h2>Project Demo Video</h2>
            <div style={{ marginBottom: "40px" }}>
              {Array.isArray(content.video) ? (
                content.video.map((src, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <video
                      width="100%"
                      height="auto"
                      controls
                      style={{ borderRadius: "10px", marginBottom: "10px", boxShadow: "0 5px 20px rgba(0,0,0,0.2)" }}
                    >
                      <source src={src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {content.videoDescription?.[index] && (
                      <p style={{ fontStyle: "italic", marginTop: "-10px", marginBottom: "40px" }}>
                        {content.videoDescription[index]}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center" }}>
                  <video
                    width="100%"
                    height="auto"
                    controls
                    style={{ borderRadius: "10px", boxShadow: "0 5px 20px rgba(0,0,0,0.2)" }}
                  >
                    <source src={content.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {content.videoDescription && (
                    <p style={{ fontStyle: "italic", marginTop: "-10px", marginBottom: "40px" }}>
                      {content.videoDescription}
                    </p>
                  )}
                </div>
              )}
            </div>
          </FadeInSection>
        )}

        {content.screenshots?.length > 0 && (
          <FadeInSection>
            <h2>Project Screenshots</h2>
            <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
              {content.screenshots.map((src, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="project-detail-image"
                    style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                  />
                  {content.screenshotDescription?.[index] && (
                    <p style={{ marginTop: "10px", fontStyle: "italic", marginBottom: "40px" }}>
                      {content.screenshotDescription[index]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default LiveProjectPage
