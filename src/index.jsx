import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from 'style/globalStyle';
import GlobalHelmet from './globalHelmet';

import appStore from './store';

import Layout from './components/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const Posts = React.lazy(() => import('./pages/Posts'));

const App = () => (
  <>
    <GlobalHelmet />
    <GlobalStyle />
    <Provider store={appStore}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </Provider>
  </>
);

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<App />, app);
