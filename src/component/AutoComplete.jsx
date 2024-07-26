import { useState } from "react";

const AutoComplete = ({
  fetchSuggestion,
  onChange,
  onBlur,
  onSelect,
  customStyles,
  datakey,
  customLoading,
  //   staticData,
  placeholder,
  onFocus,
}) => {
  const [inputValue, setInputValue] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  cons;

  return (
    <div className="container">
      <input
        style={customStyles}
        onChange={handleChange}
        onSelect={onSelect}
        onBlur={onBlur}
        name={datakey}
        value={inputValue}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </div>
  );
};

export default AutoComplete;
