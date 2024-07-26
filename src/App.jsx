import { useState } from "react";
import "./App.css";
import AutoComplete from "./component/autoComplete";

function App() {
  // const [fetchSuggestion, setFetchSuggestion] = useState([]);

  const StaticData = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "melon",
    "berry",
    "peach",
    "cherry",
    "plum"
  ]

  const fetchSuggestion = async () => {};

  return (
    <>
      <h1>Autocomplete Debouncing </h1>
      <AutoComplete
        placeholder={"Enter Receipe"}
        staticData={staticData}
        dataKey={"name"}
        fetchSuggestion={fetchSuggestion}
        customeLoading={<>Loading Recipe</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur = {(e)=>{}}
        onFocus = {(e)=>{}}
        customeStyles = {}
      />
    </>
  );
}

export default App;
