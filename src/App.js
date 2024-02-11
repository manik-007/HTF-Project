import './App.css';
import Form from './Form';
//import Navbar from './Navbar';
import Home from './Home';
import Signin from './Signin';
import {Routes, Route} from 'react-router-dom';
import SearchFeed from './SearchFeed';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Userform" element={<Form/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/SearchFeed" element={<SearchFeed/>}/>
      </Routes>
    </div>
  );
}

export default App;
