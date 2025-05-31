// // import { useEffect, useRef, useState } from "react";

// // const Facebook = ({ 
// //   pageUrl = "https://www.facebook.com/facebook",
// //   width = 340,
// //   height = 500,
// //   tabs = "timeline",
// //   hideCover = false,
// //   showFacepile = true,
// //   smallHeader = false,
// //   adaptWidth = true,
// //   appId = ""
// // }) => {
// //   const containerRef = useRef(null);
// //   const iframeRef = useRef(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const loadFacebookEmbed = () => {
// //       try {
// //         // Validate URL
// //         if (!pageUrl.includes('facebook.com')) {
// //           throw new Error('Invalid Facebook URL');
// //         }

// //         // Create iframe source
// //         const params = new URLSearchParams({
// //           href: pageUrl,
// //           tabs: tabs,
// //           width: width,
// //           height: height,
// //           small_header: smallHeader,
// //           adapt_container_width: adaptWidth,
// //           hide_cover: hideCover,
// //           show_facepile: showFacepile,
// //           appId: appId
// //         });

// //         const iframeSrc = `https://www.facebook.com/plugins/page.php?${params.toString()}`;

// //         if (iframeRef.current) {
// //           iframeRef.current.src = iframeSrc;
// //           iframeRef.current.onload = () => setLoading(false);
// //           iframeRef.current.onerror = () => {
// //             throw new Error('Failed to load Facebook embed');
// //           };
// //         }

// //         // Handle resize messages from Facebook
// //         const handleMessage = (event) => {
// //           if (event.data && event.data.type === 'fb-resize') {
// //             iframeRef.current.style.height = `${event.data.height}px`;
// //           }
// //         };

// //         window.addEventListener('message', handleMessage);

// //         // Load Facebook SDK if needed
// //         if (!window.FB) {
// //           const script = document.createElement('script');
// //           script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
// //           script.async = true;
// //           script.defer = true;
// //           script.crossOrigin = "anonymous";
// //           script.onerror = () => {
// //             throw new Error('Failed to load Facebook SDK');
// //           };
// //           document.body.appendChild(script);
// //         }

// //         return () => {
// //           window.removeEventListener('message', handleMessage);
// //         };
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     loadFacebookEmbed();
// //   }, [pageUrl, width, height, tabs, hideCover, showFacepile, smallHeader, adaptWidth, appId]);

// //   if (error) {
// //     return (
// //       <div className="facebook-error" style={{ width, padding: '20px', background: '#f8f8f8', border: '1px solid #ddd' }}>
// //         <p>Error loading Facebook content: {error}</p>
// //         <a href={pageUrl} target="_blank" rel="noopener noreferrer">
// //           Visit our Facebook page directly
// //         </a>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div ref={containerRef} className="fb-page-embed" style={{ width: '100%', maxWidth: width }}>
// //       {loading && (
// //         <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8' }}>
// //           <p>Loading Facebook content...</p>
// //         </div>
// //       )}
// //       <iframe
// //         ref={iframeRef}
// //         width={width}
// //         height={height}
// //         style={{ 
// //           border: 'none', 
// //           overflow: 'hidden',
// //           width: '100%',
// //           display: loading ? 'none' : 'block'
// //         }}
// //         scrolling="no"
// //         frameBorder="0"
// //         allowFullScreen={true}
// //         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
// //         title={`Facebook Page Embed - ${pageUrl}`}
// //         loading="lazy"
// //       />
// //       <div 
// //         className="fb-xfbml-parse-ignore"
// //         style={{ display: 'none' }}
// //         data-href={pageUrl}
// //         data-tabs={tabs}
// //         data-width={width}
// //         data-height={height}
// //         data-small-header={smallHeader}
// //         data-adapt-container-width={adaptWidth}
// //         data-hide-cover={hideCover}
// //         data-show-facepile={showFacepile}
// //       />
// //     </div>
// //   );
// // };

// // export default Facebook;






// import { useEffect, useRef, useState } from "react";

// const Facebook = ({ 
//   pageUrl = "https://www.facebook.com/facebook",
//   width = 340,
//   height = 500,
//   tabs = "timeline",
//   hideCover = false,
//   showFacepile = true,
//   smallHeader = false,
//   adaptWidth = true
// }) => {
//   const containerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [error, setError] = useState(null);
//   const sdkLoaded = useRef(false);

//   useEffect(() => {
//     // Clear previous content
//     if (containerRef.current) {
//       containerRef.current.innerHTML = '';
//     }

//     // Create the Facebook page div
//     const fbPageDiv = document.createElement('div');
//     fbPageDiv.className = 'fb-page';
//     fbPageDiv.setAttribute('data-href', pageUrl);
//     fbPageDiv.setAttribute('data-tabs', tabs);
//     fbPageDiv.setAttribute('data-width', width);
//     fbPageDiv.setAttribute('data-height', height);
//     fbPageDiv.setAttribute('data-small-header', smallHeader.toString());
//     fbPageDiv.setAttribute('data-adapt-container-width', adaptWidth.toString());
//     fbPageDiv.setAttribute('data-hide-cover', hideCover.toString());
//     fbPageDiv.setAttribute('data-show-facepile', showFacepile.toString());
    
//     containerRef.current.appendChild(fbPageDiv);

//     const handleSDKLoad = () => {
//       if (!window.FB) {
//         setError('Facebook SDK failed to load');
//         setIsLoaded(true);
//         return;
//       }

//       // Initialize and parse XFBML
//       window.FB.init({
//         xfbml: true,
//         version: 'v18.0'
//       });

//       // Check if already parsed (sometimes needed for React strict mode)
//       if (document.querySelector('.fb-page')) {
//         window.FB.XFBML.parse();
//       }

