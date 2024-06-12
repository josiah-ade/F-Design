import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";


function App() {
  return (
    <div className="App">
      <div className="container__body">
          <Header />
          <Body />
      </div>
    </div>
  );
}

export default App;
