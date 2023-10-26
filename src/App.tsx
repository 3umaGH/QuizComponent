import React from "react";
import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Quiz
        title="First Quiz"
        description="This quiz is used as a placeholder and used for testing purposes.
        maybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text too maybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text toomaybe some bigger text too"
        difficulty="hard"
      />
    </div>
  );
}

export default App;
