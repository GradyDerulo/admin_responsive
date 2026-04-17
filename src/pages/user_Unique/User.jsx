import Single from "../../components/single/Single";
/* import { singleUser } from "../../data"; */
import "./user.scss";


  export const singleUser = {
    id: 1,
    title: "Grady ",
    img: "/profile.jpg",
    info: {
      username: "Grady ",
      fullname: "Grady Manga",
      email: "derumanga@gmail.com",
      phone: "+243 854 969 505",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Grady Manga purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Grady Manga added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Grady Manga purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "Grady Manga reviewed a product",
        time: "1 month ago",
      },
      {
        text: "Grady Manga 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Grady Manga reviewed a product",
        time: "2 months ago",
      },
    ],
  };



const User = ()=> {


    return (
        <div className="user">
      <Single {...singleUser}/>
    </div>
    )
  }
  
  export default User