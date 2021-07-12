import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
function App() {
  return (
    <BrowserRouter>
     <Header/>
      <main className="py-3">
        <Container>
        <Route path="/" component={Home} />

          <Route path="/projects" exact component={Projects} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/skills" exact component={Skills} />
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;