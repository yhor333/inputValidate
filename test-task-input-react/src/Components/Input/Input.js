const Input = ({ value, onChange, type, className, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
