export default function Loading() {
  return (
    <div className="content-width px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl space-y-6 animate-pulse">
        <div className="h-8 w-48 rounded bg-muted" />
        <div className="flex gap-3">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-4 w-16 rounded bg-muted" />
        </div>
        <div className="space-y-4 pt-4">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-3/4 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
