import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Quiz from './screens/Quiz';
import QuizIndex from './screens/QuizIndex';
import HomeScreen from './screens/HomeScreen';
const MainStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerShown: false
    }
  },
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizess',
      headerShown: false
    }
  }
});
export default createAppContainer(MainStack);
