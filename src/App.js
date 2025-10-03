import "./App.css";

import React, { useState } from "react";

function App() {
  const [selectedProblem, setSelectedProblem] = useState(
    "Longest Substring with K Distinct Characters"
  );
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState(null);
  const [error, setError] = useState("");

  // TODO: Implement this function
  const longestSubstringWithKDistinct = (s, k) => {
    if (!s || k <= 0) {
      return 0;
    }
    let left = 0;
    let maxLen = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      while (map.size > k) {
        map.set(s[left], map.get(s[left]) - 1);
        if (map.get(s[left]) === 0) {
          map.delete(s[left]);
        }
        left++;
      }
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  };

  // TODO: Implement this function
  const removeNthNodeFromEnd = (head, n) => {
    // Your two-pointer algorithm here
    return [];
  };

  const handleExecute = () => {
    setError("");
    setOutput(null);
    if (selectedProblem === "Longest Substring with K Distinct Characters") {
      if (!input1 || !input2) {
        setError("Please enyter both strings and k values");
        return;
      }
      const result = longestSubstringWithKDistinct(input1, parseInt(input2));
      setOutput(result);
    }
  };

  const loadExample = (example) => {
    if (example === 1) {
      setInput1("eceba");
      setInput2("2");
      setOutput(null);
    } else if (example) {
      setInput1("abcadcacacaca");
      setInput2("3");
      setOutput(null);
    } else if (example === 3) {
      setInput1("aa");
      setInput2("1");
      setOutput(null);
    }
  };

  return (
    <div className="App">
      {/* <h1>React Coding Assessment</h1> */}
      <div className="dropdown-block">
        <label>Select Problem:</label>
        <select
          value={selectedProblem}
          onChange={(e) => {
            setSelectedProblem(e.target.value);
            // setInput1("");
            // setInput2("");
            // setOutput(null);
            // setError("");
          }}
        >
          <option>Longest Substring with K Distinct Characters</option>
        </select>
      </div>
      {selectedProblem === "Longest Substring with K Distinct Characters" && (
        <>
          <div className="problem-card">
            <h2>Longest Substring with K Distinct Characters</h2>
            <p>
              Find the length of the longest substring in a given string that
              contains at most K distinct characters.
            </p>

            <div className="examples">
              <button onClick={() => loadExample(1)}>Example 1</button>
              <button onClick={() => loadExample(2)}>Example 2</button>
              <button onClick={() => loadExample(3)}>Example 3</button>
            </div>

            <div className="input-block">
              <label>String (s)</label>
              <input
                type="text"
                placeholder="eceba"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label>K (distinct characters)</label>
              <input
                type="text"
                placeholder="2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <button className="execute-btn" onClick={handleExecute}>
              Execute
            </button>
            {error && <p className="error">Error: {error}</p>}
            <div className="output-block"></div>
            <label>Output:</label>
            <div className="output">{output !== null && <p>{output}</p>}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
