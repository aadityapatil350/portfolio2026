export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-custom max-w-2xl text-base leading-relaxed [&>p]:mb-4 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-1 [&>blockquote]:my-6 [&>blockquote]:border-l-2 [&>blockquote]:border-accent-blue [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>pre]:my-6 [&>a]:text-accent-blue [&>a]:underline [&>a:hover]:text-accent-blue/80 [&_code]:font-mono [&_code]:text-sm">
      {children}
    </div>
  );
}
