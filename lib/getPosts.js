// import fs from "fs"
// import path from "path"
// import matter from "gray-matter"

// const contentDirectory = path.join(process.cwd(), "content")

// export async function getSortedPostsData() {
//   const fileNames = fs.readdirSync(contentDirectory)

//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, "")

//     const fullPath = path.join(contentDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, "utf8")

//     const parsedMatter = matter(fileContents)

//     return {
//       id,
//       ...parsedMatter.data,
//     }
//   })
//   return allPostsData.sort((a, b) => {
//     if (a.data < b.data) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }
