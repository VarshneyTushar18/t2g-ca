export default function BlogContent({ html }) {
  return (
    <div
      className="blog-content max-w-none leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
