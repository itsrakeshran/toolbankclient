import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Return from '../components/returnChip';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



export default function ToolTable({email}) {
    

    const[rows,setRows]=React.useState([]);
    const[isAdmin,setIsAdmin]=React.useState(false)

    const fetchToll=async()=>{
        let api_url='http://localhost:8000/api/transactions/byid'
        setIsAdmin(localStorage.getItem("role")==='ADMIN');
        let res=await axios.post(api_url,{email})
        setRows(res.data.tools);
    }

    React.useEffect(()=>{
        fetchToll();
    },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Tool ID</StyledTableCell>
            <StyledTableCell align="center">Issue Date</StyledTableCell>
            {
              isAdmin?<StyledTableCell align="center">Return</StyledTableCell>:''
            }
            
            {/* <StyledTableCell align="center">Remaining Days</StyledTableCell>
            <StyledTableCell align="center">Fine Amount</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.toolid}>
              {/* <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell> */}
              <StyledTableCell align="center">{row.toolId}</StyledTableCell> 
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              {
                isAdmin?<StyledTableCell align="center"><Return/></StyledTableCell>:''
              }
              
              {/* <StyledTableCell align="center">{row.quantity}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


