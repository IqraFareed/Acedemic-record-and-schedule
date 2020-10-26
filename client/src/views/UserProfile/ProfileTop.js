import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";
import GridItem from "../../components/Grid/GridItem";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getProfileById } from "../../actions/profile";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProfileTop = ({profile , getProfileById, auth, match, ...rest
    }) => {
    const classes = useStyles();
    return (
      
      <div>
        
         <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
     
            <StyledTableCell align="right">Father Name</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Domicile</StyledTableCell>
            <StyledTableCell align="right">Nationality</StyledTableCell>
            <StyledTableCell align="right">CNIC</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">District</StyledTableCell>
            <StyledTableCell align="right">city</StyledTableCell>

            </TableRow>
        </TableHead>
        <TableBody>
       
        <StyledTableRow profile>
              <StyledTableCell align="right">{profile.profile.fatherName}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.phone_number}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.domicile}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.Nationality}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.cnic}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.address.area}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.address.district}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.address.city}</StyledTableCell>
           
              <StyledTableCell align="right">
              </StyledTableCell>
            </StyledTableRow>
            </TableBody>
      </Table>
         </TableContainer>
        </div>
    );
};

ProfileTop.propTypes = {
    profile : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  // auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps)(ProfileTop);

