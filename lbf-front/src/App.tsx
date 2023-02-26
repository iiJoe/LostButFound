import React from 'react';
import { Found } from './Components/Found';
import { Lost } from './Components/Lost';
import { Main } from './Components/Main';
import { Nav } from './Components/Nav';

const App = () => {
  const [page,setPage] = React.useState("main")

  const switchPage = (newPage: string) => {
    setPage(newPage)
  }

  let component = <Main switchTo={switchPage} />

  switch(page) {
    case "main":
      component = <Main switchTo={switchPage}/>;
      break;
    case "found":
      component = <Found switchTo={switchPage} />;
      break;
    case "lost":
      component = <Lost />
      break;
    default:
      component = <Main switchTo={switchPage}/>;
      break;
  }

  return (
    <div>
      <Nav switchTo={switchPage}/>
      <div className="body">
      {component}
      </div>
    </div>
    
  );
}

export default App;
