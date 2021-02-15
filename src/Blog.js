import React, { useEffect } from "react";
import BlogPoster from "./BlogPoster";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header></Header>
      <BlogPoster></BlogPoster>
      <Footer></Footer>
    </>
  );
}

export default Blog;
