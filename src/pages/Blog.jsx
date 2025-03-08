import React from 'react';

const Blog = () => {
  // ข้อมูลบทความตัวอย่าง
  const blogPosts = [
    {
      title: "Getting Started with React",
      date: "March 10, 2025",
      excerpt: "Learn how to start building web applications using React...",
      link: "#",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "March 5, 2025",
      excerpt: "Closures are one of the most powerful features in JavaScript...",
      link: "#",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Blog</h2>

      <div className="row justify-content-center">
        {blogPosts.map((post, index) => (
          <div className="col-md-8 mb-4" key={index}>
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="text-muted">{post.date}</h6>
                <p className="card-text">{post.excerpt}</p>
                <a href={post.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
