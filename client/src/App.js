import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


import Dashboard from './layouts/Dashboard.js';
import Login from './layouts/Login';
import Register from './layouts/Register';
// import Applicant from './layouts/Applicant';
//import AddResearchPapers from './layouts/AddResearchPapers.js'
// import AddEducation from './views/Faculty/AddEducation.js'

//import AddExperience from './layouts/AddExperience.js'`
import AddInfo from './layouts/AddInfo.js'
import EditProfile from './layouts/EditProfile.js'
//import Calendar from './layouts/Calendar.js'
// import Profile from './layouts/Profile.js'
 import Profile from './views/UserProfile/Profile'
import Profiles from './layouts/Profiles.js'
import Calendar from './layouts/Calendar.js'


import store from './utils/store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import PrivateRoute from './components/Routing/PrivateRoute';
// import ApplicantPrivateRoute from './components/Routing/ApplicantPrivateRoute';

import './assets/scss/App.scss';
//import AddInfo from './views/Faculty/AddInfo.js';

import {ScheduleComponent} from '@syncfusion/ej2-react-schedule';

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser()]);

  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
           
            {/* <FacultyPrivateRoute exact path='/dashboard' component={Faculty} /> */}
            {/* <ApplicantPrivateRoute path='/applicant' component={Applicant} /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
             {/* <Route  path="/admin" component={Admin}></Route> */}
             <Route exact path="/profiles" component={Profiles}></Route>
              <Route exact path="/profile/:id" component={Profile}></Route>
              
             
              <Route
                exact
                path="/add-information"
                component={AddInfo}
              ></Route>
              <Route
                exact
                path="/edit-profile"
                component={EditProfile}
              ></Route>
           
              <Route
                exact
                path="/calendar"
                component={Calendar}
              ></Route>
             
            
            <Redirect from='/' to='/login' />
            
          </Switch>
          
        </Router>
      </Provider>
    </Fragment>

    
   
  );
};

export default App;
