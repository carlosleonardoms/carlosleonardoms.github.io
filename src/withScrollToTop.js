import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function withScrollToTop(Component) {
  function ScrollToTop(props) {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <Component {...props} />;
  }

  return ScrollToTop;
}

export default withScrollToTop;
