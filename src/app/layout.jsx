import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // this is fine if ClientLayout.jsx is in same folder

export const metadata = {
  title: "Skill-Bridge",
  description: "hi",
  icons: [{ url: "/icons/icon.ico", sizes: "128x128", type: "image/x-icon" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
