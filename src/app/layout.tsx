import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'SnowTrace',
  description: 'AI-Guided Avalanche Rescue Routes in Seconds',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22m8 3 4 8 5-5 5 15H2L8 3z%22 fill=%22hsl(195, 26%, 65%)%22/><path d=%22M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 1.94 8.23 0%22 stroke=%22hsl(195, 26%, 65%)%22 stroke-width=%222%22 fill=%22none%22/></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
