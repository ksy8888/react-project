import {Fragment, useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function BoardDetail() {
    const {no} = useParams()
    const nav = useNavigate()
    const [boardDetail, setBoardDetail] = useState({})
    useEffect(()=>{
        axios.get('http://localhost/board/board_detail',{
            params:{
                no:no
            }
        }).then(response=>{
            console.log(response.data)
            setBoardDetail(response.data)
        })
    }, []);
    return (
        <Fragment>
            <div style={{"height":"30px"}}></div>
        <main className="main-content">
            <div className={"container"} style={{"border": "1px solid black", "borderRadius": "25px"}}>
                <h2 className="sectiontitle" className="font-sans-serif fw-bold" style={{"textAlign":"center"}}>내용보기</h2>
                <div style={{"height":"20px"}}></div>
                <table className="table">
                    <tbody>
                    <tr>
                        <th width={"20%"} className="text-center">번호</th>
                        <td width={"30%"} className="text-center">{boardDetail.no}</td>
                        <th width={"20%"} className="text-center">작성일</th>
                        <td width={"40%"} className="text-center">{boardDetail.regdate}</td>
                    </tr>
                    <tr>
                        <th width={"20%"} className="text-center">이름</th>
                        <td width={"30%"} className="text-center">{boardDetail.name}</td>
                        <th width={"20%"} className="text-center">조회수</th>
                        <td width={"40%"} className="text-center">{boardDetail.hit}</td>
                    </tr>
                    <tr>
                        <th width={"20%"} className="text-center">제목</th>
                        <td colSpan={"3"}>{boardDetail.subject}</td>
                    </tr>
                    <tr>
                        <td colSpan={"4"} className="text-left" valign="top" height="200">
                                <pre style={{
                                    "whiteSpace": "pre-wrap",
                                    "backgroundColor": "white",
                                    "border": "none"
                                }}>{boardDetail.content}</pre>
                        </td>
                    </tr>
                    <tr style={{"textAlign":"right"}}>
                        <td colSpan={"4"} className="text-right">
                            <NavLink to={"/board/board_update/"+boardDetail.no}><button className={"btn btn-xs btn-info"}>수정</button></NavLink>
                            <NavLink to={"/board/board_delete/"+boardDetail.no}><button className={"btn btn-xs btn-danger"}>삭제</button></NavLink>
                            <NavLink to={"/board/board_list"}><button className={"btn btn-xs btn-warning"}>목록🏬</button></NavLink>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
        </Fragment>
    )
}

export default BoardDetail