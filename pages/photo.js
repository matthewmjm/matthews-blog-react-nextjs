import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Photo.module.css"

import { getSortedPostsData } from "../lib/getPosts"

export default function Photo() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>This is the Photo Page</h1>
      <Footer />
    </div>
  )
}
