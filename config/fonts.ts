import { Fira_Code as FontMono, Quicksand as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: [] 
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono", fallback: [] 
});