//       setIsLoaded(true);
//       sdkLoaded.current = true;
//     };

//     // Load Facebook SDK if not already loaded
//     if (!sdkLoaded.current) {
//       if (window.FB) {
//         handleSDKLoad();
//       } else {
//         window.fbAsyncInit = handleSDKLoad;
        
//         const script = document.createElement('script');
//         script.src = "https://connect.facebook.net/en_US/sdk.js";
//         script.async = true;
//         script.defer = true;
//         script.crossOrigin = "anonymous";
//         script.onerror = () => {
//           setError('Failed to load Facebook SDK');
//           setIsLoaded(true);
//         };
        
//         document.body.appendChild(script);
//       }
//     } else {
//       // SDK already loaded, just parse the new content
//       window.FB.XFBML.parse();
//       setIsLoaded(true);
//     }

//     return () => {
//       // Cleanup
//       if (containerRef.current) {
//         containerRef.current.innerHTML = '';
//       }
//     };
//   }, [pageUrl, width, height, tabs, hideCover, showFacepile, smallHeader, adaptWidth]);

//   if (error) {
//     return (
//       <div style={{ 
//         width: '100%', 
//         maxWidth: width,
//         padding: '20px', 
//         background: '#f8f8f8', 
//         border: '1px solid #ddd',
//         textAlign: 'center'
//       }}>
//         <p>Error loading Facebook content: {error}</p>
//         <a 
//           href={pageUrl} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           style={{ color: '#4267B2', fontWeight: 'bold' }}
//         >
//           Visit our Facebook page directly
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div style={{ width: '100%', maxWidth: width }}>
//       {!isLoaded && (
//         <div style={{ 
//           height, 
//           display: 'flex', 
//           alignItems: 'center', 
//           justifyContent: 'center', 
//           background: '#f8f8f8',
//           border: '1px solid #ddd'
//         }}>
//           <p>Loading Facebook content...</p>
//         </div>
//       )}
//       <div 
//         ref={containerRef} 
//         style={{ 
//           display: isLoaded ? 'block' : 'none',
//           minHeight: height
//         }}
//       />
//     </div>
//   );
// };

// export default Facebook;



import { useEffect, useRef, useState } from 'react';
import { 
  Box,
  CircularProgress,
  Typography,
  Link,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';

const Facebook = ({ 
  pageUrl = "https://www.facebook.com/facebook",
  width = 340,
  height = 500,
  tabs = "timeline",
  hideCover = false,
  showFacepile = true,
  smallHeader = false,
  adaptWidth = true
}) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const sdkLoaded = useRef(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Clear previous content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Adjust dimensions for mobile
    const displayWidth = isMobile ? '100%' : width;
    const displayHeight = isMobile ? Math.min(height, 400) : height;

    // Create the Facebook page div
    const fbPageDiv = document.createElement('div');
    fbPageDiv.className = 'fb-page';
    fbPageDiv.setAttribute('data-href', pageUrl);
    fbPageDiv.setAttribute('data-tabs', tabs);
    fbPageDiv.setAttribute('data-width', displayWidth);
    fbPageDiv.setAttribute('data-height', displayHeight);
    fbPageDiv.setAttribute('data-small-header', smallHeader.toString());
    fbPageDiv.setAttribute('data-adapt-container-width', adaptWidth.toString());
    fbPageDiv.setAttribute('data-hide-cover', hideCover.toString());
    fbPageDiv.setAttribute('data-show-facepile', showFacepile.toString());
    
    if (containerRef.current) {
      containerRef.current.appendChild(fbPageDiv);
    }

    const handleSDKLoad = () => {
      if (!window.FB) {
        setError('Facebook SDK failed to load');
        setIsLoaded(true);
        return;
      }

      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });

      if (document.querySelector('.fb-page')) {
        window.FB.XFBML.parse();
      }

      setIsLoaded(true);
      sdkLoaded.current = true;
    };

    if (!sdkLoaded.current) {
      if (window.FB) {
        handleSDKLoad();
      } else {
        window.fbAsyncInit = handleSDKLoad;
        
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        script.onerror = () => {
          setError('Failed to load Facebook SDK');
          setIsLoaded(true);
        };
        
        document.body.appendChild(script);
      }
    } else {
      window.FB.XFBML.parse();
      setIsLoaded(true);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [pageUrl, width, height, tabs, hideCover, showFacepile, smallHeader, adaptWidth, isMobile]);

  if (error) {
    return (
      <Paper elevation={1} sx={{ 
        width: '100%', 
        maxWidth: isMobile ? '100%' : width,
        p: 3, 
        textAlign: 'center',
        backgroundColor: theme.palette.grey[100]
      }}>
        <Typography variant="body1" color="error" gutterBottom>
          Error loading Facebook content: {error}
        </Typography>
        <Link 
          href={pageUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          color="primary"
          fontWeight="bold"
        >
          Visit our Facebook page directly
        </Link>
      </Paper>
    );
  }

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: isMobile ? '100%' : width,
      position: 'relative'
    }}>
      {!isLoaded && (
        <Paper elevation={0} sx={{ 
          height: isMobile ? Math.min(height, 400) : height,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: theme.palette.grey[100],
          border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: 1
        }}>
          <CircularProgress color="primary" size={40} />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Loading Facebook content...
          </Typography>
        </Paper>
      )}
      <Box 
        ref={containerRef} 
        sx={{ 
          display: isLoaded ? 'block' : 'none',
          minHeight: isMobile ? Math.min(height, 400) : height,
          '& .fb-page': {
            width: '100% !important'
          },
          '& span': {
            width: '100% !important'
          },
          '& iframe': {
            width: '100% !important'
          }
        }}
      />
    </Box>
  );
};

export default Facebook;