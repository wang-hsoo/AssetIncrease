
import Loading from "./component/loading/Loading";
import React from 'react';
import { BrowserRouter as  Router, Routes, Route  } from "react-router-dom";
import Main from "./pages/main/Main";
import User from "./pages/UserInfo/User";
import NotFound from "./component/loading/NotFound";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/AssetIncrease/" element={<Main />} />
        <Route path="*" element={<NotFound />}/>


        {/*테스트*/}
        {/* <Route path="/test" element={<User />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
