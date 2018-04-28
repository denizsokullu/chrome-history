import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import RaisedButton from "material-ui/RaisedButton";

// import TabsExampleSimple from '../../internal/components/tabs';
// import { PreviewWindow } from '../../internal/components/previewWindow/previewWindow';
// import PreviewWindow from '../../internal/components/previewWindow/previewWindow';
// import { SideBarRight, SideBarLeft } from '../../internal/components/sideBar/sideBar';
// import TopBar from '../../internal/components/topBar/topBar';
// // import StyleCard from '../../internal/components/styleCard/styleCard';
// import DropzoneContainer from '../../internal/components/dropzone/dropzoneContainer';
// import Viewer from '../../internal/components/viewer/viewer';
//
// import KeyController from '../../internal/components/keyController/keyController';

import { TabBar, Tab } from 'rmwc';
import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle
} from 'rmwc/Toolbar';


import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

import {
  List,
  ListItem,
  ListItemText
} from 'rmwc/List';

import { Chart } from 'react-google-charts';

export default class Base extends Component {
  render() {
    return (
        <Router forceRefresh={true}>
          <div className="ic-root">
            <main className="ic-content">
              <Switch>
                <Route exact={ true } path="/" render={ () => {
                  return (
                    <div>
                      <Toolbar>
                        <ToolbarRow>
                          <ToolbarTitle>Toolbar</ToolbarTitle>
                        </ToolbarRow>
                      </Toolbar>
                      <TabBar
                        onChange={evt => this.setState({'activeTabIndex4': evt.target.value})}
                      >
                        <Tab>Numbers</Tab>
                        <Tab>Memories</Tab>
                      </TabBar>

                      <Drawer permanent>
                        <DrawerHeader>
                          DrawerHeader
                        </DrawerHeader>
                        <DrawerContent>
                          <ListItem>
                            <ListItemText>Cookies</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Pizza</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Icecream</ListItemText>
                          </ListItem>
                        </DrawerContent>
                      </Drawer>
                      <Chart
                        chartType="ScatterChart"
                        data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
                        options={{}}
                        graph_id="ScatterChart"
                        width="100%"
                        height="400px"
                        legend_toggle
                      />
                    </div>
                      )
                } } />
              </Switch>
            </main>
          </div>
        </Router>
    );
  }
}
