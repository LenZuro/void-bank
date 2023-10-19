"use client";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-purple-gradient font-poppins font-meduim text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
