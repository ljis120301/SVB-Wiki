import fs from "fs";
import path from "path";

export function getPageData() {
  const pagesDirectory = path.join(process.cwd(), "pages");
  const fileNames = fs.readdirSync(pagesDirectory);

  const pages = fileNames
    .filter((fileName) => fileName.endsWith(".js") || fileName.endsWith(".jsx"))
    .map((fileName) => {
      const id = fileName.replace(/\.jsx?$/, "");
      const title = id.charAt(0).toUpperCase() + id.slice(1);
      const content = `Content for ${title}`; // Placeholder content
      const path = `/${id === "index" ? "" : id}`;

      return { title, path, content };
    });

  console.log("Generated pages:", pages); // Log the generated pages
  return pages;
}
