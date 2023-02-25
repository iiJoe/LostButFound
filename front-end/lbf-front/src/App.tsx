import { testUpload } from './functions/test';
import './App.css';
import { Found } from './Components/Found';
import { Whatever } from './Components/Whatever';

const clickTest = () => {
  testUpload();
  console.log("test")
}

function App() {
  return (
    <div className="App">
      {/* <div onClick={clickTest}> Click me!! </div> */}
      <Found/>
      <Whatever/>
    </div>
    
  );
}

export default App;
