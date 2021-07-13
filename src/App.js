import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import './App.css'
function App() {
  return (
    <BrowserRouter>
     <Header/>
      <main className="py-3 h-75">
        <Container>
        <Route path="/" exact component={Home} />

          <Route path="/projects" exact component={Projects} />
          <Route path="/skills" exact component={Skills} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;