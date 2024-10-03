import './App.css'
import ListingPage from './ListingPage'
import UploadListPage from './UploadListPage'
import Nav from './Nav';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Nav/>
              <ListingPage/>
            </div>
          }/>
          
          <Route path="/upload" element={
            <div>
              <Nav/>
              <UploadListPage/>
            </div>
          }/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;

