import * as React from 'react';

import { RouterProvider } from './Router';

export const ApplicationProviders: React.FC = ({ children }) => (
      <RouterProvider>{children}</RouterProvider>
);
