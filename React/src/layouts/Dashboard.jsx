import React from 'react'
import CarList from '../pages/CarList'
import AddGarage from '../pages/AddGarage'
import { Grid} from 'semantic-ui-react'
import { Route } from "react-router";
import FirstPage from '../pages/FirstPage'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row mx-5 my-5>
                    <Grid.Column width={4} className="my-3 mt-5" >
                    </Grid.Column>
                    <Grid.Column width={12} className="my-3 mt-1" >
                       <Route exact path="/" component={FirstPage} />
                       <Route path="/car/status" component={CarList} />
                       <Route path="/car/park"   component={AddGarage} />
                       <Route path="/car/leave/{id}" component={CarList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
