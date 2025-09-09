import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Sen, Fira_Code } from 'next/font/google';
import type { ReactNode } from 'react';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

const inter = Sen({
  subsets: ['latin'],
});
const code_font = Fira_Code({
  subsets: ['latin'],
  variable: '--font-code-fire'
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${code_font.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider defaultTheme='light' attribute={"class"}>
          <HeroHeader />{children} <FooterSection /></ThemeProvider>
      </body>
    </html>
  );
}
