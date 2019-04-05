import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as SpotifyLogo } from '../../assets/spotifyLogo.svg';

const activeClassName = 'Active';
const sidebarOpenClassname = 'sidebarOpen';
const sidebarCloseClassname = 'sidebarClosed';
const DashboardSidebar = styled.div.attrs(props => {
  return {
    className: props.isOpen ? sidebarOpenClassname : sidebarCloseClassname
  };
})`
  grid-area: sidebar;
  background-color: #07080d;
  transition: width 0.5s ease-in-out;
  width: ${props => (props.isOpen ? '165px' : '85px')};
`;

const SidebarLogo = styled(SpotifyLogo)`
  color: white;
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarIcon = styled.img`
  width: 1.75em;
  height: 1.75em;
  position: relative;
  top: -0.125em;
  display: inline-block;
  vertical-align: middle;
  ${DashboardSidebar}.${sidebarOpenClassname} & {
    margin-left: 6px;
  }
  ${DashboardSidebar}.${sidebarCloseClassname} & {
    margin-left: 0px;
  }
`;

const SidebarText = styled.span`
  flex: 1;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 6px;
  
  ${DashboardSidebar}.${sidebarOpenClassname} & {
    display: block;
  }
  ${DashboardSidebar}.${sidebarCloseClassname} & {
    display: none;
  }
`;

const SidebarItem = styled(NavLink).attrs(props => {
  return {
    activeClassName: activeClassName,
    onClick: e => e.stopPropagation()
  };
})`
  position: relative;
  display: flex;
  padding: 6px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6px;
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  &.${activeClassName + '::before'} {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: green;
    display: block;
  }
  &:hover {
    cursor: pointer;
    background-color: #131118;
  }
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;
DashboardSidebar.SidebarLogo = props => <SidebarLogo {...props} />;
DashboardSidebar.SidebarLink = ({ to, exact, icon, text }) => (
  <SidebarItem to={to} exact={exact}>
    <SidebarIcon as={icon} />
    <SidebarText>{text}</SidebarText>
  </SidebarItem>
);

export default DashboardSidebar;
