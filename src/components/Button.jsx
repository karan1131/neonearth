function Button({ text, className = "", onClick }) {
    return (
      <button
        onClick={onClick}
        className={`p-2 max-w-full text-sm text-center text-white bg-pink-600 rounded-md border border-pink-600 border-solid max-md:px-5 ${className}`}
      >
        {text}
      </button>
    );
  }
  
  export default Button;