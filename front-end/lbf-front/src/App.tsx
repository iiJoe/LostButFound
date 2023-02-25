import { testUpload } from './functions/test';
import './App.css';
import { Found } from './Components/Found';

const clickTest = () => {
  testUpload();
  console.log("test")
}

function App() {
  return (
    <div className="App">
      {/* <div onClick={clickTest}> Click me!! </div> */}
      <Found/>
    </div>
  );
}

export default App;
