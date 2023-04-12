import React, { useEffect } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import ProfileScreen from "./screens/ProfileScreen"; // Import ProfileScreen component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Homescreen /> : <LoginScreen />} />
          {user && <Route path="/profile" element={<ProfileScreen />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
