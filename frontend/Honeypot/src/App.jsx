import "./App.css";

function App() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h2>Welcome back</h2>
        <p>Please sign in to continue.</p>

        <form>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}

export default App;