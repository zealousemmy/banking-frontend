import Image from "next/image";
import styles from "./page.module.css";
import HomeContents from "@/components/HomeComps/HomeContents";
import Banner from "@/components/HomeComps/Banner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <HomeContents />
      <Footer />
    </main>
  );
}
