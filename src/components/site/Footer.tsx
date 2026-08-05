import { site } from "@content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-rule fade-in px-6 py-8 text-center text-foreground/40">
      <p>
        © {year}{" "}
        <span className="text-gradient-cosmic font-medium">{site.name}</span>.
        All rights reserved.
      </p>
    </footer>
  );
}
