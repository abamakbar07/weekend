import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { testimonial, submain } from './data/content'

import Footer from './pages/Footer';
import Header from './pages/Header';
import Submain from './pages/Submain';
import Main from './pages/Main';
import Testimonial from './pages/Testimonial';
import Definition from './pages/Definition';
import Helptips from './pages/Helptips';


function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Definition />

      <Testimonial title="TESTIMONIAL" content={testimonial} />

      <Submain 
        title={submain[0].title} 
        content={submain[0].content} 
      />

      <Submain 
        title={submain[1].title} 
        content={submain[1].content}
      />

      <Helptips />

      <Submain
        image={submain[2].image}
        title={submain[2].title}
        content={submain[2].content}
      />

      <Footer />
    </div>
  );
}

export default App;
