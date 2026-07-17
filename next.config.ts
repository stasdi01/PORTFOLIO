import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Allow .mdx files to be treated as pages and imports alongside TS/TSX.
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
