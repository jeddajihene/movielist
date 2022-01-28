import './App.css';
import Navbar from './component/Navbar/Navbar';
import Movielist from './component/Movielist/Movielist';
// import Moviecard from './component/Moviecard/Moviecard';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div >
      <Navbar/>
      <Movielist/>
      {/* <Moviecard/> */}
      <Footer/>
     
    </div>
  );
}

export default App;
