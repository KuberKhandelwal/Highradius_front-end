import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
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
const Delete = (props) => {
  const id =props.SelectionModel
  const sl_no= id.map(sl =>parseInt(sl));
  console.log(sl_no)
  const [open, setOpen] = React.useState(false);
  //const [state, setState] = React.useState({status:" "});

  const deletefun =()=>
  {
    let data={sl_no}
    console.log(data)
   
    axios
     .post('http://localhost:8080/HRC_Back_end/deleteServlet?sl_no=',{sl_no})
     .then(response=>{
      console.log(response)
     })
     .catch(error=>{
       console.log(error)
     })
     props.up1()
     handleClose()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={buttonstyle} disabled={!props.SelectionModel.length} >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} >
      <Box
      sx={{
        backgroundColor:"#2A3E4C", 
        display: 'flex',
        flexDirection: 'column',
      }}
      >
      <DialogTitle color='white'>Delete Records ?</DialogTitle>
      <DialogContent> 
      <DialogContentText color='white' >
      Are you sure you want to delete these records[s] ?
      </DialogContentText> 
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} sx={textfield}>Cancel</Button>
        <Button variant="outlined" onClick={deletefun} sx={textfield}>Delete</Button>
      </DialogActions>
      </Box>
      </Dialog>
    </div>
  );
}
export default Delete;