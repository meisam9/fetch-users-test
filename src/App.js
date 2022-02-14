import { Provider } from "react-redux";
import MainRouter from "./router";
import { appStore } from "./store/srote.index";


function App() {
  return (
    <Provider store={appStore}>
      <MainRouter />

    </Provider>
  );
}

export default App;
