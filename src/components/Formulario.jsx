import "./Formulario.css"
import { useState } from "react";

export function Formulario({ setSuccess }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario.trim() || !contrasena.trim()) {
      setError(true);
      setError2(false);
      return;
    }
    setError(false);

    // tu lógica de validación “alumno / profesor / administrador”
    if (usuario === "alumno" && contrasena === "alumno") setSuccess("alumno");
    else if (usuario === "profesor" && contrasena === "profesor") setSuccess("profesor");
    else if (usuario === "administrador" && contrasena === "administrador") setSuccess("administrador");
    else setError2(true);
  };

  return (
    <div className="login-layout">
      {/* Logos laterales (usa los que ya están en /public) */}
      <aside className="brand-left">
        <img src="/ipn.png" alt="IPN" />
      </aside>

      <main className="login-card">
        <header className="center">
          <h1>Iniciar sesión</h1>
          <p className="muted">Accede con tu usuario y contraseña</p>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Escribe tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              id="contrasena"
              type="password"
              placeholder="••••••••"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="alert alert-warn">Todos los campos son obligatorios</p>}
          {error2 && <p className="alert alert-error">Usuario o contraseña incorrectos</p>}

          <button type="submit" className="btn">Entrar</button>
        </form>
      </main>

      <aside className="brand-right">
        <img src="/escom.png" alt="ESCOM" />
      </aside>
    </div>
  );
}
