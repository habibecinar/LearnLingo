import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import "../styles/BookingForm.css";

const schema = yup.object({
  reason: yup.string().required("Please select a reason"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

export default function BookingForm({ teacher, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Booking data:", data);
    toast.success("Trial lesson booked successfully!");
    onClose();
  };

  return (
    <div className="booking-form">
      <div className="teacher-info-small">
        <img
          src={teacher.avatar_url}
          alt={teacher.name}
          className="teacher-avatar-small"
        />
        <div>
          <p className="teacher-label-small">Your teacher</p>
          <p className="teacher-name-small">
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>

      <p className="booking-subtitle">
        What is your main reason for learning English?
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              value="Career and business"
              {...register("reason")}
            />
            <span>Career and business</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Lesson for kids"
              {...register("reason")}
            />
            <span>Lesson for kids</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Living abroad"
              {...register("reason")}
            />
            <span>Living abroad</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Exams and coursework"
              {...register("reason")}
            />
            <span>Exams and coursework</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              value="Culture, travel or hobby"
              {...register("reason")}
            />
            <span>Culture, travel or hobby</span>
          </label>
        </div>
        {errors.reason && (
          <span className="error-message">{errors.reason.message}</span>
        )}

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

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}
