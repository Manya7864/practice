import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Components/Loader";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";
import { useContext } from "react";
import { AuthContext } from "../Context/AppContext";

function Dashboard() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const {token,isAuth,logoutUser}=useContext(AuthContext)
  console.log(token,isAuth)

  const handleFilter=(event)=>{
   
    setFilter(event.target.value)
  }
  const getData=(filter)=>{
    setLoading(true);
    // setPage(1)
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${filter}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("RESPONSE FROM SERVER",res)
        setTotalPages(res.totalPages)
        setData(res.data);
        setLoading(false);
      });
  }


  useEffect(() => {
    getData(filter)
  }, [page,filter]);

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>logoutUser()} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" onChange={handleFilter}>
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading == true ? <Loader /> : <RestaurantTable data={data} />}
      </div>
      <br />
      <div data-testid="pagination-container">
      <Pagination totalPages={totalPages} currentPage={page} handlePageChange={(page)=>setPage(page)}/>
      
      {/* Pagination */}
      
      
      </div>
    </div>
  );
}

export default Dashboard;
