import React, { useEffect } from "react";
import "./LoadingScreen.css"; // Import the CSS file

const LoadingScreen = ({ setIsLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="loading-wrapper">
      <div className="one-div"></div>
    </div>
  );
};

export default LoadingScreen;
