// import { useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increase</button>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  function handleCountInc() {
    setcount(count + 1);
  }

  function handleCountDec() {
    count <= 0 ? 0 : setcount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCountDec}>Decrease</button>
      <button onClick={handleCountInc}>Increase</button>
    </div>
  );
};

export default App;
