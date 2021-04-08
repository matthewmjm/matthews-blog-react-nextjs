import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <div className={StyleSheet.container}>
      <Header />
      <h1>This is the Profile Page</h1>
      <Footer />
    </div>
  );
}
