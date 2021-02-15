import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
//İmporting Components

import HomeBody from "./HomeBody";
import Adds from "./Adds";
import Blog from "./Blog";
import BlogEleman from "./BlogEleman";
import Login from "./Login";
import AdminBlog from "./AdminBlog";
import AdminAdds from "./AdminAdds";
import NotFound from "./NotFound";
import AdminEditBlog from "./AdminEditBlog";
import { useEffect } from "react";
import firebase from "./firebase";
import { useStateValue } from "./contexts/StateProvider";
import AdminEditAdds from "./AdminEditAdds";
import Contact from "./Contact";
import About from "./About";
import Hizmetler from "./Hizmetler";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //KEEPING AUTH EVEN PAGE REFRESH
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // Generaying Paths for BLOGS

  return (
    <div className="app">
      <ToastProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeBody}></Route>
            <Route path="/ilanlar" exact component={Adds}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/blog/:id" component={BlogEleman}></Route>
            <Route path="/admin-giris" component={Login}></Route>
            <Route path="/iletisim" component={Contact}></Route>
            <Route path="/hakkimizda" component={About}></Route>
            <Route path="/hizmetler" component={Hizmetler}></Route>
            <Route
              path="/admin-blog"
              exact
              component={user ? AdminBlog : Login}
            ></Route>

            <Route
              path="/admin-edit-blog/:id"
              component={user ? AdminEditBlog : Login}
            ></Route>
            <Route
              path="/admin-ilanlar"
              component={user ? AdminAdds : Login}
            ></Route>
            <Route
              path="/admin-edit-ilanlar/:id"
              component={user ? AdminEditAdds : Login}
            ></Route>

            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
