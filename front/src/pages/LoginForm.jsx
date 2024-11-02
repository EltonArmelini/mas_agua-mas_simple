import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de inicio de sesión
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email input */}
      <div className="mb-4">
        <input
          type="email"
          id="loginEmail"
          className="form-control"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* Password input */}
      <div className="mb-4 position-relative">
        <input
          type={showPassword ? "text" : "password"}
          id="loginPassword"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          className="btn btn-outline-secondary position-absolute top-0 end-0"
          style={{ zIndex: 1 }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      {/* Checkbox */}
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">
          Recordarme
        </label>
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary btn-block mb-3">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
