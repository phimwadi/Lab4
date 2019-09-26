import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import Scottich from './Scottich';
import Ameriacn from './Ameriacn';
import Persian from './Persian';



const Cat = createStackNavigator(

  {

    Home : {screen: Home},
    Scottich : {screen: Scottich},
    Ameriacn : {screen: Ameriacn},
    Persian : {screen: Persian},



  });

const App = createAppContainer(Cat);

export default App;