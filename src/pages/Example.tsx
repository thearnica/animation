import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import { LazyBoundary } from 'react-imported-component';
import { RouteComponentProps, Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { ApplicationProviders } from 'core/containers/ApplicationProviders';
import { ROUTES } from 'pages/routes';

const Null = () => (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>404</div>
      <h1>Page not found</h1>
    </div>
  </>
);

const Loading = () => <div style={{ textAlign: 'center', height: '100vh' }}>Loading</div>;

const ExampleBase: React.SFC<RouteComponentProps> = ({ history }) => (
    <Router history={history}>
      <LazyBoundary fallback={<Loading />}>
        <Switch>
          {ROUTES.map((route: any) => <Route {...route} key={route.path} />)}
          <Route path="*" component={Null} />
        </Switch>
      </LazyBoundary>
    </Router>
);

const Example = () => (
  <ApplicationProviders>
    <Route component={ExampleBase} />
  </ApplicationProviders>
);

export default hot(Example);
