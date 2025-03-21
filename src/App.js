import React from "react";
import { useAppContext } from "./AppContext";
import Nav from "./components/navbar/Nav";
import Software from "./components/software/Software";
import Summary from "./components/summary/Summary";
import Documentation from "./components/documentation/Documentation";
import Application from "./components/application/Application";
import PhotosData from "./components/photosData/PhotosData";

function App() {
  const { activeSection } = useAppContext();

  const renderComponent = () => {
    console.log(activeSection)
    switch (activeSection) {
      case "inicio":
        return <div><h2 style={{ textAlign: "center" }}>MicroLEIS DSS</h2><h4 style={{ textAlign: "center" }}>Decision Support System for Soil Use and Protection</h4></div >;
      case "resumen":
        return <Summary />;
      case "documentacion":
        return <Documentation />;
      case "fotos":
        return <PhotosData />;
      case "software":
        return <Software />;
      case "application":
        return <Application />;
      default:
        return <h2>MICROLEIS DSS</h2>;
    }
  };

  return (
    <div className="app">
      <Nav />
      <main>{renderComponent()}</main>
    </div>
  );
}

export default App;