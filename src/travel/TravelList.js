import {Fragment,useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom";
import axios from "axios";

function  TravelList() {

    const [travelList,setTravelList] = useState([]) //list
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage] = useState(0)
    const [startPage,setStartPage] = useState(0)
    const [endPage,setEndPage]=useState(0)
    const [title,setTitle]=useState('제주')
    useEffect(() => {
        axios.get('http://localhost/travel/travel_list_react',{
            params: {
                title:title,
                page:curpage
            }
        }).then(response =>{
            console.log(response.data)
            setTravelList(response.data)
            }).catch(error=>{
            console.log(error.response)
        })

        //페이지
        axios.get('http://localhost/travel/travel_page_react',{
            params:{
                title:title,
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })

    }, []);
    const findChange=(e)=>{
        setTitle(e.target.value) //데이터값 얻어오기 (글쓰기같이 데이터여러개 넘어오는 경우)
    }

    //버튼 클릭시 처리
    const findBtn=()=>{
        setCurpage(1)
        axios.get('http://localhost/travel/travel_list_react',{
            params:{
                title:title,
                page:1
            }
        }).then(response=>{
            console.log(response.data)
            setTravelList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/travel/travel_page_react',{
            params:{
                title:title,
                page:1
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(1)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        }).catch(error=>{
            console.log(error.response)
        })

    }
    const html=travelList.map((c,key)=>
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
                    <div>
                        {c.tag}
                    </div>
                </div>
            </div>
        </div>
    )

    //페이지 변경
    const pages=(page)=>{
        axios.get('http://localhost/travel/travel_list_react',{
            params:{
                title:title,
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTravelList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })

        axios.get('http://localhost/travel/travel_page_react',{
            params:{
                title:title,
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        }).catch(error=>{
            console.log(error.response)
        })
    }
    const pageChange=(page)=>{
        pages(page)

    }
    const pagePrev=()=>{
        pages(startPage-1)
    }
    const pageNext=()=>{
        pages(endPage+1)
    }
    let row = []
    if(startPage>1) {
        row.push(<li><a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}>&lt;</a></li>)
    }
    for(let i=startPage;i<=endPage;i++) {
        if(i===curpage) {
            row.push(<li className={"active"}><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        } else {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage) {
        row.push(<li><a href={"#"} onClick={()=>pageNext(endPage<totalpage?endPage+1:endPage)}>&gt;</a></li>)
    }


    return(
        <Fragment>
            <main className={"main-content"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="font-sans-serif text-primary fw-bold">
                                Course category
                            </h6>
                            <h1 className="font-sans-serif fw-bold mb-6">🍊제주 여행 코스🍊</h1>
                            <table className={"table"}>
                                <tr>
                                    <td>
                                        <input type={"text"} className={"input-sm"} size={"20"}  value={title} onChange={findChange} style={{"height":"38px","borderRadius":"10px"}}/>
                                        <input type={"button"} className={"btn btn-sm btn-primary"} value={"🔍"} onClick={findBtn} style={{"borderStyle":"none","width":"45px","height":"38px","backgroundColor":"#FDC800"}} />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {html}
                    </div>
                </div>
            <div style={{"height":"10px"}}></div>
            <div className={"row"}>
                <div className={"text-center"}>
                    <ul className="pagination">
                          {row}
                    </ul>
                </div>
            </div>
            </main>
        </Fragment>
    )
}

export default TravelList