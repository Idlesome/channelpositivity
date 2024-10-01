import { Footer, Header } from "common/components/layout";
import { Metadata } from "next";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Channel Positivity",
  description:
    "A blog dedicated to exploring inner peace, meditation and Buddhism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
