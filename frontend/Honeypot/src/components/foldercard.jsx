// lucid-react icons!!
import { Folder, MoreHorizontal } from "lucide-react";

function FolderCard({ folder, onOpen }) {
  return (
    <button className="folder-card" onClick={onOpen}>

      <div className="folder-card-top">
        <div className="folder-icon">
          <Folder size={23} />
        </div>

        <MoreHorizontal size={20} className="folder-menu" />
      </div>

      <div className="folder-info">
        <strong>{folder.name}</strong>
        <span>{folder.files} files</span>
      </div>

      <div className="folder-card-bottom">
        <span>{folder.updated}</span>
      </div>

    </button>
  );
}

export default FolderCard;
