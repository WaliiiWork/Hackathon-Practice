import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-cream w-full h-full p-0 m-0 box-border">
        {children}
      </body>
    </html>
  );
}
