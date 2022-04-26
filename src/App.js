import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Table from './Components/table';

function App() {
  
  // const[data,setdata]= useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8080/Firstproject/fetchServlet")
  //     .then((response) => response.json())
  //     .then((json) => setdata(json))



  // }, [])
 
  
  return (
  <>
  <Header/>
  <Table/>
  <Footer/>
  </>  
  
  );
}

export default App;
