import {Fragment} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

function TravelDetail() {
    const {no} = useParams();
    const nav=useNavigate();
    const [TravelDetail,setTravelDetail] = useState({})
    useEffect(()=>{
        axios.get('http://localhost/travel/travel_detail_react',{
            params:{
                no:no
            }
        }).then(response =>{
            console.log(response.data)
            setTravelDetail(response.data)
        })
    },{})

    return (
        <Fragment>
            <div style={{"height":"30px"}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8"><img className="w-100 mb-4"  src={TravelDetail.poster}  style={{"height":"300px"}}/>
                        <h1 className="font-sans-serif fw-bold mb-4">🍊 {TravelDetail.title} 🍊</h1>
                        <h5 className="font-sans-serif"><b>{TravelDetail.introduction}</b></h5>
                        <p style={{"color":"darkorange"}}>{TravelDetail.tag}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>🌴 지역 </strong>: {TravelDetail.loc}</li>
                                <li className="list-group-item"><strong>🛣 주소 </strong>: {TravelDetail.addr}</li>
                                <li className="list-group-item"><strong>🛣 도로명 </strong>: {TravelDetail.road}</li>
                                <li className="list-group-item"><strong>📞 전화</strong>: {TravelDetail.tel}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TravelDetail