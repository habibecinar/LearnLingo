import { useState } from "react";
import { FiHeart, FiBook } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import BookingModal from "./BookingModal";
import toast from "react-hot-toast";
import "./TeacherCard.css";

export default function TeacherCard({ teacher }) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleFavoriteClick = () => {
    if (!user) {
      toast.error("Please log in to add to favorites!");
      return;
    }
    toggleFavorite(teacher);
  };

  const handleBookingClick = () => {
    if (!user) {
      toast.error("Please log in to book a lesson!");
      return;
    }
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <div className="teacher-card">
        <div className="teacher-avatar">
          <img src={teacher.avatar_url} alt={teacher.name} />
          <span className="online-badge"></span>
        </div>

        <div className="teacher-content">
          <div className="teacher-header">
            <div>
              <p className="teacher-label">Languages</p>
              <h3 className="teacher-name">
                {teacher.name} {teacher.surname}
              </h3>
            </div>

            <div className="teacher-meta">
              <div className="meta-item">
                <FiBook />
                <span>Lessons done: {teacher.lessons_done}</span>
              </div>
              <div className="meta-item">
                <span>⭐</span>
                <span>Rating: {teacher.rating}</span>
              </div>
              <div className="meta-item">
                <span>
                  Price / 1 hour:{" "}
                  <span className="price">{teacher.price_per_hour}$</span>
                </span>
              </div>
              <button
                className={`favorite-btn ${isFavorite(teacher.id) ? "active" : ""}`}
                onClick={handleFavoriteClick}
              >
                <FiHeart />
              </button>
            </div>
          </div>

          <div className="teacher-info">
            <p>
              <span className="info-label">Speaks:</span>{" "}
              {teacher.languages.map((lang, index) => (
                <span key={index}>
                  {lang}
                  {index < teacher.languages.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p>
              <span className="info-label">Lesson Info:</span> {teacher.lesson_info}
            </p>
            <p>
              <span className="info-label">Conditions:</span> {teacher.conditions.join(" ")}
            </p>
          </div>

          {!isExpanded && (
            <button
              className="read-more-btn"
              onClick={() => setIsExpanded(true)}
            >
              Read more
            </button>
          )}

          {isExpanded && (
            <div className="teacher-details">
              <p className="experience">{teacher.experience}</p>

              {teacher.reviews && teacher.reviews.length > 0 && (
                <div className="reviews">
                  {teacher.reviews.map((review, index) => (
                    <div key={index} className="review">
                      <div className="review-header">
                        <div className="reviewer-avatar">
                          {review.reviewer_name.charAt(0)}
                        </div>
                        <div>
                          <h4>{review.reviewer_name}</h4>
                          <div className="review-rating">
                            <span>⭐</span>
                            <span>{review.reviewer_rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="teacher-levels">
            {teacher.levels.map((level, index) => (
              <span key={index} className="level-badge">
                #{level}
              </span>
            ))}
          </div>

          {isExpanded && (
            <button className="book-btn" onClick={handleBookingClick}>
              Book trial lesson
            </button>
          )}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        teacher={teacher}
      />
    </>
  );
}
