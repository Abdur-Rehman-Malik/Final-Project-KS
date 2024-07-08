// import Index from "./Components/Layouts";

// function App() {
//   return (
//     <>
//       <div className="w-screen h-screen bg-gray-200">
//         <Index />
//       </div>
//     </>
//   );
// }

// export default App;

// header

import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./Sign-up";
import Index from "./Components/Layouts";

function App() {
  // State for login status
  const [login, setLogin] = useState(true);

  // Function to update login state
  const updateLogin = (newState) => {
    setLogin(newState);
  };

  return (
    <div className="w-screen h-screen bg-gray-300 flex justify-end  items-center">
      {login ? (
        <Login updateLogin={updateLogin} />
      ) : (
        <SignUp updateLogin={updateLogin} />
      )}
      {/* <Index /> */}
    </div>
  );
}

export default App;
