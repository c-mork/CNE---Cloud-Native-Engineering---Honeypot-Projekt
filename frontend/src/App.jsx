
import {
  Activity,
  LayoutDashboard,
  ShieldAlert,
  Network,
  ScrollText,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  CircleCheck,
} from "lucide-react";
import "./App.css";

const events = [
  { time: "uwu", ip: "192.0.2.14", type: "SQL Injection", severity: "High" },
  { time: "14:28:41", ip: "198.51.100.8", type: "Path Traversal", severity: "Medium" },
  { time: "14:21:19", ip: "203.0.113.42", type: "XSS Attempt", severity: "Medium" },
  { time: "14:16:03", ip: "192.0.2.77", type: "Login Attempt", severity: "Low" },
];
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><ShieldAlert size={23} /></div>
          <div>
            <strong>Honeypot</strong>
            <span>SECURITY CONSOLE</span>
          </div>
        </div>

        <p className="nav-label">MONITORING</p>
        <nav>
          <a className="nav-item active" href="#overview">
            <LayoutDashboard size={18} /> Overview
          </a>
          <a className="nav-item" href="#events">
            <ScrollText size={18} /> Attack logs
          </a>
          <a className="nav-item" href="#analytics">
            <Activity size={18} /> Analytics
          </a>
          <a className="nav-item" href="#network">
            <Network size={18} /> Sources
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#settings">
            <Settings size={18} /> Settings
          </a>
          <div className="environment">
            <span className="status-dot" />
            <div>
              <strong>Development</strong>
              <span>Local environment</span>
            </div>
          </div>
        </div>
      </aside>


      <main className="main-content" id="overview">
        <header className="topbar">
          <div>
            <span className="eyebrow">SECURITY / OVERVIEW</span>
            <h1>Dashboard</h1>
          </div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={19} />
            </button>
            <button className="icon-button" aria-label="Notifications">
              <Bell size={19} />
            </button>
            <div className="avatar">HP</div>
          </div>
        </header>

        <section className="welcome-row">
          <div>
            <h2>Security overview</h2>
            <p>Monitor activity detected by your honeypot service.</p>
          </div>
          <span className="demo-badge">DEMO DATA</span>
        </section>

        <section className="metrics">
          <article className="metric-card">
            <div className="metric-top">
              <span>Total events</span>
              <ScrollText size={19} />
            </div>
            <strong className="metric-value">128</strong>
            <span className="metric-note">Recorded attempts</span>
          </article>

          <article className="metric-card">
            <div className="metric-top">
              <span>Unique sources</span>
              <Network size={19} />
            </div>
            <strong className="metric-value">24</strong>
            <span className="metric-note">Distinct source IPs</span>
          </article>

          <article className="metric-card">
            <div className="metric-top">
              <span>High severity</span>
              <ShieldAlert size={19} />
            </div>
            <strong className="metric-value">12</strong>
            <span className="metric-note">Events classified as high</span>
          </article>

          <article className="metric-card">
            <div className="metric-top">
              <span>Backend status</span>
              <Activity size={19} />
            </div>
            <strong className="metric-value online">Online</strong>
            <span className="metric-note">
              <CircleCheck size={14} /> Sample status
            </span>
          </article>
        </section>

        <section className="panel" id="events">
          <div className="panel-header">
            <div>
              <h2>Recent events</h2>
              <p>Latest activity observed by the honeypot</p>
            </div>
            <button className="text-button">
              View all <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>SOURCE IP</th>
                  <th>CLASSIFICATION</th>
                  <th>SEVERITY</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={`${event.time}-${event.ip}`}>
                    <td className="time-cell">{event.time}</td>
                    <td className="ip-cell">{event.ip}</td>
                    <td>{event.type}</td>
                    <td>
                      <span className={`severity ${event.severity.toLowerCase()}`}>
                        {event.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            Showing 4 example events
          </div>
        </section>

        <footer>
          Cloud Native Honeypot <span>·</span> University project
          <MyButton />
        </footer>
      </main>
    </div>
  );
}

export default App;
