import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Add from './components/Add'
import Watched from './components/Watched'
import WatchList from './components/WatchList'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' component={WatchList} exact/>
          <Route path='/watched' component={Watched}/>
          <Route path='/add' component={Add}/>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
