import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './pages/Footer';
import Header from './pages/Header';
import Submain from './pages/Submain';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Submain
        title="POV"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nesciunt quaerat sequi perferendis facere corrupti odio temporibus consequuntur, modi sapiente autem obcaecati quam vel ratione ea dolorem ut explicabo laudantium."
      /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
