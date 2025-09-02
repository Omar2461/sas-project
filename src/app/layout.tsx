import "../app/globals.css";

export const metadata = {
  title: "zadvault",
  description: "Enterprise SaaS built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
        <div id="sidebar-root" className="" />
      </body>
    </html>
  );
}
