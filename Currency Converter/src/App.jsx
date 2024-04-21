import "./App.css";
import Converter from "./Components/Converter";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="container">
          <Converter />
        </div>
      </div>
    </>
  );
}

export default App;
