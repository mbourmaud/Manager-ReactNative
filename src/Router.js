import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" initial />
            </Scene>
               
            <Scene key="main">
                <Scene 
                    key="employeeList"
                    onRight={() => Actions.employeeCreate()} 
                    rightTitle="Add" 
                    component={EmployeeList} 
                    title="Employees"
                    initial
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Employee"
                />
            </Scene>
                
        </Router>
    );
};

export default RouterComponent;
