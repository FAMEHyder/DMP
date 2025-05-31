import { useEffect, useRef, useState } from "react";

const Facebook = ({ 
  pageUrl = "https://www.facebook.com/facebook",
  width = 340,
  height = 500,
  tabs = "timeline",
  hideCover = false,
  showFacepile = true,
  smallHeader = false,
  adaptWidth = true,
  appId = ""
}) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFacebookEmbed = () => {
      try {
        // Validate URL
        if (!pageUrl.includes('facebook.com')) {
          throw new Error('Invalid Facebook URL');
        }

        // Create iframe source
        const params = new URLSearchParams({
          href: pageUrl,
          tabs: tabs,
          width: width,
          height: height,
          small_header: smallHeader,
          adapt_container_width: adaptWidth,
          hide_cover: hideCover,
          show_facepile: showFacepile,
          appId: appId
        });

        const iframeSrc = `https://www.facebook.com/plugins/page.php?${params.toString()}`;

        if (iframeRef.current) {
          iframeRef.current.src = iframeSrc;
          iframeRef.current.onload = () => setLoading(false);
          iframeRef.current.onerror = () => {
            throw new Error('Failed to load Facebook embed');
          };
        }

        // Handle resize messages from Facebook
        const handleMessage = (event) => {
          if (event.data && event.data.type === 'fb-resize') {
            iframeRef.current.style.height = `${event.data.height}px`;
          }
        };

        window.addEventListener('message', handleMessage);

        // Load Facebook SDK if needed
        if (!window.FB) {
          const script = document.createElement('script');
          script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
          script.async = true;
          script.defer = true;
          script.crossOrigin = "anonymous";
          script.onerror = () => {
            throw new Error('Failed to load Facebook SDK');
          };
          document.body.appendChild(script);
        }

        return () => {
          window.removeEventListener('message', handleMessage);
        };
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadFacebookEmbed();
  }, [pageUrl, width, height, tabs, hideCover, showFacepile, smallHeader, adaptWidth, appId]);

  if (error) {
    return (
      <div className="facebook-error" style={{ width, padding: '20px', background: '#f8f8f8', border: '1px solid #ddd' }}>
        <p>Error loading Facebook content: {error}</p>
        <a href={pageUrl} target="_blank" rel="noopener noreferrer">
          Visit our Facebook page directly
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fb-page-embed" style={{ width: '100%', maxWidth: width }}>
      {loading && (
        <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8' }}>
          <p>Loading Facebook content...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        width={width}
        height={height}
        style={{ 
          border: 'none', 
          overflow: 'hidden',
          width: '100%',
          display: loading ? 'none' : 'block'
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={`Facebook Page Embed - ${pageUrl}`}
        loading="lazy"
      />
      <div 
        className="fb-xfbml-parse-ignore"
        style={{ display: 'none' }}
        data-href={pageUrl}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptWidth}
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
      />
    </div>
  );
};

export default Facebook;