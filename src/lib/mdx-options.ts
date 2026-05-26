import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

function rehypeExtractFilename() {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "div" && node.properties?.dataFilename) {
        const filename = node.properties.dataFilename;
        const pre = node.children?.[0];
        if (pre && pre.tagName === "pre") {
          if (!node.children[0].properties) {
            node.children[0].properties = {};
          }
          node.children[0].properties["data-filename"] = filename;
        }
      }
    });
  };
}

export const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeExtractFilename,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
};
