import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";


function Home() {
    const [boardHitList, setBoardHitList] = useState([])
    const [travelHitList, setTravelHitList] = useState([])
    const [travelList,setTravelList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost/board/board_hit',{

        }).then(res=>{
            console.log(res.data)
            setBoardHitList(res.data)
        }).catch(error=>{
            console.log(error.response)
        })

        //
        axios.get('http://localhost/travel/travel_hit',{

        }).then(res=>{
            console.log(res.data)
            setTravelHitList(res.data)
        })

        axios.get('http://localhost/travel/travel_rand',{

        }).then(res=>{
            console.log(res.data)
            setTravelList(res.data)
        })

    },[]);
    const html=boardHitList.map((i,key)=>{
        return (
        <tr>
            <td className="mb-3"><i className="fas fa-check text-info me-2"></i>{i.no}</td>
            <td className="mb-3"><i className="fas fa-check text-info me-2"></i>{i.subject}</td>
            <td className="mb-3"><i className="fas fa-check text-info me-2"></i>{i.content}</td>
            <td className="mb-3" style={{"textAlign":"center"}}><i className="fas fa-check text-info me-2"></i>{i.name}</td>
            <td className="mb-3" style={{"textAlign":"center"}}><i className="fas fa-check text-info me-2"></i>{i.hit}</td>
        </tr>
        )
    })
    const html2 = travelHitList.map((t,key)=>{
        return (
            <tr>
                <td className="mb-3"><i className="fas fa-check text-info me-2"></i>{t.title}</td>
                <td className="mb-3" style={{"textAlign":"center"}}><i className="fas fa-check text-info me-2"></i>{t.hit}</td>
            </tr>
        )
    })
    const list=travelList.map((c,key)=>
        <div className="col-md-3 mb-4" key={c.no}>
            <div className="card h-100" style={{"width": "250px", "height": "155px"}}>
                <div>
                    <NavLink to={"/travel/travel_detail/"+c.no}>
                        <img src={c.poster}  style={{"width": "250px", "height": "155px"}} />
                    </NavLink>
                </div>

                <div className="card-body">
                    <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">
                        <NavLink to={"/travel/travel_detail/"+c.no}>{c.title}</NavLink>
                    </h5>
                    <div className={"word"}>
                        {c.tag}
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <Fragment>

        <div className="container">
            <div className="row">
                <h1 className="text-center mb-5"> Top Featured Courses</h1>
                <div className="col-md-4" style={{"width":"559px"}}>
                    <div className="card">
                        <div className="text-center"><span className="badge bg-black fw-normal text-uppercase bg-secondary">Hot 게시판</span></div>
                        <div className="card-body" style={{"height":"339px"}}>
                            <div className="d-flex justify-content-start text-secondary"><span className="font-sans-serif fw-bold">현재 가장 Hot한 게시글!</span></div>
                            <p className="text-muted mb-2 my-md-3">실시간 조회수가 가장 높은 순서입니다.</p>
                            <hr className="border border-1" />
                            <tbody>
                            <tr className={"table-warning"}>
                                <th width={"7%"} className="text-center">번호</th>
                                <th width={"20%"} className="text-center">제목</th>
                                <th width={"38%"} className="text-center">내용</th>
                                <th width={"10%"} className="text-center">작성자</th>
                                <th width={"10%"} className="text-center">조회수</th>
                            </tr>
                            {html}
                            </tbody>

                            <div className="d-grid"> <a className="btn btn-lg btn-primary" href="/board/board_list" style={{"marginTop":"11px"}}>더보기</a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4" style={{"width":"574px"}}>
                    <div className="card">
                        <div className="text-center"><span className="badge bg-black fw-normal text-uppercase bg-secondary">Hot 제주 여행지</span></div>
                        <div className="card-body">
                            <div className="d-flex justify-content-start text-secondary"><span className="font-sans-serif fw-bold">현재 가장 hot한 여행지</span></div>
                            <p className="text-muted mb-2 my-md-3">실시간 조회수가 가장 높은 순서입니다.</p>
                            <hr className="border border-1" />
                            <tbody>
                            <tr className={"table-warning"}>
                                <th width={"45%"} className="text-center">장소명</th>
                                <th width={"10%"} className="text-center">조회수</th>
                            </tr>
                            {html2}
                            </tbody>

                            <div className="d-grid"> <a className="btn btn-lg btn-primary" href="/travel/travel_list" style={{"marginTop":"11px"}}>더보기</a></div>
                        </div>
                    </div>
                </div>

                <div style={{"height":"20px"}}></div>
                <div className="container">
                    <div className="row">
                        {list}
                    </div>
                </div>

            </div>
        </div>
        </Fragment>

    )
}
export default Home