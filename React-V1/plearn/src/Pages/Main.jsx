import GameSection from "../components/GameSection";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import BreadCrums from "../components/BreadCrums";
// import Litepaper from "../components/Litepaper";
// import Hype from "./components/Hype";
// import Gamedes from "./components/Gamedes";
const ShowCase = lazy(() => import("../components/ShowCase"));
const Toke = lazy(() => import("../components/toke"));
const Faq = lazy(() => import("../components/Faq"));
const CTAsection = lazy(() => import("../components/CTAsection"));
const Footer = lazy(() => import("../components/Footer"));
export default function Main() {
  return (
    <>
      <div>
        <div className="vidbg">
          <Header />
          <GameSection />
          {/* <Gamedes /> */} <BreadCrums />
          <Suspense>
            <ShowCase style={{ marginTop: "10vw" }} />
            <Toke />
            <Faq />
            <CTAsection />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}
