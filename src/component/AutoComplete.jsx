import { useCallback, useEffect, useState } from "react";
import SuggestionList from "./suggestion-list";
import debounce from "lodash/debounce";

const AutoComplete = ({
  fetchSuggestions,
  onChange,
  onBlur,
  onSelect,
  customStyles,
  datakey,
  customLoading,
  placeholder,
  onFocus,
  staticData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result = [];
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      console.log(result, "reslt");
      setSuggestions(result);
    } catch (error) {
      console.log(error);
      setError("Error occured");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestions, 300),
    []
  );

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSuggestionClick = () => {};

  return (
    <div className="container">
      <input
        type="text"
        style={customStyles}
        onChange={handleChange}
        onSelect={onSelect}
        onBlur={onBlur}
        name={datakey}
        value={inputValue}
        placeholder={placeholder}
        onFocus={onFocus}
      />
      {(suggestions.length > 0 || loading || error) && (
        <ul className="suggestions-list" role="listbox">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">{customLoading}</div>}
          <SuggestionList
            datakey={datakey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
