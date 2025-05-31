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
  pageUrl = "https://www.facebook.com/fame.hyder",
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
      position: 'relative',
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