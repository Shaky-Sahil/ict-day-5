import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const Addcourse = () => {
    const {register,handleSubmit} = useForm();
    const [result,setResult] = useState([]);
    const createCourse = (val)=>{
        axios.post("http://localhost:5000/course/create",val).then((response)=>{
            console.log(response);
            alert("course created successfully")
            setResult(response.data)
            console.log(result)
        })
    }
  return (
    <div>
      <Typography variant='h3'>Add course</Typography>
      <TextField name='courseName' {...register('courseName')} variant='outlined' label='CourseName'></TextField><br/>
      <TextField name='courseDesc' {...register('courseDesc')} variant='outlined' label='CourseDesc'></TextField><br/>
      <TextField name='courseDuration' {...register('courseDuration')} variant='outlined' label='CourseDuration'></TextField><br/>
      <TextField name='courseStartDate' {...register('courseStartDate')} variant='outlined' label='CourseStartDate' type='date'></TextField><br/>
      <Button onClick={handleSubmit(createCourse)} variant='contained' color='success'>submit</Button>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Course Name</StyledTableCell>
            <StyledTableCell align="right">Course Description</StyledTableCell>
            <StyledTableCell align="right">Course Duration</StyledTableCell>
            <StyledTableCell align="right">Course Start Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <StyledTableRow>
              <StyledTableCell align="right">{result.courseName}</StyledTableCell>
              <StyledTableCell align="right">{result.courseDesc}</StyledTableCell>
              <StyledTableCell align="right">{result.courseDuration}</StyledTableCell>
              <StyledTableCell align="right">{result.courseStartDate}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Addcourse
