import Link from "next/link";
import { FaCalendarAlt, FaUserAlt, FaComments } from "react-icons/fa";

const BlogItem = ({ data, slug, baseUrl = "blog" }) => {
  return (
    <div className="ltn__blog-item ltn__blog-item-3">
      <div className="ltn__blog-img">
        <Link href={`/${baseUrl}/${slug}`}>
          <img src={`/img/blog/${data.thumbImg || "1.jpg"}`} alt="Blog Image" />
        </Link>
      </div>
      <div className="ltn__blog-brief">
        <div className="ltn__blog-meta">
          <ul>
            <li className="ltn__blog-author">
              <FaUserAlt />
              <span>By: {data.author?.name || "Admin"}</span>
            </li>
            <li className="ltn__blog-date">
              <FaCalendarAlt />
              <span>{data.date || "Jan 1, 2024"}</span>
            </li>
            <li>
              <FaComments />
              <span>{data.comments || 0} Comments</span>
            </li>
          </ul>
        </div>
        <h3 className="ltn__blog-title">
          <Link href={`/${baseUrl}/${slug}`}>
            {data.title || "Blog Title"}
          </Link>
        </h3>
        <div className="ltn__blog-brief-inner">
          <p>{data.shortDescription || "Blog description..."}</p>
        </div>
        <div className="ltn__blog-meta-btn">
          <div className="ltn__blog-meta">
            <ul>
              <li className="ltn__blog-category">
                <Link href="#">{data.type || "General"}</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__blog-btn">
            <Link href={`/${baseUrl}/${slug}`}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;