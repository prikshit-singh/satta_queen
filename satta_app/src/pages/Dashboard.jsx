import React from 'react';
import Card from '../components/dashboard/Card';
import '../styles/dashboard.css';
function Dashboard(props) {
    return (
        <div>
         <div className='dashboardMainDiv'>
           <Card name="faridabad" />
           <Card name="ghaziabad" />
           <Card name="ghazipur_bazar" />
           <Card name="gali" />
           <Card name="disawar" />
           </div>
        </div>
    );
}

export default Dashboard;