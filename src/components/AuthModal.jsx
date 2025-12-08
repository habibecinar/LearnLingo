import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import "./Modal.css";

const loginSchema = yup.object().shape({
  email: yup.string().email("Geçerli bir email giriniz").required("Email zorunludur"),
  password: yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre zorunludur"),
});

const registerSchema = yup.object().shape({
  name: yup.string().required("İsim zorunludur"),
  email: yup.string().email("Geçerli bir email giriniz").required("Email zorunludur"),
  password: yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre zorunludur"),
});

export default function AuthModal({ isOpen, onClose, mode: initialMode }) {
  const [mode, setMode] = useState(initialMode || "login");
  const { login, register } = useAuth();

  const schema = mode === "login" ? loginSchema : registerSchema;

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      if (mode === "login") {
        await login(data.email, data.password);
      } else {
        await register(data.email, data.password, data.name);
      }
      handleClose();
    } catch (error) {
      console.error(error);
    }
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

  if (!isOpen) return null;

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

        <h2>{mode === "login" ? "Giriş Yap" : "Kayıt Ol"}</h2>
        <p className="modal-subtitle">
          {mode === "login"
            ? "Hesabınıza giriş yaparak favorilerinize ve özel içeriklere erişin."
            : "Yeni bir hesap oluşturun ve Learn Lingo'nun tüm özelliklerinden yararlanın."}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {mode === "register" && (
            <div className="form-group">
              <input
                type="text"
                placeholder="İsim"
                {...registerField("name")}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...registerField("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Şifre"
              {...registerField("password")}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            {mode === "login" ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>

        <p className="modal-switch">
          {mode === "login" ? (
            <>
              Hesabınız yok mu?{" "}
              <button onClick={() => setMode("register")}>Kayıt Ol</button>
            </>
          ) : (
            <>
              Zaten hesabınız var mı?{" "}
              <button onClick={() => setMode("login")}>Giriş Yap</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
