import LocationInfo from './components/LocationInfo';
//import SearchBox from './components/SearchBox';
//import ResidentsList from './components/ResidentsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='banner'></div>
      <div>
        <h1>Rick and Morty Wiki</h1>
      </div>
      <LocationInfo/>
    </div>
  );
}

export default App;
