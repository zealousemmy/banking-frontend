"use client";
import DashHeader from "@/components/DashboardComps/DashHeader";
import Script from "next/script";
import dynamic from "next/dynamic";

// const inter = Inter({ subsets: ["latin"] });
const DynamicHeader = dynamic(
  () => import("../../components/DashboardComps/DashHeader"),
  {
    ssr: false,
  }
);
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>
          Elite Trust Finance - Money Transfer and Online Payments HTML Template
        </title>

        <link
          rel="shortcut icon"
          href="/dash-assets/images/fav.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/dash-assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/dash-assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/dash-assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/dash-assets/css/plugin/apexcharts.css" />
        <link rel="stylesheet" href="/dash-assets/css/plugin/nice-select.css" />
        <link rel="stylesheet" href="/dash-assets/css/arafat-font.css" />
        <link rel="stylesheet" href="/dash-assets/css/plugin/animate.css" />
        <link rel="stylesheet" href="/dash-assets/css/style.css" />
      </head>
      <body style={{ background: "white" }}>
        <div class="preloader" id="preloader"></div>
        <a href="javaScript:void(0)" class="scrollToTop">
          <i class="fas fa-angle-double-up"></i>
        </a>
        {/* <DynamicHeader /> */}
        <DashHeader />
        {children}
      </body>

      <Script src="/dash-assets/js/jquery.min.js"></Script>
      <Script src="/dash-assets/js/bootstrap.min.js"></Script>
      <Script src="/dash-assets/js/jquery-ui.js"></Script>
      <Script src="/dash-assets/js/plugin/apexcharts.js"></Script>
      <Script src="/dash-assets/js/plugin/jquery.nice-select.min.js"></Script>
      <Script src="/dash-assets/js/plugin/waypoint.min.js"></Script>
      <Script src="/dash-assets/js/plugin/wow.min.js"></Script>
      <Script src="/dash-assets/js/plugin/plugin.js"></Script>
      <Script src="/dash-assets/js/main.js"></Script>
    </html>
  );
}
