/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    dest: "public",
    register: true,
    skipWaitin: true,
    disable: process.env.NODE_ENV === "development",
  }),

  transpilePackages: ["@jf/ui-manga-maker"],
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.dribbble.com",
      "upload.wikMedia.org",
      "bubbleplan.net",
      "encrypted-tbn0.gstatic.com",
      "cdn-icons-png.flaticon.com",
      "100k-faces.glitch.me",
      "images.unsplash.com",
      "us.123rf.com",
      "www.w3schools.com",
      "apprendre-la-photo.fr",
    ],
  },
};

module.exports = nextConfig;
