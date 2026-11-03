// Imports
// Imports from the Lucide React icon library
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
  Globe2,
} from "lucide-react";


// Import css files for the styling
import "./App.css";
// import interactive Background Effect with the dots and lines
import ParticleBackground from "./ParticleBackground.jsx";
// react hook, Gui updater on changes, remembers information
import { useState } from "react";
// import interactive World Map
import WorldMap from "./WorldMap.jsx";


// Event Data Examples
// Replacement by real data once everything is hocked up! fast Api setup and database set up required
const events = [
  { time: "uwu", ip: "192.0.2.14", type: "SQL Injection", severity: "High" },
  { time: "14:28:41", ip: "198.51.100.8", type: "Path Traversal", severity: "Medium" },
  { time: "14:21:19", ip: "203.0.113.42", type: "XSS Attempt", severity: "Medium" },
  { time: "14:16:03", ip: "192.0.2.77", type: "Login Attempt", severity: "Low" },
];

// ------------------- Main Application Component ----------------------
//Combines all the components.
// Sidebar, dashboard, map, and other UI elements
function App() {
  // activepage stores which page is currently selected
  // default useState is "overview" which is the landing page
  const [activePage, setActivePage] = useState("overview");

  return (
    <>
      {/* Render the animated particle background. */}
      <ParticleBackground />

      <div className="app-shell">

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-icon"><ShieldAlert size={23} /></div>
            <div>
              <strong>Honeypot</strong>
              <span>SECURITY CONSOLE</span>
            </div>
          </div>
{/* Sidebar section heading */}
          <p className="nav-label">MONITORING</p>

          <nav>
            {/* Overview */}
            <a
              className={`nav-item ${activePage === "overview" ? "active" : ""}`}
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("overview");
              }}
            >
              <LayoutDashboard size={18} /> Overview
            </a>

            {/* Attack Log, Placeholder for now, will get a separate page */}
            <a className="nav-item" href="#events">
              <ScrollText size={18} /> Attack logs
            </a>

            {/* Analytics, Placeholder for now, will not get a separate page - needed at all? */}
            <a className="nav-item" href="#analytics">
              <Activity size={18} /> Analytics
            </a>

            {/* World Map - activePage will be set to worldmap, re-renders the component */}
            <a
              className={`nav-item ${activePage === "worldmap" ? "active" : ""}`}
              href="#worldmap"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("worldmap");
              }}
            >
              <Globe2 size={18} /> World Map
            </a>

             {/* Sources - currently placeholder - Will have to be added all at the end */}
            <a className="nav-item" href="#network">
              <Network size={18} /> Sources
            </a>
          </nav>


           {/* Sidebar Bottom */}
          <div className="sidebar-bottom">

             {/* Settings - maybe for overview of the server? and light mode? */}
            <a className="nav-item" href="#settings">
              <Settings size={18} /> Settings
            </a>

             {/* Environmental information */}
            <div className="environment">
              <span className="status-dot" />
              <div>
                <strong>Development</strong>
                <span>Local environment</span>
              </div>
            </div>
          </div>
        </aside>



         {/* --------------------- Main Content ---------------------- */}
        <main className="main-content">
           {/* World Map page */}
          {activePage === "worldmap" ? (
            <>
               {/* header above the map */}
              <header className="topbar">
                <div>
                  <span className="eyebrow">SECURITY / MONITORING</span>
                  <h1>World Map</h1>
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

               {/* Rendering the separate WorldMap component here */}
              <WorldMap />
            </>
          ) : (

              // Overview Dashboard
            <>
               {/* Dashboard Header */}
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

           {/* Welcome message and demo-data indicator. */}
              <section className="welcome-row">
                <div>
                  <h2>Security overview</h2>
                  <p>Monitor activity detected by your honeypot service.</p>
                </div>
                <span className="demo-badge">DEMO DATA</span>
              </section>

           {/* Metric Card - currently displaying static data needs to be changed later */}
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


               {/* ---- Recent Events Table ---- */}
              <section className="panel" id="events">
                 {/* Table title and description */}
                <div className="panel-header">
                  <div>
                    <h2>Recent events</h2>
                    <p>Latest activity observed by the honeypot</p>
                  </div>
                  <button className="text-button">
                    View all <ArrowUpRight size={15} />
                  </button>
                </div>

                 {/* Table containing the example events */}
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
                     {/* Table contents */}
                     {/* .map() loops through the events array.
                          For every event, it creates one table row.

                          event represents the current object in the loop.

                          The key helps React identify each row
                          when the list changes.
                      */}
                    <tbody>
                      {events.map((event) => (
                        <tr key={`${event.time}-${event.ip}`}>
                          <td className="time-cell">{event.time}</td>
                          <td className="ip-cell">{event.ip}</td>
                          <td>{event.type}</td>
                          <td>
                             {/* Convert severity to lowercase for selecting the appropriate CSS class. */}
                            <span className={`severity ${event.severity.toLowerCase()}`}>
                              {event.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                 {/* Small text below the table. */}
                <div className="panel-footer">
                  Showing 4 example events
                </div>
              </section>


               {/* ------------- Footer --------------- */}
              <footer>
                Cloud Native Honeypot <span>·</span> University project
              </footer>
            </>
          )}
        </main>
      </div>
    </>
  );
}
// Export App so that main.jsx can import and render it.
export default App;
