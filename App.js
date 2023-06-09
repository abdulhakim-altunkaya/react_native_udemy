import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen1 from "./src/screens/HomeScreen1";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListItems from "./src/screens/ListItems";
import ListItems5 from "./src/screens/ListItems5";
import InitialScreen from "./src/screens/InitialScreen";
import InitialScreen2 from "./src/screens/InitialScreen2";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorScreen1 from "./src/screens/ColorScreen1";
import ColorAdjust from "./src/screens/ColorAdjust";
import NewComponents from "./src/screens/NewComponents";
import NewList from "./src/screens/NewList";
import NewButton from "./src/screens/NewButton";
import NewImg from "./src/screens/NewImg";
import NewCounter from "./src/screens/NewCounter";
import NewColor from "./src/screens/NewColor";
import NewBoxColor from "./src/screens/NewBoxColor";
import NewReducer from "./src/screens/NewReducer";
import NewInput from "./src/screens/NewInput";
import NewInput2 from "./src/screens/NewInput2";
import XBoxScreen from "./src/screens/XBoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Home1: HomeScreen1,
    Home2: NewComponents,
    Components: ComponentsScreen,
    List: ListItems,
    List5: ListItems5,
    Initial: InitialScreen,
    Initial2: InitialScreen2,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    ColorScreen1: ColorScreen1,
    ColorAdjust: ColorAdjust,
    NewListRoute: NewList,
    NewScreens: NewButton,
    NewImages: NewImg,
    Counter: NewCounter,
    Colors: NewColor,
    ColorsAdjust: NewBoxColor,
    Reduce: NewReducer,
    Input: NewInput,
    Input2: NewInput2,
    CSSBox: XBoxScreen,
  },
  {
    initialRouteName: "Initial2",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
