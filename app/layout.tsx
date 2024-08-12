import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import type { Viewport } from "next";
import { getLocaleOnServer } from "@/i18n/server";
import BrowserInitiator from "@/components/browser-initiator";
import I18NServer from "@/components/i18n-server";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

const LocaleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const locale = getLocaleOnServer();

  return (
    <html
      lang={locale ?? "en"}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content="#FFFFFF"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <title>My Portfolio</title>
      </head>
      <body className="h-full font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <BrowserInitiator>
            {/* @ts-expect-error Async Server Component */}
            <I18NServer locale={locale}>
              <main>{children}</main>
            </I18NServer>
          </BrowserInitiator>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
