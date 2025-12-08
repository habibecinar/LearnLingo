import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import { FiUser } from "react-icons/fi";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src="/images/ukraine.png" alt="LearnLingo" className="logo-icon" />
              <span className="logo-text">LearnLingo</span>
            </Link>

            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/teachers">Teachers</Link>
              {user && <Link to="/favorites">Favorites</Link>}
            </nav>

            <div className="auth-buttons">
              {user ? (
                <>
                  <div className="user-info">
                    <FiUser />
                    <span>{user.email}</span>
                  </div>
                  <button onClick={handleLogout} className="btn-logout">
                    Çıkış
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick("login")}
                    className="btn-login"
                  >
                    <FiUser />
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => handleAuthClick("register")}
                    className="btn-register"
                  >
                    Kayıt Ol
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
}
