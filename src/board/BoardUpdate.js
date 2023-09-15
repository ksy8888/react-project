import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";

function BoardUpdate() {
    const {no} = useParams()
    const [name,setName]=useState("")
    const [subject,setSubject] = useState("")
    const [content,setContent] = useState("")
    const [pwd,setPwd]=useState("")
    const [regdate, setRegdate] = useState("");

    useEffect(()=>{
        axios.get("http://localhost/board/board_detail",{
            params:{
                no:no
            }
        }).then(res =>{
            console.log(res.data)
            setName(res.data.name)
            setSubject(res.data.subject)
            setContent(res.data.content)
            setRegdate(res.data.regdate)
        }).catch(error=>{
            console.log(error.response)
        })
    },[]);
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const regdateChange=(e)=>{
        setContent(e.target.value)
    }
    const  updateBtn=()=>{
        if(pwd.trim()==="") {
            document.querySelector('#pwd').focus()
            return
        }
        axios.get("http://localhost/board/board_update",{
            params:{
                no:no,
                name:name,
                pwd:pwd,
                subject:subject,
                content:content,
                regdate:regdate
            }
        }).then(result=>{
            if(result.data==="YES") {
                alert("수정되었습니다")
                window.location.href="/board/board_detail/"+no
                //window.location.href="/board/board_detail/"+no
            } else {
                alert("비밀번호가 틀립니다")
                document.querySelector('#pwd').value=""
                document.querySelector('#pwd').focus()
                // window.location.href="/board/board_detail/"+no
            }

        })
    }


    return(
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className={"text-center font-sans-serif fw-bold"}>수정하기</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-lg-12"} style={{"padding":"2px 400px 5px 400px"}}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">이름</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value={name} onChange={nameChange} required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">날짜</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value={regdate} onChange={regdateChange} required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">비밀번호</label>
                            <input type="password" className="form-control" id="pwd" placeholder=""  value={pwd} onChange={pwdChange} required/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">제목</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="username" placeholder="" value={subject} onChange={subjectChange} required/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">내용</label>
                        <textarea style={{"width":"100%", "height":"200px"}} value={content} onChange={contentChange}></textarea>
                    </div>

                </div>
                <table className={"table"}>
                    <tbody>
                    <tr style={{"textAlign":"right"}}>
                        <td colSpan={"2"} className={"text-center"}>
                            <button className={"btn btn-sm btn-danger"}
                                    onClick={updateBtn} style={{"borderStyle":"none","width":"80px","height":"38px","backgroundColor":"#FDC800"}}>수정하기</button> &nbsp;
                            <NavLink to={"/board/board_list"}>
                                <button className={"btn btn-sm btn-danger"} style={{"borderStyle":"none","width":"65px","height":"38px","backgroundColor":"#FDC800"}}>취소</button></NavLink>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default BoardUpdate