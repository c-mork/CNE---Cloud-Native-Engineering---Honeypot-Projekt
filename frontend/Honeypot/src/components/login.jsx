import {
  LockKeyhole,
  X,
} from "lucide-react";



{/* ------------ Login modal ------------ */}
{/* props onClose, onSubmit, onRegister from app.jsx */}
      function Login({ onClose, onSubmit, onRegister }) {
  return (
    <div
          className="modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close login window"
        >
          <X size={20} />
        </button>

        <div className="login-gate-icon">
          <LockKeyhole size={28} />
        </div>

        <h2 id="login-title">Welcome back</h2>

        <p className="login-modal-description">
          Sign in to access your CloudVault files.
        </p>

        <form onSubmit={onSubmit}>
          <label htmlFor="login-email">
            Email address
          </label>

          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="off"
            required
          />

          <label htmlFor="login-password">
            Password
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            required
          />

          <button
            className="primary-button login-submit"
            type="submit"
          >
            Sign in
          </button>
        </form>

        <p className="login-modal-footer">
          Don't have an account?{" "}
          <button
            className="text-button"
            type="button"
            onClick={onRegister}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}
export default Login;