import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Architecture</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header />
				<h1 className={styles.title}>Architecture</h1>

				<p className={styles.description}>An Appreciation</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<Footer />
		</div>
	);
}

// import { getSortedPostsData } from "../lib/getPosts";

// npm run dev to start on localhost:3000

// export async function getStaticProps() {
// 	const allPostsData = await getSortedPostsData();
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }

// export default function Home({ allPostsData }) {
// 	return (
// 		<div className={styles.container}>
// 			<Head>
// 				<title>Matthew's Blog</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main className={styles.main}>
// 				<Header></Header>
// 				<h1 className={styles.title}>Matthew</h1>

// 				<p className={styles.description}>
// 					A Personal Blog
// 					{/* {<code className={styles.code}>pages/index.js</code> } */}
// 				</p>

// 				<div className={styles.container}>
// 					<h1>Striking Architecture</h1>
// 					<h2>Blogs</h2>
// 					<ul className="postsList">
// 						{allPostsData.map(
// 							({ id, date, title, image, excerpt, content }) => (
// 								<li key={id}>
// 									<h4>{date}</h4>
// 									<h3>{title}</h3>
// 									<img
// 										src={image}
// 										width="400"
// 										height="400"
// 										alt="Picture of Building"
// 									/>
// 									<h4>{excerpt}</h4>
// 								</li>
// 							)
// 						)}
// 					</ul>
// 				</div>
// 			</main>
// 			<Footer />
// 		</div>
// 	);
// }

{
	/* <div className={styles.grid}>
  <a href="https://nextjs.org/docs" className={styles.card}>
    <h3>Documentation &rarr;</h3>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>

  <a href="https://nextjs.org/learn" className={styles.card}>
    <h3>Learn &rarr;</h3>
    <p>Learn about Next.js in an interactive course with quizzes!</p>
  </a>

  <a
    href="https://github.com/vercel/next.js/tree/master/examples"
    className={styles.card}
  >
    <h3>Examples &rarr;</h3>
    <p>Discover and deploy boilerplate example Next.js projects.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
  >
    <h3>Deploy &rarr;</h3>
    <p>
      Instantly deploy your Next.js site to a public URL with Vercel.
    </p>
  </a>
</div> */
}
