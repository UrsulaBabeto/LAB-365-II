import "./App.css";
import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import Artigo from "./components/Artigo";
import Footer from "./components/Footer";

function App() {
  let hw = "Hello World!!!";
  return (
    <>
      <MenuBar />
      <div className="App">
        <section className="App-main">
          <p className="p-main">{hw}</p>
        </section>
        <Header />
        <Artigo />
        <Footer />
      </div>
    </>
  );
}

export default App;
