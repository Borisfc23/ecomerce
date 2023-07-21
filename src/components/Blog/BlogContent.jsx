import "../../assets/styles/Blog/BlogBox.css";
import { useEffect, useState } from "react";
import BlogBox from "./BlogBox";
import blogsItems from "../../assets/api/api.json";
import Pagination from "../utils/Pagination";
const BlogContent = () => {
  const [blogs, setblogs] = useState([]);
  let blog = blogsItems.filter((items) => items.type == "blog");
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(blog.length / itemsPerPage);
  useEffect(() => {
    setblogs(blog);
  }, []);
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const starIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = starIndex + itemsPerPage;
  const currentPageData = blog.slice(starIndex, endIndex);
  return (
    <div id="blog" className="section-p1">
      {currentPageData.map((b, index) => (
        <BlogBox
          key={index}
          title={b.title}
          desc={b.desc}
          img={b.image}
          date={b.date}
        />
      ))}
      <Pagination
        onPageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogContent;
