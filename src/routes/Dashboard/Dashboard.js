import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
// import { renderRoutes } from '../';

const DashboardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 100px;
  grid-template-areas: 'sidebar main' 'player player';
`;
const DashboardMain = styled.div`
  grid-area: main;
  background-color: #ededed;
`;

const DashboardPlayer = styled.div`
  grid-area: player;
  background-color: #3c3c3c;
`;

export class Dashboard extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };
  render() {
    return (
      <DashboardGrid>
        <DashboardSidebar onClick={this.handleClick} isOpen={this.state.open}>
          <Link to={'/'}>
            <DashboardSidebar.SidebarLogo />
          </Link>
          {/* {this.props.routes.map(route => (
            <DashboardSidebar.SidebarLink
              exact={route.exact}
              to={route.path}
              text={route.name}
              icon={route.icon}
              key={route.name}
            />
          ))} */}
        </DashboardSidebar>
        <DashboardMain>
          {/* {this.props.routes.map(route => (
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.name}
            />
          ))} */}

          {/* {renderRoutes(this.props.routes)} */}
        </DashboardMain>
        <DashboardPlayer />
      </DashboardGrid>
    );
  }
}

export default Dashboard;
