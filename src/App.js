import './App.css';
import Card from './components/card/Card';
import data from './utils/data'

function App() {
  return (
    <div className="App">
      {data.map(({id, language, img, btnName})=>{return(
      <Card key={id} lang={language} img={img} btn={btnName} />)
      })}
    </div>
  );
}

export default App;
