import {Modal} from "./Modal"
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
import {idModalAtom} from "../atoms/idModalAtom"

export let Task = ({data}) =>{
    let [idModal, setIdModal] = useRecoilState(idModalAtom)

    let handleClick = e =>{
        if(e.detail === 2){
            setIdModal(()=> data.id)
        }
    }
    return (
        <button data-id={data.id} onClick={handleClick} className="task">{data.title}</button>
    )
}