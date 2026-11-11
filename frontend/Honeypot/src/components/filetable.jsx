// not in use atm... ran in circles and got lost with what features and what I didnt want



// lucid-react icons!!


import {
  FileText,
  FileSpreadsheet,
  FileCode,
  Image,
  MoreHorizontal,
} from "lucide-react";

const fileIcons = {
  pdf: FileText,
  spreadsheet: FileSpreadsheet,
  code: FileCode,
  image: Image,
};

function FileTable({ files, onFileClick }) {
  return (
    <div className="file-table-container">
      <table className="file-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Last modified</th>
            <th>File size</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => {
            const Icon = fileIcons[file.type] || FileText;

            return (
              <tr key={file.id} onClick={() => onFileClick(file)}>
                <td>
                  <div className="file-name">
                    <Icon size={20} className={`file-icon ${file.type}`} />
                    <span>{file.name}</span>
                  </div>
                </td>

                <td>{file.modified}</td>
                <td>{file.size}</td>

                <td>
                  <MoreHorizontal size={20} />
                </td>
              </tr>
            );
          })}

          {files.length === 0 && (
            <tr>
              <td colSpan="4" className="empty-state">
                No files found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}

export default FileTable;
