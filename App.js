import NavBar from "./components/Navbar";
import UseSign from "./Sgin";
import Home from "./components/Home";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import Newblog from "./components/Newblog";
import Blogdetails from "./components/blogdetails";
import Update from "./components/Update";
import Error_Page from "./components/Error_Page";

function App() {
  return (
    <>
      <Routers>
        <div className="App">
          <NavBar />
          <div className="content">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/New">
              <Newblog />
            </Route>
            <Route path="/si">
              <UseSign />
            </Route>
            {/* route for blogdetails :id it just a parametre up to you that will catch the id from the selected blog */}
            <Route path="/blog/:id">
              <Blogdetails />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
          </div>
        </div>
          
      </Routers>
    </>
  );
}

export default App;
