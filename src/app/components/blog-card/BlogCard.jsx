"use client";

import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const BlogCard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/tech-news");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setNews(data?.articles?.filter((article) => article?.title) || []);
      } catch (error) {
        console.error("Error fetching tech news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-6 text-gray-400 animate-pulse">
        Loading tech news...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-6 text-red-400">Error: {error}</div>;
  }

  if (!news?.length) {
    return (
      <div className="text-center mt-6 text-gray-400">No tech news found.</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Animated Title Section */}
      <motion.div
        className="flex flex-col items-center mb-8 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Tech Text */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Tech
            </span>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Player
              autoplay
              loop
              src="/blogTitle.json"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </motion.div>

          {/* Blog Text */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 mt-8">
        {news.map((article) => (
          <div
            key={`${article.title}-${article.publishedAt}`}
            className="group relative bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/50 hover:-translate-y-1 border border-green-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-blue-300/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex flex-col h-full">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="block relative aspect-video overflow-hidden rounded-xl mb-6"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={article.urlToImage || "/placeholder-tech.jpg"}
                  alt={article.title || "Tech news image"}
                  onError={(e) => {
                    e.target.src = "/placeholder-tech.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </a>

              <div className="flex flex-col flex-1">
                <a href={article.url} target="_blank" rel="noreferrer">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800 line-clamp-2 transition-colors hover:text-green-600">
                    {article.title}
                  </h3>
                </a>

                <p className="mb-4 text-gray-600 line-clamp-3 flex-1">
                  {article.description}
                </p>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded-lg opacity-30 filter blur-sm bg-gradient-to-r from-green-400 to-blue-500" />
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full gap-2">
                    Read Article
                    <svg
                      className="w-4 h-4"
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
                  </span>
                  <span className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100" />
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
