import { useState } from "react";
import {
  ChevronRight,
  Cloud,
  ShieldCheck,
} from "lucide-react";

import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import Login from "./components/login.jsx";

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

    // Do not transmit or persist credentials.
    // Clear the form immediately.
    event.currentTarget.reset();

    setShowLogin(false);

    showToast(
      "Demo sign-in submitted. Authentication is not enabled yet."
    );
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
          onSearchChange={() => {}}
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

          {/* Security reassurance */}
          <div className="security-note">
            <ShieldCheck size={17} />
            <span>
              Your files are protected with secure cloud storage.
            </span>
          </div>

        </div>
      </main>

      {/* Login component */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSubmit={handleLoginSubmit}
          onRegister={() => {
            setShowLogin(false);
            showToast("Account registration is coming soon.");
          }}
        />
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
