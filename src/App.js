import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/styles.scss';
import  { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { MainPage } from './MainPage/MainPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
