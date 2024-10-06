
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';

function App() {
  return (
    <>    
      {/*<Navbar title="TextUtils" aboutText="About Title" /> */}
        <Navbar/> 
        <div className='container my-3'>
        <TextForm heading="Enter your text here"/>
        </div>
    </>
  );
}

export default App;
