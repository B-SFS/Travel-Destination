import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import data from "../src/data/data.json";
import Home from "./components/home/Home.jsx"
import Tours from "./components/tours/Tours.jsx";
import City from "./components/tours/cities/cities.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

export default function App() {
=======

import "./App.css";

import data from "../src/data/data.json";

import Home from './components/home/Home.jsx';
import Tours from "./components/tours/Tours";
import City from "./components/tours/Tours.jsx";
import NotFound from "./components/notfound/notfound.jsx"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/tours" element={<Tours tours={data}/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


=======
export default App;

