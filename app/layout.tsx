import '@/styles/globals.css';
import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => (
  <html>
    <head className="h-full bg-white">
      <title>Sharry Playground</title>
      <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
    </head>
    <body className="h-full bg-gray-50">{children}</body>
  </html>
);

export default RootLayout;
