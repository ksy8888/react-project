import {Fragment, useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function BoardInsert() {
    const [name,setName]=useState("")
    const [subject,setSubject] = useState("")
    const [content,setContent] = useState("")
    const [pwd,setPwd]=useState("")

    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }

    const writeClick=()=>{
        axios.get("http://localhost/board/board_insert",{
            params:{
                name:name,
                subject:subject,
                content:content,
                pwd:pwd
            }
        }).then(result=>{
            window.location.href="/board/board_list"
        })
    }

    return(
        <Fragment>
            <div className={"container"}>
                <h1 className={"text-center font-sans-serif fw-bold"}>글쓰기</h1>
                <div style={{"marginTop":"20px"}}></div>
                <div className={"row row1"} style={{"width":"600px","marginLeft":"250px"}}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <th width={"20%"} className={"text-right success"}>이름</th>
                            <td width={"80%"}>
                                <input type={"text"} size={"15"} className={"input-sm"}
                                       onChange={nameChange} value={name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th width={"20%"} className={"text-right success"}>제목</th>
                            <td width={"80%"}>
                                <input type={"text"} size={"55"} className={"input-sm"}
                                       onChange={subjectChange} value={subject}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th width={"20%"} className={"text-right success"}>내용</th>
                            <td width={"80%"}>
                                <textarea rows={"10"} cols={"55"} onChange={contentChange}>{content}</textarea>
                            </td>
                        </tr>
                        <tr>
                            <th width={"20%"} className={"text-right success"}>비밀번호</th>
                            <td width={"80%"}>
                                <input type={"password"} size={"10"} className={"input-sm"}
                                       onChange={pwdChange} value={pwd}
                                />
                            </td>
                        </tr>
                        <tr style={{"textAlign":"right"}}>
                            <td colSpan={"2"} className={"text-center"}>
                                <button className={"btn btn-sm btn-danger"}
                                        onClick={writeClick} style={{"borderStyle":"none","width":"70px","height":"38px","backgroundColor":"#FDC800"}}>글쓰기</button> &nbsp;
                                <NavLink to={"/board/board_list"}>
                                    <button className={"btn btn-sm btn-danger"} style={{"borderStyle":"none","width":"65px","height":"38px","backgroundColor":"#FDC800"}}>취소</button></NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )

}

export default BoardInsert