import React from 'react';
import Home from "./pages/Home.page";
import NasaPhoto from "./pages/NasaPhoto";
import "./App.css";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from "./pages/Login.pages";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signup from "./pages/Signup.page";
import { UserProvider } from "./contexts/user.contexts"

function App() {
  return (
    <BrowserRouter>
      {/* We are wrapping our whole app with UserProvider so that */}
      {/* our user is accessible through out the app from any page*/}
      <UserProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          {/* We are protecting our Home Page from unauthenticated */}
          {/* users by wrapping it with PrivateRoute here. */}
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
          </Route>  
            <Route exact path="/nasaphoto" element={<NasaPhoto />} />
          
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
 }
  
 export default App;










/*export default function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
     
    <BrowserRouter>
    <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
      </div>

      <Switch>
        <Route path="/dashboard">
          <Dashboard />
  
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    
    </BrowserRouter>
  </div>
);
/*    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
*/
/*}*/
