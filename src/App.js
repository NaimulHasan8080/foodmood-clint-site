import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import AddFood from './Pages/AddFood/AddFood';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import PrivateRoute from './routes/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute exact path="/addFood">
              <AddFood />
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders />
            </PrivateRoute>
            <Route exact path="/update/:id">
              <UpdateStatus />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
