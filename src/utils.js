export function createData(
  
    sl_no,
    business_code,
  cust_number,
  clear_date,
  business_year,
  doc_id,
document_create_date,
document_create_date1,
 due_in_date,
  invoice_currency,
  document_type,
 posting_id,
 area_business,
total_open_amount,
baseline_create_date,
cust_payment_terms,
invoice_id,
is_open,
aging_bucket,
is_delete,
  ) {
    return {
        sl_no,
    business_code,
  cust_number,
  clear_date,
  business_year,
  doc_id,
document_create_date,
document_create_date1,
 due_in_date,
  invoice_currency,
  document_type,
 posting_id,
 area_business,
  total_open_amount,
baseline_create_date,
cust_payment_terms,
business_year,
invoice_id,
is_open,
aging_bucket,
is_delete,
    };
  }
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  export function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  export function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  export function formatDate(date) {
    const spaceRemovedDate = date.split(" ");
    const formattedDate = spaceRemovedDate[0].replace(/-/g, "/");
    return formattedDate;
  }