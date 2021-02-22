import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <>
      <Filter />
      <Highlights title="Serveis destacats per la llar" />
      <Highlights title="Serveis destacats per estudiar" />
      <Highlights title="Serveis destacats de mecànica" />
    </>
  );
};

export default Home;
