import './styles/App.css';
import Queue from './components/Queue';
import ToolBox from './components/ToolBox';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Task Handler</h1>
      <Queue />
      <ToolBox />
    </div>
  );
}

export default App;
