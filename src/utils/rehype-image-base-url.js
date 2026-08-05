// Literal <img> JSX written inside Markdown/MDX content bypasses the
// MDXComponents mapping (and with it useBaseUrl), so absolute src paths
// break when the site is served from a subpath (e.g. PR previews, where
// baseUrl is /codat-docs/pr-preview/pr-<n>/). Rewrites those srcs at
// compile time instead; a no-op for production builds, where baseUrl is "/".
const rehypeImageBaseUrl = ({ baseUrl }) => {
  const prefix = (src) =>
    typeof src === "string" && src.startsWith("/") && !src.startsWith("//")
      ? baseUrl + src.slice(1)
      : src;

  const visit = (node) => {
    if (node.type === "element" && node.tagName === "img" && node.properties) {
      node.properties.src = prefix(node.properties.src);
    }

    if (
      (node.type === "mdxJsxFlowElement" ||
        node.type === "mdxJsxTextElement") &&
      node.name === "img"
    ) {
      for (const attr of node.attributes ?? []) {
        if (attr.type === "mdxJsxAttribute" && attr.name === "src") {
          attr.value = prefix(attr.value);
        }
      }
    }

    (node.children ?? []).forEach(visit);
  };

  return (tree) => {
    if (!baseUrl || baseUrl === "/") {
      return;
    }
    visit(tree);
  };
};

export default rehypeImageBaseUrl;
