import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <nav>
      </nav>

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <Login />
  );
}


