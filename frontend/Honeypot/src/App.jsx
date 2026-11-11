import { useState } from "react";
import {
  ChevronRight,
  Cloud,
  LockKeyhole,
  ShieldCheck,
  X,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import "./App.css";

function App() {
  // Tracks the currently selected sidebar page.
  const [activePage, setActivePage] = useState("Overview");

  // Controls whether the login window is visible.
  const [showLogin, setShowLogin] = useState(false);

  // Controls temporary notification messages.
  const [toast, setToast] = useState("");

  // Displays a temporary notification.
  function showToast(message) {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3000);
  }

  // Opens the login window.
  function openLogin() {
    setShowLogin(true);
  }

  // Private pages require sign-in.
  function handleNavigation(page) {
    if (page === "Overview") {
      setActivePage("Overview");
      return;
    }

    setActivePage(page);
    openLogin();
  }

  // Handles the demo login form.
  function handleLoginSubmit(event) {
    event.preventDefault();

    // We deliberately do not send or save the entered credentials.
    // Clear the form immediately after submission.
    event.currentTarget.reset();

    setShowLogin(false);
    showToast("Demo sign-in submitted. Authentication is not enabled yet.");
  }

  return (
    <div className="app-layout">
      {/* Persistent navigation sidebar */}
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigation}
      />

      {/* Main application area */}
      <main className="main-content">
        <Topbar
          searchQuery=""
          onSearchChange={() => openLogin()}
          onUpload={openLogin}
        />

        <div className="dashboard-content">
          {/* Breadcrumb navigation */}
          <div className="breadcrumb">
            <span>CloudVault</span>
            <ChevronRight size={15} />
            <strong>{activePage}</strong>
          </div>

          {/* Main welcome section */}
          <section className="welcome-section">
            <div>
              <h1>Welcome to CloudVault</h1>
              <p>Your files, all in one secure place.</p>
            </div>
          </section>

          {/* Logged-out storage overview */}
          <section className="storage-overview">
            <div className="storage-overview-icon">
              <Cloud size={23} />
            </div>

            <div className="storage-overview-text">
              <strong>Your storage</strong>
              <span>Sign in to view your storage</span>
            </div>

            <button
              className="primary-button"
              onClick={openLogin}
            >
              <LockKeyhole size={17} />
              Sign in
            </button>
          </section>

          {/* Main sign-in prompt */}
          <section className="login-gate">
            <div className="login-gate-icon">
              <ShieldCheck size={34} />
            </div>

            <h2>Your files are waiting for you</h2>

            <p>
              Sign in to access your files, manage folders and
              share documents securely.
            </p>

            <button
              className="primary-button login-gate-button"
              onClick={openLogin}
            >
              <LockKeyhole size={17} />
              Sign in to CloudVault
            </button>

            <div className="login-gate-footer">
              <span>New to CloudVault?</span>
              <button
                className="text-button"
                onClick={() =>
                  showToast("Account registration is coming soon.")
                }
              >
                Create an account
              </button>
            </div>
          </section>

          {/* Small reassurance section */}
          <div className="security-note">
            <ShieldCheck size={17} />
            <span>Your files are protected with secure cloud storage.</span>
          </div>
        </div>
      </main>

      {/* Login modal */}
      {showLogin && (
        <div
          className="modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowLogin(false);
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
              onClick={() => setShowLogin(false)}
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

            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="login-email">Email address</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="off"
                required
              />

              <label htmlFor="login-password">Password</label>
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
                onClick={() => {
                  setShowLogin(false);
                  showToast("Account registration is coming soon.");
                }}
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Temporary notification */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;