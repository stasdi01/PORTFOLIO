// The mobile counterpart to BrowserFrame: a dark bezel with rounded corners,
// so portrait app screenshots read as a phone rather than a cropped page.
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border-4 border-black bg-black shadow-xl ring-1 ring-white/10 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
