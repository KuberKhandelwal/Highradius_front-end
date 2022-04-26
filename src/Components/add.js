import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import './component.css';
import axios from 'axios';
const textfield ={
  height:35,
  width:600,
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


const Add=(props)=> {
const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState(new Date());
const sl_no = JSON.stringify(props.len+1)
console.log(sl_no)
const [business_code,setbusiness_code]=React.useState("");
const [clear_date,setclear_date]=React.useState("");
const [customer_number,setcustomer_number]=React.useState("");
const [invoice_id,setinvoice_id]=React.useState("");
const [buisness_year,setbusiness_year]=React.useState("");
const [posting_date,setposting_date]=React.useState("");
const [document_create_date,setdocument_create_date]=React.useState("");
const [doc_id,setdoc_id]=React.useState("");
const [total_open_amount,settotal_open_amount]=React.useState("");
const [invoice_currency,setinvoice_currency]=React.useState("");
const [document_type,setdocument_type]=React.useState("");
const [posting_id,setposting_id]=React.useState("");
const [due_in_date,setdue_in_date]=React.useState("");
const [baseline_create_date,setbaseline_create_date]=React.useState("");
const [cust_payment_terms,setcust_payment_terms]=React.useState("");

const saveData=()=>
{
  let data={sl_no,business_code,clear_date,customer_number,invoice_id,buisness_year,posting_date,document_create_date,doc_id,total_open_amount,
    invoice_currency,document_type,posting_id,due_in_date,baseline_create_date,cust_payment_terms
  }
  console.log(data)
  axios
   .post('http://localhost:8080/HRC_Back_end/addServlet',data)
   .then(response=>{
    console.log(response)
   })
   .catch(error=>{
     console.log(error)
   })
   props.up()
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
    
      <Button variant="outlined" onClick={handleClickOpen} sx={buttonstyle}>
        Add
      </Button>
  
      <Dialog open={open} onClose={handleClose} maxWidth={true} mx={10}>
       
      <div className="dialog">
        <DialogTitle>ADD</DialogTitle>
        <DialogContent>
        <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
        <Grid item><TextField id="outlined-basic" label="Business Code" variant="outlined" value={business_code} onChange={(e)=>{setbusiness_code(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}/></Grid>
        <Grid item><TextField id="outlined-basic"  label="Customer Number" variant="outlined" value={customer_number} onChange={(e)=>{setcustomer_number(e.target.value)}}style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250 }} /></Grid>
        <Grid item><TextField id="outlined-basic" label='Clear Date' type="date" variant="outlined" value={clear_date} onChange={(e)=>{setclear_date(e.target.value)}}style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250 }} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Business Year" variant="outlined" value={buisness_year} onChange={(e)=>{setbusiness_year(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}/></Grid>
        </Grid>
        <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
        <Grid item><TextField id="outlined-basic" label="Document Id" variant="outlined" value={doc_id} onChange={(e)=>{setdoc_id(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic"  label="Posting Date" type="date" variant="outlined" value={posting_date} onChange={(e)=>{setposting_date(e.target.value)}}style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Document Clear Date" type="date" variant="outlined" value={document_create_date} onChange={(e)=>{setdocument_create_date(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Due Date" type="date" variant="outlined" value={due_in_date} onChange={(e)=>{setdue_in_date(e.target.value)}}style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        </Grid>
        <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
        <Grid item><TextField id="outlined-basic" label="Invoice Currency" variant="outlined" value={invoice_currency} onChange={(e)=>{setinvoice_currency(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}/></Grid>
        <Grid item><TextField id="outlined-basic" label="Document Type" variant="outlined" value={document_type} onChange={(e)=>{setdocument_type(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Posting Id" variant="outlined" value={posting_id} onChange={(e)=>{setposting_id(e.target.value)}}style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}/></Grid>
        <Grid item><TextField id="outlined-basic" label="Total Open Amount" variant="outlined" value={total_open_amount} onChange={(e)=>{settotal_open_amount(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}}/></Grid>
        </Grid>
        <Grid container direction={"row"} spacing={3} marginTop={"auto"}>
        <Grid item><TextField id="outlined-basic" label="Basline Create Date" type="date" variant="outlined"value={baseline_create_date} onChange={(e)=>{setbaseline_create_date(e.target.value)}}  style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Customer Payment Terms" variant="outlined" value={cust_payment_terms} onChange={(e)=>{setcust_payment_terms(e.target.value)}} style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>
        <Grid item><TextField id="outlined-basic" label="Invoice Id" variant="outlined" value={invoice_id} onChange={(e)=>{setinvoice_id(e.target.value)}}  style={{ backgroundColor: 'white', borderRadius: 8, padding:'offset' ,width:250}} /></Grid>

        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveData} sx={textfield}>ADD</Button>
          <Button onClick={handleClose}  sx={textfield}>CANCEL</Button>
        </DialogActions>
        </div>
      </Dialog>
      
    </div>
  );
}
export default Add;