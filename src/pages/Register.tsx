import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../services/api";
import styles from "./styles/Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

interface LoginFormInputs {
  full_name: string;
  phone: number;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { login: setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const user = await login(data);
      setUser(user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <div className={styles.form_heading}>
          <p className={styles.title}>WELCOME TO KAREZMA</p>
          <span>Create your personal account by signing up.</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>
              Full Name:
              <input
                type="text"
                {...register("full_name", {
                  required: "full name is required",
                })}
                className={styles.input}
              />
            </label>
            {errors.full_name && (
              <p className={styles.error}>{errors.full_name.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              Phone:
              <input
                type="text"
                {...register("phone", {
                  required: "phone name is required",
                })}
                className={styles.input}
              />
            </label>
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              Email:
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={styles.input}
              />
            </label>
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              Password:
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={styles.input}
              />
            </label>
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            Register
          </button>
          <button type="button" className={styles.google_button}>
            <FcGoogle />
            <p>Sign In With Google</p>
          </button>
          <div className={styles.login_link}>
            Aready have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
