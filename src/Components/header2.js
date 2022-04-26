import React  from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Navbar from 'react-bootstrap/Navbar'
import ADD from './add.js'
import Edit from './Edit.js';
import Delete from './Delete.js';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import './component.css';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment}  from '@mui/material';
const buttonstyle =  {
    // "& .Muibuttongroup":
    // {
      
    // },
    
    backgroundColor: '#283D4A',
    color: '#fff',
    '&:hover': {
      backgroundColor:"#14AFF1",
      color: '#fff',
      
      
  }
};
const textfield ={
  height:35,
  width:400,
  backgroundColor: '#283D4A',
  color: '#fff',
  '&:hover': {
    backgroundColor:"#14AFF1",
    color: '#fff',
    

  }


};
const header2 = (props) => {
  const [open, setOpen] = React.useState(false);
  //const[data1,setdata]= React.useState([]);
  // const [selectionModel, setSelectionModel] = React.useState([]);
  const [buisness_year,setbusiness_year]=React.useState("");
  const [doc_id,setDocumentId]=React.useState("");
  const [invoice_id,setinvoice_id]=React.useState("");
  const [customer_number,setcustomer_number]=React.useState("");
  const [cust_number,setcustomer_number1]=React.useState("");
let data2={invoice_id,buisness_year,customer_number,doc_id}
function sendtodb(pred)
{

  let pd={pred}
  console.log(pd);
  axios
  .post('http://localhost:8080/HRC_Back_end/addaging',pd)
  .then(response=>{
    console.log(response.data)
  })
  .catch(error=>{
    console.log(error)
  }
  
  )

  props.update()
}
 function prediction(data)
 {
   let data4={data}
   console.log(data4)
  axios
  .post('http://127.0.0.1:5000/get_prediction',data4)
  .then(response=>{
    console.log(response.data)
    sendtodb(response.data)
  })
  .catch(error=>{
    console.log(error)
  })

 }
 const handlesearch=()=>
 {
   let data5={cust_number}
   console.log(data5)
  props.fun1(data5)
 }
  const handlepredict=()=>
  {
    const id =props.selectionModel;
const sl_no= id.map(sl =>parseInt(sl));
const data1= {sl_no}
    console.log(data1)
    axios
    .post('http://localhost:8080/HRC_Back_end/getdocid',data1)
    .then(response=>{
      console.log(response.data)
      //[654654,654654,654654654]
      prediction(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // const [selectionModel, setSelectionModel] = React.useState([]);
    console.log(props.selectionModel)
    console.log(props.length)
   return(
       <div>
    <Navbar className = "Nav1">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft:"20px"
      }}
    >

      <ButtonGroup variant="outlined" aria-label="outlined button group" style={{marginLeft:"auto"}}>
        <Button sx={buttonstyle} onClick={handlepredict}>PREDICT</Button>
        <Button sx={buttonstyle}>ANALYTICS VIEW</Button>
        <Button sx={buttonstyle} onClick={handleClickOpen}>Advance Search</Button>    
    <div>
     
    <Dialog open={open} onClose={handleClose}>
    <Box
      sx={{
        backgroundColor:"#2A3E4C", 
        display: 'flex',
        flexDirection: 'column',
      }}
      >
      <DialogTitle>AdvanceSearch</DialogTitle>
      <DialogContent>  
      <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
      <Grid item><TextField id="outlined-basic" label="Document Id" variant="outlined" margin='dense' value={doc_id} onChange={(e)=>{setDocumentId(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset', width:250 }} /></Grid>
      <Grid item><TextField m ={30} pl={10} id="outlined-basic" label="Invoice Id" variant="outlined" margin='dense' value={invoice_id} onChange={(e)=>{setinvoice_id(e.target.value)}}  style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' , width:250}} /></Grid></Grid>
      <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
      <Grid item><TextField id="outlined-basic" label="Customer Number" variant="outlined" margin='dense' value={customer_number} onChange={(e)=>{setcustomer_number(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset', width:250 }} /></Grid>
      <Grid item><TextField m ={30} pl={10} id="outlined-basic" label="Business Year" variant="outlined" margin='dense' value={buisness_year} onChange={(e)=>{setbusiness_year(e.target.value)}}  style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' , width:250}} /></Grid></Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={()=>props.fun(data2)} sx={textfield}>Search</Button>
        <Button variant="outlined" onClick={handleClose} sx={textfield}>CANCEL</Button>
      </DialogActions>
      </Box>
    </Dialog>
  </div>
   <Button onClick={()=>props.update()}><RefreshIcon/></Button>
        </ButtonGroup>
    </Box>
    <Box sx={ { alignSelf: 'center' , marginRight:'30',marginLeft:"105px"}}>
    <Grid item>
    <TextField
    style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}
      placeholder="Search Customer Number"
      size="small"
      variant="outlined"
      value={cust_number} onChange={(e)=>{setcustomer_number1(e.target.value)}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="black"  onClick={handlesearch} />
          </InputAdornment>
        ),
      }}
    />
    
  </Grid>
    </Box>
 <Box sx={{display:'flex',flexDirection:'row',marginLeft:'auto',marginRight:'auto'}}>
   <item><ADD len={props.length} up={props.update}/></item>
   <item><Edit SelectionModel={props.selectionModel} up2={props.update}/></item>
   <item><Delete SelectionModel={props.selectionModel} up1={props.update}/></item>
    </Box>


    </Navbar>
    </div>
   )

}
export default header2;