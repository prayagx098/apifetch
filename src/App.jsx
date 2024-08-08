
import Apifetch from './Apifetch';
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Apifetch/>
      <Footer/>
    </div>
  );
}

export default App;
