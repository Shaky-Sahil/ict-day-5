import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

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


const Courseview = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/course/view').then((response)=>{
            console.log(response)
            setCourses(response.data)
            console.log(typeof response)
        }
        )
    },[])

    const fetchCourse = () =>{
        axios.get('http://localhost:5000/course/view').then((response)=>{
            console.log(response)
            setCourses(response.data)
            console.log(typeof response)
        }
        )
    }

    const deleteCourse = (id)=>{
        const data = {_id:id}
        axios.post("http://localhost:5000/course/delete",data).then((response)=>{
            console.log(response.data)
        })
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Course Name</StyledTableCell>
            <StyledTableCell align="right">Course Description</StyledTableCell>
            <StyledTableCell align="right">Course Duration</StyledTableCell>
            <StyledTableCell align="right">Course Start Date</StyledTableCell>
            <StyledTableCell align="right">update course</StyledTableCell>
            <StyledTableCell align="right">delete course</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {courses.map((value) => (
            <StyledTableRow key={value._id}>
              <StyledTableCell align="right">{value.courseName}</StyledTableCell>
              <StyledTableCell align="right">{value.courseDesc}</StyledTableCell>
              <StyledTableCell align="right">{value.courseDuration}</StyledTableCell>
              <StyledTableCell align="right">{value.courseStartDate}</StyledTableCell>
              <StyledTableCell align="right"><Button variant='contained'>Update</Button></StyledTableCell>
              <StyledTableCell align="right">
                <Button color='warning' variant='contained' onClick={()=>deleteCourse(value._id)}>Delete</Button>
                </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Courseview
