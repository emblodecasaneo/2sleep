import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      image: "assets/images/resource/blog-1.jpg",
      date: "15 APRIL",
      title: "Our New Miami Beach Hotel Is Open!",
      author: "Admin",
      comments: "0 Comment",
      excerpt: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      image: "assets/images/resource/blog-2.jpg",
      date: "15 APRIL",
      title: "Know the secreat of Royalking Resort",
      author: "Admin",
      comments: "0 Comment",
      excerpt: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    },
    {
      image: "assets/images/resource/blog-3.jpg",
      date: "15 APRIL",
      title: "How to book a Resort in best price on Mountains",
      author: "Admin",
      comments: "0 Comment",
      excerpt: "Amet minim mollit no duis sit enim aliqua dolor do amet officia."
    }
  ];

  return (
    <section className="section-padding">
      <div className="auto-container">
        <div className="section_heading text-center mb_60">
          <span className="section_heading_title_small">Our Article</span>
          <h2 className="section_heading_title_big">
            Get More Update For <br /> Royalking
          </h2>
        </div>
        
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div 
                className="blog-1-block wow fadeInLeft" 
                data-wow-delay=".2s" 
                data-wow-duration=".8s"
              >
                <div className="blog-1-image">
                  <Link to="/blog-details">
                    <img src={blog.image} alt={blog.title} />
                  </Link>
                </div>
                <div className="blog-1-bottom-content">
                  <div className="blog-1-date">{blog.date}</div>
                  <h4 className="blog-1-title">
                    <Link to="/blog-details">{blog.title}</Link>
                  </h4>
                  <ul className="d-flex blog-1-meta-info">
                    <li>{blog.author}</li>
                    <li>{blog.comments}</li>
                  </ul>
                  <p className="blog-1-excerpt">{blog.excerpt}</p>
                  <div className="blog-1-link-btn">
                    <Link 
                      to="/blog-details" 
                      className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"
                    >
                      <i className="icon-5"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 