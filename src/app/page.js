"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Head from "next/head";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import FilterBar from "./components/FilterBar";
import styles from "../styles/MainPage.module.css";

export default function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <>
      <Head>
        <title>Online Store | Home</title>
        <meta name="description" content="Discover a wide range of products in our online store" />
        <meta name="keywords" content="ecommerce, online shopping, products, deals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Online Store | Home" />
        <meta
          property="og:description"
          content="Discover a wide range of products in our online store"
        />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          {/* Hero Section */}
          <HeroSection />

          {/* Filter Bar */}
          <FilterBar isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />

          {/* Content Area */}
          <div className={styles.content}>
            {/* Sidebar */}
            {isSideMenuOpen && <Sidebar />}

            {/* Product List */}
            <ProductList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
