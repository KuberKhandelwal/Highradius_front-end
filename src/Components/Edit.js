import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import axios from 'axios';

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
const buttonstyle =  {
  // "& .Muibuttongroup":
  // {
    
  // },
  height:35,
  width:150,
  backgroundColor: '#283D4A',
  color: '#fff',
  '&:hover': {
    backgroundColor:"#14AFF1",
    color: '#fff',
    
    
}
};
const Edit =(props)=> {
  const [open, setOpen] = React.useState(false);
  // const [selectionModel, setSelectionModel] = React.useState([]);
  const sl_no = (props.SelectionModel[0])
  const [invoice_currency,setinvoice_currency]=React.useState("");
  const [cust_payment_terms,setcust_payment_terms]=React.useState("");
  const editData=()=>
{
  
  let data={sl_no,invoice_currency,cust_payment_terms}
  console.log(data)
  axios
   .post('http://localhost:8080/HRC_Back_end/editServlet',data)
   .then(response=>{
    console.log(response)
   })
   .catch(error=>{
     console.log(error)
   })
   props.up2()
   handleClose()
}

  console.log(props.SelectionModel)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={buttonstyle} disabled={!props.SelectionModel.length}  >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          backgroundColor:"#2A3E4C", 
          display: 'flex',
          flexDirection: 'column',
        }}
        >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>  
        <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
        <Grid item><TextField id="outlined-basic" label="USD" variant="outlined" margin='dense' value={invoice_currency} onChange={(e)=>{setinvoice_currency(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset', width:250 }} /></Grid>
        <Grid item><TextField m ={30} pl={10} id="outlined-basic" label="Customer Payment Terms" variant="outlined" margin='dense' value={cust_payment_terms} onChange={(e)=>{setcust_payment_terms(e.target.value)}}  style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' , width:250}} /></Grid></Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={editData} sx={textfield}>EDIT</Button>
          <Button variant="outlined" onClick={handleClose} sx={textfield}>CANCEL</Button>
        </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
export default Edit;