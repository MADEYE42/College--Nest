import Header from "./components/header-section/header";
import Hero from "./components/hero-section/hero";
import './App.css'
import Companies from "./components/Companies/companies";

function App() {
  return (
    <div className="App">
      <div c>
        <div className="white-gradient"/>
        <Header/>
        <Hero />
      </div>     
      <Companies/> 
    </div>
  );
}
export default App;
