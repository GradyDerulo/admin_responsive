import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieCartBox from "../../components/pieCartBox/PieCartBox";
import TopBox from "../../components/topBox/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import "./home.scss";


/* Ils ont un padding qui vient dans global.scss appliquer a leur parent contentContainer */
function Home() {

    return (
        <div className="home">
            <div className="box box1" > <TopBox /> </div>
            <div className="box box2"><ChartBox {...chartBoxUser}/></div> {/* TinyLineChart */}
             <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4"><PieCartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    )
  }
  
  export default Home