import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Component1 from "./pages/component1/Component1";
import NotFound from "./pages/notFound/NotFound";
import Component2 from "./pages/component2/Component2";
import Component3 from "./pages/component3/Component3";
import Component4 from "./pages/component4/Component4";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Component1/>}/>
              <Route path="/component2" element={<Component2/>}/>
              <Route path="/component3" element={<Component3/>}/>
              <Route path="/component4" element={<Component4/>}/>
              <Route element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
