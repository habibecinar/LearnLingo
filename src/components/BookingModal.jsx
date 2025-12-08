import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import "./Modal.css";

const bookingSchema = yup.object().shape({
  reason: yup.string().required("Please select an option"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

export default function BookingModal({ isOpen, onClose, teacher }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    console.log("Booking data:", data);
    toast.success("Trial lesson booked successfully!");
    handleClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  if (!isOpen || !teacher) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <FiX />
        </button>

        <h2>Book trial lesson</h2>
        <p className="modal-subtitle">
          Our experienced tutors will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className="teacher-info">
          <img src={teacher.avatar_url} alt={teacher.name} />
          <div className="teacher-details">
            <h4>Your teacher</h4>
            <p>{teacher.name} {teacher.surname}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="radio-group">
            <h4>What is your main reason for learning English?</h4>
            
            <div className="radio-option">
              <input
                type="radio"
                id="career"
                value="Career and business"
                {...register("reason")}
              />
              <label htmlFor="career">Career and business</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="kids"
                value="Lesson for kids"
                {...register("reason")}
              />
              <label htmlFor="kids">Lesson for kids</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="abroad"
                value="Living abroad"
                {...register("reason")}
              />
              <label htmlFor="abroad">Living abroad</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="exams"
                value="Exams and coursework"
                {...register("reason")}
              />
              <label htmlFor="exams">Exams and coursework</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="culture"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              <label htmlFor="culture">Culture, travel or hobby</label>
            </div>

            {errors.reason && (
              <span className="error-message">{errors.reason.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              {...register("name")}
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
