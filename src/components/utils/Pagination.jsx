import "../../assets/styles/Pagination.css";
const Pagination = ({ onPageChange, totalPages, currentPage }) => {
  const pages = new Array(totalPages).fill("");
  const handleChangePage = (page) => {
    if ((page < 1) | (page > totalPages)) return;
    onPageChange(page);
    window.scrollTo(0, 0);
  };
  return (
    <div id="pagination" className="section-p1">
      <a
        className={`arrow-l ${currentPage == 1 ? "disabled" : "enabled"}`}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        <i className="fa-solid fa-angle-left"></i>
      </a>
      {pages.map((_, index) => (
        <a
          onClick={() => handleChangePage(index + 1)}
          key={index}
          className={currentPage == index + 1 ? "active" : ""}
        >
          {index + 1}
        </a>
      ))}
      <a
        className={`arrow-l ${
          currentPage == totalPages ? "disabled" : "enabled"
        }`}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Pagination;
