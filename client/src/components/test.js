import React, { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    console.log("Environment Variables:");
    console.log("FORMBOLD_URL:", import.meta.env.VITE_FORMBOLD_URL);
    console.log("All env:", import.meta.env);
  }, []);

  return (
    <div>
      <h2>Environment Test</h2>
      <p>Check the console for environment variables</p>
      <p>FORMBOLD_URL: {import.meta.env.VITE_FORMBOLD_URL}</p>
    </div>
  );
};

export default TestComponent;
