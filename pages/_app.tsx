import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../styles/globals.scss';
import Chatbox from '../components/Chat';
import useSWR, { SWRConfig } from "swr";
import { Layout } from 'antd';
import { useEffectOnce } from "react-use";

import { Content } from '../theme';

export default function MmogoMedia({ Component, pageProps }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
      <ThemeProvider theme={theme}>
        {
          !loading ?
              <Layout>
                  <Content className="site-layout">
                      <div className="site-layout-background">
                          <Component {...pageProps} />
                      </div>
                  </Content>
              </Layout> :
              <div>Loading...</div>
        }
      </ThemeProvider>
    );
}