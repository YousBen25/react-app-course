import './App.css';
import Counters from './Components/counters';
import NavBar from './Components/navbar';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>  
    </>
  );
}

export default App;
