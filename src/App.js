import './App.css';
import CustomPopup from './components/CustomPopup';
import Landing from './components/Landing';

function App() {
  return (
    <>
    <div className="App">
      <Landing title = {"WELCOME IN SEQUANCE BOARD"}/>
      <CustomPopup/>
    </div>
    </>
  );
}

export default App;
