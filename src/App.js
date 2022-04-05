import logo from './logo.svg';
import './App.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;