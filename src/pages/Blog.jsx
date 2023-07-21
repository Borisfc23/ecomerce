import React from "react";
import FullWithLayout from "../layout/FullWithLayout";
import BlogContent from "../components/Blog/BlogContent";
import Banner from "../components/utils/Banner";

const Blog = () => {
  const texto = "#Blogging";
  return (
    <FullWithLayout>
      <Banner
        img={"blog/banner.png"}
        texto={texto}
        desc={"Read all case studies about our products"}
      />
      <BlogContent />
    </FullWithLayout>
  );
};

export default Blog;
