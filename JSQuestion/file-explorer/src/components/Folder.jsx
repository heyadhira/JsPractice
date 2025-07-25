import { useState } from "react";

const Folder = ({ explorer }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!explorer.isFolder) {
    return <div>📄 {explorer.name}</div>;
  }

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        📁 {explorer.name}
      </div>

      <div style={{ marginLeft: 20 }}>
        {isOpen &&
          explorer.children.map((child, idx) => (
            <Folder explorer={child} key={idx} />
          ))}
      </div>
    </div>
  );
};

export default Folder;
