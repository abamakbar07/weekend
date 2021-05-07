import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './pages/Footer';
import Header from './pages/Header';
import Submain from './pages/Submain';
import Main from './pages/Main';
import Testimonial from './pages/Testimonial';
import Definition from './pages/Definition';


function App() {
  const testimonial = [
    {
      title: "Blu Kicks",
      content:
        "Places where you can leverage tools and software to free up time to focus on growing the business.",
    },
    {
      title: "Angelus",
      content:
        "All those apps took me months to get running. Now the site practically runs itself!",
    },
    {
      title: "SoYoung",
      content:
        "Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction",
    },
  ];
  return (
    <div className="App">
      <Header />
      <Main />
      <Definition />
      <Testimonial title="TESTIMONIAL" content={testimonial} />
      <Submain
        title="POV"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nesciunt quaerat sequi perferendis facere corrupti odio temporibus consequuntur, modi sapiente autem obcaecati quam vel ratione ea dolorem ut explicabo laudantium."
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
