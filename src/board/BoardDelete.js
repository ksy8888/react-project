import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";

function BoardDelete() {
    const {no} = useParams()
    const [pwd,setPwd]=useState('')

    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const deleteBtn=()=>{
        if(pwd.trim()==="") {
            document.querySelector('#pwd').focus()
            return
        }
        axios.get("http://localhost/board/board_delete",{
            params:{
                no:no,
                pwd:pwd
            }
        }).then(result=>{
            if(result.data==="YES") {
                alert("삭제되었습니다")
                window.location.href="/board/board_list"
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
            <div className={"container"}>
                <h1 className={"text-center font-sans-serif fw-bold"}>삭제하기</h1>
                <div style={{"marginTop":"20px"}}></div>
                <div className={"row row1"} style={{"width":"600px","marginLeft":"250px"}}>
                    <table className={"table"}>
                        <tbody>
                        <tr>
                            <th width={"20%"} className={"text-right success"}>비밀번호</th>
                            <td width={"80%"}>
                                <input type={"password"} size={"10"} id="pwd" className={"input-sm"}
                                       onChange={pwdChange} value={pwd}
                                />
                            </td>
                        </tr>
                        <tr style={{"textAlign":"right"}}>
                            <td colSpan={"2"} className={"text-center"}>
                                <button className={"btn btn-sm btn-danger"}
                                        onClick={deleteBtn} style={{"borderStyle":"none","width":"80px","height":"38px","backgroundColor":"#FDC800"}}>삭제하기</button> &nbsp;
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
export  default BoardDelete