const folderData = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "Documents",
      isFolder: true,
      children: [
        { name: "resume.pdf", isFolder: false },
        {
          name: "Projects",
          isFolder: true,
          children: [
            { name: "project1.js", isFolder: false }
          ]
        }
      ]
    },
    { name: "photo.jpg", isFolder: false }
  ]
};

export default folderData;
