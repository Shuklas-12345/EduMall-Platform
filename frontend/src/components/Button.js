import React from 'react';

const Button = ({ label, onClick, variant = 'primary', disabled = false, type = 'button' }) => {
  const baseStyles = "px-6 py-3 rounded font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-secondary text-white hover:bg-secondary-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]}`}
      aria-label={label} // Accessibility: Screen reader support
    >
      {label}
    </button>
  );
};

export default Button;