import "./globals.css";
import localFont from "next/font/local";

const bbModern = localFont({
    src: "../public/fonts/bb-modern-regular-pro.otf",
    variable: "--font-bb-modern",
    display: 'swap',
});

export const metadata = {
    title: "Earl Pantry",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${bbModern.variable}`}>
        {children}
        </body>
        </html>
    );
}
