import Blog3 from "../Components/Blog/Blog3";
import BreadCumbAbout from "../Components/Common/BreadCumbAbout";
const BlogBanner = "../../assets/images/blogBanner.png";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* <BreadCumb Title="Blog" image={BlogBanner}></BreadCumb> */}
      <BreadCumbAbout image={BlogBanner} />
      <Blog3></Blog3>
    </div>
  );
};

export default Blog;
