import {useEffect, useState} from "react"
import {useSetRecoilState, useRecoilValue} from "recoil"
import {tasksData} from "../atoms/taskAtom"
import {Task} from "./Task"

export let Section = ({title, tasks})=>{

    let [isInputHide, setIsInputHide] = useState(false),
        setTaskData = useSetRecoilState(tasksData),
        taskData = useRecoilValue(tasksData)

    useEffect(()=>{

    }, [taskData])

    let onKeyEvent = e =>{
        switch(e.code){
            case 'Enter':
                let row = {
                    id: new Date().getTime(),
                    title: e.target.value,
                    section: title,
                    content: '',
                    // completed: false
                }
                setTaskData(()=> [...taskData, row])
                e.target.value = ""
                setIsInputHide(false)
                break
            case 'Escape':
                setIsInputHide(false)
                break
        }
    }

    return (
        <div className="card col s3">
            <div className="card-content">
                <span className="card-title">{title}</span>
                {tasks.map(t =>(
                    <Task key={t.id} data={t} />
                ))}
                <p className={!isInputHide ? 'hide' : ''}>
                    <input className="input-task-title" type="text" onBlur={()=> setIsInputHide(false)} onKeyUp={onKeyEvent} placeholder="titre de la tâche"/>
                </p>
            </div>
            <div className="card-action">
                <button onClick={()=> setIsInputHide(true)} className="waves-effect waves-light btn"><span className="material-icons">add</span><span>ajouter une tâche</span></button>
            </div>
        </div>
    )
}