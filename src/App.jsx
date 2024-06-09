import Header from "./components/header-section/header";
import Hero from "./components/hero-section/hero";
import './App.css'
import Companies from "./components/Companies/companies";
import Resdiences from "./components/Residences/Resdiences";

function App() {
  return (
    <div className="App">
      <div c>
        <div className="white-gradient"/>
        <Header/>
        <Hero />
      </div>     
      <Companies/> 
      <Resdiences />
    </div>
  );
}
export default App;
