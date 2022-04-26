import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Header2 from './header2'
import axios from 'axios';

const datagridSx = {
  backgroundColor: "#283D4A",
    border: 5,
    borderRadius:0,
    borderColor: '#243742',
    '& .MuiDataGrid-cell':{
          width:10
    },
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main'},

    "& .MuiDataGrid-row": {
     color:"white",
     backgroundColor:"#2D4250",
     maxHeight: '1 !important',
     fontSize: 16
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#283D4A",
    color: "white",
    fontSize: 12,
  },
  "& .MUiDataGrid-CheckBox":
  {
    backgroundColor:"white"
  }

};

const theme = createTheme({
 color: "white",
 borderColor:"white"
});
const columns = [
  { field: 'sl_no',headerName:'Sl no', width:60},
  { field: 'business_code',headerName:'Business Code',width:100,height:100},
  { field: 'customer_number',headerName:'Customer Number',width:110,height:100},
  { field: 'clear_date',headerName:'Clear Date',width:110,height:100},
  { field: 'buisness_year',headerName:'Business Year',width:110,height:120},
  { field: 'doc_id',headerName:'Document ID',width:120,height:120},
  { field: 'document_create_date',headerName:'Document Create Date',width:175,height:120},
 // { field: 'document_create_date1',headerName:'DOCUMENT_CREATE_DATE 1',width:180,height:120},
  { field: 'due_in_date',headerName:'Due In Date',width:110,height:120},
  { field: 'invoice_currency',headerName:'Invoice Currency',width:140,height:120},
  { field: 'document_type',headerName:'Document Type',width:130,height:120},
  { field: 'posting_id',headerName:'Posting ID',width:100,height:120},
 // { field: 'area_business',headerName:'AREA_BUSINESS',width:130,height:120},
  { field: 'total_open_amount',headerName:'Total Open Amount',width:165,height:120},
  { field: 'baseline_create_date',headerName:'Basline Create Date',width:175,height:120},
  { field: 'cust_payment_terms',headerName:'Customer Payment Terms',width:170,height:120},
  { field: 'invoice_id',headerName:'Invoice Id',width:100,height:120},
 // { field: 'is_open',headerName:'IS_OPEN',width:80,height:120},
  { field: 'aging_bucket',headerName:'Aging Bucket',width:110,height:120},
 // { field: 'is_deleted',headerName:'IS_Delete',width:80,height:120},
  

];

const DataGrid1 = () => {
  const [tableData, setTableData] = useState([])
 const[reduce,forceUpdate]=React.useReducer(x=>x+1,0)
  const [pageSize, setPageSize] = React.useState(10);
  const [selectionModel, setSelectionModel] = React.useState([]);
  console.log(tableData);

  useEffect(() => {
    // fetch("http://localhost:8080/HRC_Back_end/fetchServlet")
    //   .then((data) => data.json())
   
    axios
       .get('http://localhost:8080/HRC_Back_end/fetchServlet')
       .then(response=>{
        setTableData(response.data)
       })
       .catch(error=>{
         console.log(error)
       })
      
     

  }, [reduce])
  function getData(result)
  {  console.log(result)
    axios
    .post('http://localhost:8080/HRC_Back_end/advanceSearch',result)
    .then(response=>{
     setTableData(response.data)
    })
    .catch(error=>{
      console.log(error)
    })

  }
  function getData1(result)
  {  console.log(result)
    axios
    .post('http://localhost:8080/HRC_Back_end/serach',result,{
      headers: {
        'Access-Control-Allow-Origin': '*'}}
      )
    .then(response=>{
     setTableData(response.data)
    })
    .catch(error=>{
      console.log(error)
    })

  }
  // function getprediction(r)
  // {  console.log(result)
  //   axios
  //   .post('http://localhost:8080/HRC_Back_end/advanceSearch',result)
  //   .then(response=>{
  //    setTableData(response.data)
  //   })
  //   .catch(error=>{
  //     console.log(error)
  //   })
  // }
 

  return (
    <ThemeProvider theme={theme}>
    <Header2 selectionModel={selectionModel} length={tableData.length} fun={getData} fun1={getData1} update={forceUpdate} />
    <div style={{ height: 470, width: '100%' , backgroundColor: "#11202A" , color: "white"}}>
      <DataGrid
       getRowId={(row) => row.sl_no}
        rows={tableData}
        columns={columns}
        sx={datagridSx}
        theme={theme}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10,30,100]}
        pagination
        checkboxSelection
        density='compact'
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
     
    </div>
    </ThemeProvider>
  )
}

export default DataGrid1