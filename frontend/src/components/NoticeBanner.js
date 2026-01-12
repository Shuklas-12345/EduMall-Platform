import React from 'react';

const NoticeBanner = ({ message, type = 'info' }) => {
  const styles = {
    info: "bg-primary text-white",
    warning: "bg-warning text-white",
    danger: "bg-danger text-white",
  };

  return (
    <div className={`w-full p-4 text-center font-medium ${styles[type]}`} role="alert">
      <p className="max-w-4xl mx-auto text-sm md:text-base">
        {message}
      </p>
    </div>
  );
};

export default NoticeBanner;