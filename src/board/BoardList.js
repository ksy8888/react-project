import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function BoardList() {
    const [boardList,setBoardList]=useState([])
    const [curpage,setCurPage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const[title,setTitle]=useState('')
    useEffect(() => {
        axios.get('http://localhost/board/board_list',{
            params:{
                page:curpage
            }
        }).then(response =>{
            console.log(response.data)
            setBoardList(response.data)
        })
        //page
        axios.get('http://localhost/board/board_page',{
            params:{

                page:curpage
            }
        }).then(response=>{
            console.log(response.data)

            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })

    }, []);

    const html=boardList.map((i,key)=>{
        return(

            <tr>
                <td width={"10%"} className={"text-center"} key={i.no}>{i.no}</td>
                <td width={"45%"} className={"text-center"}><NavLink to={"/board/board_detail/"+i.no}  style={{"color":"darkorange"}}>{i.subject}</NavLink></td>
                <td width={"15%"} className={"text-center"}>{i.name}</td>
                <td width={"20%"} className={"text-center"}>{i.regdate}</td>
                <td width={"10%"} className={"text-center"}>{i.hit}</td>
            </tr>
        )
    })
    const pages=(page) =>{
        axios.get('http://localhost/board/board_list',{
            params:{
                title:title,
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setBoardList(response.data)
        }).catch(error=>{
            console.log(error.response)
        })
        axios.get('http://localhost/board/board_page',{
            params:{
                title:title,
                page:page
            }
        }).then(response=>{
            console.log(response.data)

            setCurPage(response.data.curpage)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
        }).catch(error=>{
            console.log(error.response)
        })
    }
    const pageChange=(page) =>{
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
            <div style={{"height":"30px"}}></div>
            <main className="main-content">
                <div className={"container"} style={{"border":"1px solid black","borderRadius":"25px" }}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <td>
                                <h3 className="font-sans-serif fw-bold" style={{"textAlign":"center"}}>🍊 자유게시판 🍊</h3>
                            </td>
                        </tr>
                        <tr style={{"textAlign":"right"}}>
                            <td style={{"borderStyle":"none"}}>
                                <NavLink to={"/board/board_insert"}><input type={"button"} className={"btn btn-sm btn-primary"} value={"✏"} style={{"borderStyle":"none","width":"45px","height":"38px","backgroundColor":"#FDC800"}}/></NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className={"table"} style={{"width":"100%"}}>
                        <tbody>
                        <tr className={"table-warning"}>
                            <th width={"10%"} className="text-center">번호</th>
                            <th width={"45%"} className="text-center">제목</th>
                            <th width={"15%"} className="text-center">이름</th>
                            <th width={"20%"} className="text-center">작성일</th>
                            <th width={"10%"} className="text-center">조회수</th>
                        </tr>
                        {html}
                        </tbody>

                    </table>
                    <div className={"row"}>
                        <div className={"text-center"}>
                            <ul className="pagination">
                                {row}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default  BoardList
