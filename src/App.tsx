import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");

  async function onSubmit(e: any) {
    e.preventDefault();
    const {data} = await axios.get(
      "https://testingthefunction.azurewebsites.net/api/testfunction?code=g46MtXGQFjsLpCRwpCRjV5dY-4Jb1A7ToCwNg-1pFd7LAzFuqSRCTw==", {
        params: {
          name: value
        }
      }
      );
      console.log(data)
      alert(data)
  }

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Name"
        />
        <button>Submit</button>
      </form>
      {value}
    </>
  );
}

export default App;
