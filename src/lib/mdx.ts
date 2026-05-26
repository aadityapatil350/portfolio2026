import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
  tech?: string[];
  status?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export function getPosts(
  directory: "blog" | "work"
): Post[] {
  const dir = path.join(contentDirectory, directory);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (data.draft) return null;

    const stats = readingTime(content);

    return {
      slug,
      content,
      readingTime: stats.text,
      ...data,
    } as Post;
  });

  return posts
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPost(
  directory: "blog" | "work",
  slug: string
): Post | null {
  const filePath = path.join(contentDirectory, directory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    content,
    readingTime: stats.text,
    ...data,
  } as Post;
}

export function getAllSlugs(directory: "blog" | "work"): string[] {
  const dir = path.join(contentDirectory, directory);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const filePath = path.join(dir, f);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      if (data.draft) return null;
      return f.replace(/\.mdx$/, "");
    })
    .filter(Boolean) as string[];
}
