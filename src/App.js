import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// Material UI Components
import {
  MuiThemeProvider, 
  RaisedButton, 
  AppBar, 
  Snackbar, 
  Dialog, 
  FlatButton, 
  CircularProgress, 
  IconButton, 
  IconMenu, 
  MenuItem, 
  Checkbox,
} from 'material-ui';

// Theme
import {deepOrange500}  from 'material-ui/styles/colors';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
// Icons
import MoreVertIcon           from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose        from 'material-ui/svg-icons/navigation/close';
import ActionFavorite         from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder   from 'material-ui/svg-icons/action/favorite-border';

// Adds onTouchTap property to components
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// The muiTheme we apply to MuiThemeProvider
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class App extends Component {
  constructor(props, context) {
      super(props, context);

      // "open" state keeps track of our Dialog box
      // changing the state to open will show the modal 
      // changing it to close will close the modal

      // this is achieved through setting the Dialog open property to our state via <Dialog open={this.state.open}>
      // then handleRequestClose() or handleRequestOpen() can be called to change the state 
      this.state = {
          open: false,
          tickets: []
      };
  }

  componentDidMount(){

    fetch ('http://localhost/wda_assignmentt/public/api/tickets')
    .then (results => {
      return results.json();
    }).then(json => {
      console.log(json)
      this.setState({
        tickets: json
      })
    })
  }

  handleRequestClose() {
      this.setState({
          open: false,
      });
  }

  handleRequestOpen() {
      this.setState({
          open: true,
      });
  }

  render() {
  
  const name = this.props.greetTarget;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>

            <AppBar title=""
              showMenuIconButton={false}
                iconElementRight={
                <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                    }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
              }/>
              <div className="container">
                <div>
                    <h2>Ticket List</h2>
                </div>
            </div>
            
              <TableExampleSimple rows={this.state.tickets}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

const TableExampleSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Ticket ID</TableHeaderColumn>
        <TableHeaderColumn>First Name</TableHeaderColumn>
        <TableHeaderColumn>Last Name</TableHeaderColumn>
        <TableHeaderColumn>Operating Systems</TableHeaderColumn>
        <TableHeaderColumn>Software Issue</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.rows.map(data => (
        <TableRow key={data.display_id}>
          <TableRowColumn>{data.display_id}</TableRowColumn>
          <TableRowColumn>{data.user.first_name}</TableRowColumn>
          <TableRowColumn>{data.user.last_name}</TableRowColumn>
          <TableRowColumn>{data.os_info}</TableRowColumn>
          <TableRowColumn>{data.software_issue}</TableRowColumn>
          <TableRowColumn>{data.description}</TableRowColumn>
          <TableRowColumn>{data.ticket_status}</TableRowColumn>
        </TableRow>
      ))}
      
    </TableBody>
  </Table>
);