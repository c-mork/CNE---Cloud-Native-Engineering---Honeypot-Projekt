// lucid-react icons!!

import {
  Cloud,
  LayoutDashboard,
  Folder,
  Users,
  Clock,
  Trash2,
  Settings,
  HelpCircle,
  HardDrive,
  ChevronLeft,
} from "lucide-react";

// navigation options in the sidebar
const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My Files", icon: Folder },
  { label: "Shared Files", icon: Users },
  { label: "Recent", icon: Clock },
  { label: "Trash", icon: Trash2 },
];

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">

      {/* Application logo and name */}
      <div className="brand">
        <div className="brand-icon">
          <Cloud size={23} />
        </div>

        <span>CloudVault</span>
      </div>

      {/* Main navigation */}
      <div className="sidebar-section">
        <p className="sidebar-label">WORKSPACE</p>

        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`nav-item ${
                  activePage === item.label ? "active" : ""
                }`}
                onClick={() => onNavigate(item.label)}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Storage information */}
      <div className="storage-card">
        <div className="storage-heading">
          <HardDrive size={18} />
          <span>Storage</span>
        </div>

        <div className="storage-bar">
          <div className="storage-used"></div>
        </div>

        <p>Sign in to see your Storage Capacity</p>
      </div>

      {/* Bottom navigation */}
      <div className="sidebar-bottom">
        <button className="nav-item" onClick={() => onNavigate("Settings")}>
          <Settings size={19} />
          <span>Settings</span>
        </button>

        <button className="nav-item" onClick={() => onNavigate("Help")}>
          <HelpCircle size={19} />
          <span>Help & Support</span>
        </button>

        <div className="sidebar-profile">
          <div className="avatar">UwU</div>
          <div className="profile-info">
            <strong>Guest</strong>
            <span>Not Signed in</span>
          </div>
          <ChevronLeft size={17} className="profile-arrow" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
