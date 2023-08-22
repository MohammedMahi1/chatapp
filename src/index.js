import React from 'react';
import ReactDOM from 'react-dom/client';
import './res/style/style.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './res/view/Dashboard';
import Chat from './res/view/Chat';
import Auth from './res/view/Auth';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
const route = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>,
    children:[
      {
        path:'/chat',
        element:<Chat/>
      }
    ]
  },
  {
    path:'/auth',
    element:<Auth/>
  }
])
const { palette } = createTheme();
const theme = createTheme({
  palette: {
    mode: 'light',
    secondary:{
      main: '#8a3ff3',
    },
    purper: palette.augmentColor({
      color: {
        main: "#8a3ff3"
      },
      
    })
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <ThemeProvider theme={theme}><CssBaseline />
        <RouterProvider router={route} />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
