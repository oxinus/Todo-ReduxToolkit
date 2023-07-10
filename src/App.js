import { ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { TodoContainer } from "./styles/styles";
import {rootTheme} from './themes/themes'


function App() {

  return (
      <ThemeProvider theme={rootTheme}>
        <CssBaseline />
        <TodoContainer>
          <AddTodo />
          <Todos />
        </TodoContainer>
      </ThemeProvider>
  );
}

export default App;
