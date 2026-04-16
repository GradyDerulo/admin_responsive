import { Link } from "react-router-dom";
import "./chartbox.scss";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    {
        name:"Page A",
        uv: 2870,
        pv: 900,
        amt:2290
    },
    {
        name:"Page B",
        uv: 6000,
        pv: 200,
        amt:7290
    },
    {
        name:"Page C",
        uv: 1890,
        pv: 4800,
        amt:2190
    },
    {
        name:"Page D",
        uv: 2000,
        pv: 900,
        amt:2290
    },
]



const ChartBox = (props)=> {
/* console.log("Props :",props); */

    return (
        <div className="chartBox">

            <div className="boxInfo">  {/* left */}
                <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                 <Link to="/" style={{ color: props.color }}>
                  View all
                 </Link>
            </div>

            <div className="chartInfo">{/* right */}
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
            <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>


                    <div className="texts">
                    <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
                        <span className="duration">this month</span>
                    </div>
            </div>
        </div>
    )
  }
  
  export default ChartBox