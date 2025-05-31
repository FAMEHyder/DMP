(function() {
  "use strict";

  // Your Facebook Page URL (change to your page)
  var facebookPageURL = "https://www.facebook.com/YourPageName";

  // Create Facebook Page Plugin iframe src URL
  // Using official Facebook Page Plugin parameters (adjust width, height, tabs etc.)
  var iframeSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageURL)}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;

  // Create iframe element
  var iframe = document.createElement("iframe");
  iframe.src = iframeSrc;
  iframe.width = "340";
  iframe.height = "500";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";
  iframe.scrolling = "no";
  iframe.frameBorder = "0";
  iframe.allowTransparency = true;
  iframe.allow = "encrypted-media";

  // Message handler to relay messages between parent and iframe (optional, depends on your use case)
  var messageHandler = function(event) {
    // Only accept messages from Facebook domains for security
    if (event.origin.includes("facebook.com")) {
      var targetWindow = window.opener || window.parent || window;
      if (!targetWindow) return;
      // Forward message data
      targetWindow.postMessage(event.data, "*");
    } else {
      // Forward messages from parent to iframe
      iframe.contentWindow.postMessage(event.data, "*");
    }
  };

  // Setup event listener for postMessage communication
  if (window.addEventListener) {
    window.addEventListener("message", messageHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", messageHandler);
  }

  // Append iframe to the body (or wherever you want)
  document.body.appendChild(iframe);
})();
