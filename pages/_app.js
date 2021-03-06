import "tailwindcss/tailwind.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"
const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className:"z-50",
  delay:100
  
});
Router.events.on("routeChangeStart",progress.start)
Router.events.on("routeChangeComplete",progress.finish)
Router.events.on("routeChangeErrorm",progress.finish)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
