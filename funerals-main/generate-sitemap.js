// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const baseUrl = "https://vro-funerals.co.za";

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream("./public/sitemap.xml");

  smStream.pipe(writeStream);

  // Add your routes
  smStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
  smStream.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/services", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/plans", changefreq: "monthly", priority: 0.8 });

  smStream.end();

  await streamToPromise(smStream);
  console.log("✅ Sitemap generated!");
}

generateSitemap();
