import toast from "react-hot-toast";
const BlogBox = ({ title, desc, img, date }) => {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <img src={img} alt="" />
      </div>
      <div className="blog-details">
        <h4>{title}</h4>
        <p>{desc}</p>
        <a
          style={{ cursor: "pointer" }}
          onClick={() =>
            toast("Coming Soon!", {
              icon: "👏",
            })
          }
        >
          READ MORE
        </a>
      </div>
      <h1>{date}</h1>
    </div>
  );
};

export default BlogBox;
