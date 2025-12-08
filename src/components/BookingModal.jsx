import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import "./Modal.css";

const bookingSchema = yup.object().shape({
  reason: yup.string().required("Bir seçenek seçmelisiniz"),
  name: yup.string().required("İsim zorunludur"),
  email: yup.string().email("Geçerli bir email giriniz").required("Email zorunludur"),
  phone: yup.string().required("Telefon numarası zorunludur"),
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
    toast.success("Deneme dersi başarıyla rezerve edildi!");
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

        <h2>Deneme Dersi Rezervasyonu</h2>
        <p className="modal-subtitle">
          Deneyimli öğretmenlerimiz size İngilizce öğrenme hedeflerinize ulaşmanızda yardımcı olacaktır.
        </p>

        <div className="teacher-info">
          <img src={teacher.avatar_url} alt={teacher.name} />
          <div className="teacher-details">
            <h4>Öğretmeniniz</h4>
            <p>{teacher.name} {teacher.surname}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="radio-group">
            <h4>Deneme dersi rezervasyonunuzun nedeni nedir?</h4>
            
            <div className="radio-option">
              <input
                type="radio"
                id="career"
                value="Career and business"
                {...register("reason")}
              />
              <label htmlFor="career">Kariyer ve iş</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="kids"
                value="Lesson for kids"
                {...register("reason")}
              />
              <label htmlFor="kids">Çocuklar için ders</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="abroad"
                value="Living abroad"
                {...register("reason")}
              />
              <label htmlFor="abroad">Yurtdışında yaşamak</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="exams"
                value="Exams and coursework"
                {...register("reason")}
              />
              <label htmlFor="exams">Sınavlar ve kurs çalışmaları</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                id="culture"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              <label htmlFor="culture">Kültür, seyahat veya hobi</label>
            </div>

            {errors.reason && (
              <span className="error-message">{errors.reason.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="İsim"
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
              placeholder="Telefon numarası"
              {...register("phone")}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Rezervasyon Yap
          </button>
        </form>
      </div>
    </div>
  );
}
