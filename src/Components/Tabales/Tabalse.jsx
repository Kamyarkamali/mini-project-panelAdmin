import React, { useEffect } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Redux
import { addComments } from '../../Fetchare/comments';
import { useDispatch,useSelector } from 'react-redux';

function Tabalse() {
    const state=useSelector((state)=>state.comments.comments);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(addComments())
    },[dispatch])

 
    
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    
      return (
        <TableContainer component={Paper}>
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHead>
              <TableRow>
                <TableCell>نام</TableCell>
                <TableCell align="right">نام کاربری</TableCell>
                <TableCell align="right">ایمیل</TableCell>
                <TableCell align="right">کامنت</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((row) => (
                <TableRow
                  key={row.name}
                  className="bg-white divide-y divide-gray-200"
                >
                  <TableCell
                  component="th"
                  scope="row"
                  className="px-6 py-4 whitespace-nowrap"
                  >
                  </TableCell>
                  <TableCell align="right" className="px-6 py-4 whitespace-nowrap">{row.userName}</TableCell>
                  <TableCell align="right" className="px-6 py-4 whitespace-nowrap">{row.email}</TableCell>
                  <TableCell align="right" className="px-6 py-4 whitespace-nowrap">{row.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

export default Tabalse;