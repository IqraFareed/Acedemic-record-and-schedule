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

const EarlyEducation = ({profile , getProfileById, auth, match, ...rest
    }) => {
    const classes = useStyles();
    return (
      
      <div>
        
         <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
     
            <StyledTableCell align="right">School</StyledTableCell>
            <StyledTableCell align="right">College</StyledTableCell>
            <StyledTableCell align="right">olvels/Matric</StyledTableCell>
            <StyledTableCell align="right">alev/ FSC</StyledTableCell>
            <StyledTableCell align="right">Feild of study</StyledTableCell>
            <StyledTableCell align="right">Matric Year</StyledTableCell>
            <StyledTableCell align="right">FSc year</StyledTableCell>
            <StyledTableCell align="right">Overseas</StyledTableCell>

            </TableRow>
        </TableHead>
        <TableBody>
       
        <StyledTableRow profile>
              <StyledTableCell align="right">{profile.profile.school}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.college}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.Olevels_matricMarks}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.alevels_fscMarks}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.feildOfStudy}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.yearOfMariculatioin}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.yearOfIntermediate}</StyledTableCell>
              <StyledTableCell align="right">{profile.profile.overseasEducation}</StyledTableCell>
           
              <StyledTableCell align="right">
              </StyledTableCell>
            </StyledTableRow>
            </TableBody>
      </Table>
         </TableContainer>
        </div>
    );
};

EarlyEducation.propTypes = {
    profile : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  // auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps)( EarlyEducation);

