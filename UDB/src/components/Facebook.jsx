import React, { useEffect, useRef } from "react";

const Facebook = ({ pageUrl = "https://www.facebook.com/YourPageName" }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
      pageUrl
    )}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

    if (iframeRef.current) {
      iframeRef.current.src = iframeSrc;
    }

    const messageHandler = (event) => {
      if (event.origin.includes("facebook.com")) {
        const targetWindow = window.opener || window.parent || window;
        if (!targetWindow) return;
        targetWindow.postMessage(event.data, "*");
      } else {
        iframeRef.current?.contentWindow.postMessage(event.data, "*");
      }
    };

    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, [pageUrl]);

  return (
    <iframe
      ref={iframeRef}
      width="340"
      height="500"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allowTransparency={true}
      allow="encrypted-media"
      title="Facebook Page Plugin"
    />
  );
};

export default Facebook;
