import './App.css';
import Header from './components/pages/Header/header';
import Sidebar from './components/pages/Feed/Sidebar/Sidebar';
import Feed from './components/pages/Feed/Feed';
import Widgets from './components/pages/Feed/Widgets/Widgets';
import Login from './components/pages/Login/Login';
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? <Login/>:( 
        <div className="app-content">
              <Header />
              <div className="app-body">
                <Sidebar className="sidebar"/>
                 <Feed className="feed"/>
                <Widgets className="widget"/> 
              </div>
        </div>
     )} 
    </div>
  );
}

export default App;
