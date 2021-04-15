import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content")

// export async function getSortedPostsData() {
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "")

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const parsedMatter = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...parsedMatter.data,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.data < b.data) {
      return 1
    } else {
      return -1
    }
  })
}
