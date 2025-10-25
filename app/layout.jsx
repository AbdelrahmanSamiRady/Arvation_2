import './globals.css'

export const metadata = {
  title: 'Arvation — Software Solutions',
  description: 'Arvation builds modern software with AI, automation, backend, and frontend expertise. Based in California, USA.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
