import React from 'react';
import './App.css';

const server__url="https://987dfeb3baa7.ngrok.io/uploads"

function App() {
  return (
    <div className="App">
      <form action={server__url} method="POST" encType="multipart/form-data">
          <input
          type="text"
          name="uploadername"
          placeholder="Enter your name please"
          required/>
          <input
          type="file"
          placeholder="name"
          name="file"/>
          <input type={"submit"} value={"hi"}/>
      </form>
    </div>
  );
}

export default App;
