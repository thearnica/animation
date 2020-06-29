import * as React from 'react';
import { Router } from 'react-router';

const appHistory = require('history').createBrowserHistory();

export const RouterProvider: React.FC = ({ children }) => <Router history={appHistory}>{children}</Router>;
