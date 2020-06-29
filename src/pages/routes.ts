import { Main } from 'pages/Main';

export const ROUTES = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
].sort((a, b) => b.path.localeCompare(a.path));
