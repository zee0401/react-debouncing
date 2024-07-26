import "./App.css";
import "./component/styles.css";
import AutoComplete from "./component/AutoComplete";

function App() {
  // const staticData = [
  //   "apple",
  //   "banana",
  //   "orange",
  //   "grape",
  //   "mango",
  //   "melon",
  //   "berry",
  //   "peach",
  //   "cherry",
  //   "plum",
  // ];
  // const [fetchSuggestion, setFetchSuggestion] = useState([]);

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error(" Network response error");
    }
    const result = await response.json();

    return result.recipes.map((recipe) => recipe.name);
  };

  return (
    <>
      <h1>Autocomplete Debouncing </h1>
      <AutoComplete
        placeholder={"Enter Receipe"}
        // staticData={staticData}
        dataKey={"name"}
        fetchSuggestions={fetchSuggestions}
        customeLoading={<>Loading Recipe</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customeStyles={{}}
      />
    </>
  );
}

export default App;
