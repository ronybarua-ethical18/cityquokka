import React from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleMore from "./components/ArticleMore";
import Footer from "../../../components/layout/Footer";

export default function ArticlePage() {
  return (
    <div className="flex flex-col w-full">
      <ArticleBody />
      <ArticleMore />
      <Footer />
    </div>

  );
}