import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

/**
 * Reads every .mdx file in `dir`. When a locale is given, a translated file at
 * `dir/<locale>/<slug>.mdx` replaces the default one (same slug, so URLs are shared
 * across languages). Files without a translation fall back to the default version.
 */
function getMDXData(dir: string, locale?: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const translated = locale ? path.join(dir, locale, file) : null;
    const filePath = translated && fs.existsSync(translated) ? translated : path.join(dir, file);
    const { metadata, content } = readMDXFile(filePath);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""], locale?: string) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir, locale);
}
