"use client";

import React, { useEffect, useState } from "react";

const BlogCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/tech-news");
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching tech news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading tech news...</div>;
  }

  if (news.length === 0) {
    return <div className="text-center mt-6">No tech news found.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 pb-10 mt-10">
      {news.map((article, index) => (
        // <div className="card bg-base-100 w-96 shadow-sm" key={index}>
        //   <figure className="px-10 pt-10">
        //     <img src={article.urlToImage} alt="Shoes" className="rounded-xl" />
        //   </figure>
        //   <div className="card-body items-center text-center">
        //     <h2 className="card-title">{article.title}</h2>
        //     <p>{article.description}</p>
        //     <div className="card-actions">
        //       <button className="btn btn-primary" href={article.url}>
        //         <a href={article.url}>Read Now</a>
        //       </button>
        //     </div>
        //   </div>
        // </div>

        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:w-full">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={article.urlToImage}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {article.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
