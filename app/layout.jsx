export const metadata = {
  title: 'Arvation',
  description: 'Arvation — AI, Automation, Backend, Frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
