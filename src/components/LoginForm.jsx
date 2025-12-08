import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import "../styles/AuthForms.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm({ onClose, onSwitchToRegister }) {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Log In</h2>
      <p className="auth-subtitle">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
            placeholder="Password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Log In"}
        </button>
      </form>

      <p className="auth-switch">
        Don't have an account?{" "}
        <button onClick={onSwitchToRegister} className="link-button">
          Register
        </button>
      </p>
    </div>
  );
}
