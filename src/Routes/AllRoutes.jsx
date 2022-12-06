import { Route, Routes } from "react-router-dom";
import  Home from "../Routes/Home"
import Dashboard from "../Routes/Dashboard"
import RestaurantPage from "../Routes/RestaurantPage"
import Login from "../Routes/Login"
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return <div>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute>
          
          <Dashboard />
          </PrivateRoute>
        
        } />
        <Route path="/restaurants/:id" element={<PrivateRoute><RestaurantPage /></PrivateRoute>} />
      </Routes>
    
    {
      /* Add Home, Login dashboard and restaurant pages */
    
    
    }
  
  </div>;
}

export default AllRoutes;
