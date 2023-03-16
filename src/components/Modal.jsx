import {useRecoilValue, useSetRecoilState} from "recoil"
import {tasksData} from "../atoms/taskAtom"
import {idModalAtom} from "../atoms/idModalAtom"

export let Modal = () => {
    let tasks = useRecoilValue(tasksData),
        id = useRecoilValue(idModalAtom),
        setIdModal = useSetRecoilState(idModalAtom),
        closeModal = e => setIdModal(null),
        data = tasks.filter(t => t.id === parseInt(id, 10)).pop()

    return (
        <div className="modal">
            <header><button onClick={closeModal}>&#x292B;</button></header>
            <div className="modal-content">
                {JSON.stringify(data)}
            </div>
        </div>
    )
}