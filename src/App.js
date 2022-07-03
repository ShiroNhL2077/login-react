import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Login from './components/Login';
import './app.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />  
      <Login />
    </div>
  );
}

export default App;
