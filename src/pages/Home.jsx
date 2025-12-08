import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="home-page">
        <div className="container">
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1>
                  Unlock your potential with the best{" "}
                  <span className="highlight">language</span> tutors
                </h1>
                <p className="hero-description">
                  Embark on an Exciting Language Journey with Expert Language
                  Tutors: Elevate your language proficiency to new heights by
                  connecting with highly qualified and experienced tutors.
                </p>
                <button
                  className="btn-get-started"
                  onClick={() => navigate("/teachers")}
                >
                  Get started
                </button>
              </div>
              <div className="hero-image">
                <img
                  src="/images/block.png"
                  alt="Language learning"
                />
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <img src="/images/block (1).png" alt="" className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-number">32,000 +</h3>
                  <p className="stat-label">Experienced tutors</p>
                </div>
              </div>
              <div className="stat-card">
                <img src="/images/block (2).png" alt="" className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-number">300,000 +</h3>
                  <p className="stat-label">5-star tutor reviews</p>
                </div>
              </div>
              <div className="stat-card">
                <img src="/images/block (3).png" alt="" className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-number">120 +</h3>
                  <p className="stat-label">Subjects taught</p>
                </div>
              </div>
              <div className="stat-card">
                <img src="/images/block (4).png" alt="" className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-number">200 +</h3>
                  <p className="stat-label">Tutor nationalities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
