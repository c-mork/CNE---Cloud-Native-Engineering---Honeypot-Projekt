// lucid-react icons!!
import { Search, Bell, Plus } from "lucide-react";

function Topbar({ searchQuery, onSearchChange, onUpload }) {
  return (
    <header className="topbar">

      <div className="search-container">
        <Search size={19} />

        <input
          type="text"
          placeholder="Search files and folders..."
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <span className="search-shortcut">Ctrl K</span>
      </div>

      <div className="topbar-actions">
        <button className="upload-button" onClick={onUpload}>
          <Plus size={19} />
          <span>Upload</span>
        </button>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-avatar">UwU</div>
      </div>

    </header>
  );
}

export default Topbar;
