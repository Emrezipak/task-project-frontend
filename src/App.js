import Navbar from "./component/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import UserSignUpPage from './pages/UserSignUpPage'
import UserLoginPage from "./pages/UserLoginPage";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage"
import TaskPage from "./pages/TaskPage";
import TaskListPage from "./pages/TaskListPage";
import UserTaskListPage from "./pages/UserTaskListPage";
import { ToastContainer } from "react-toastify";
import UserListPage from "./pages/UserListPage";
import { useSelector } from "react-redux";
export const App = (props) => {
  const isLogin=useSelector((store)=>store.isLogin)
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {isLogin &&
          <Route path="/users" component={UserListPage} />
        }

        <Route path="/add-task/:userEmail" component={TaskPage} />
        {isLogin &&
          <Route path="/taskList" component={TaskListPage} />
        }
        {isLogin &&
          <Route path="/userTasks" component={UserTaskListPage} />
        }
        {!isLogin &&
          <Route path="/login" component={UserLoginPage} />
        }

        {!isLogin &&
          <Route path="/signup" component={UserSignUpPage} />
        }
        <Redirect to="/" />
      </Switch>
    </div>
  )
}
export default App;
