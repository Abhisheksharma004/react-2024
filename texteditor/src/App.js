import './App.css';
import About from './components/About';
// import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="Text Foemater" home="Home" about="About" gallery="Gallery" contact={123}/>
      {/* <Navbar/> */}
      {/* <Form th="Enter Your Text"/> */}
      <About/>
    </>
  );
}

export default App;
