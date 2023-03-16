import {useState} from "react"

export let Section = ({title, tasks})=>{

    let [isHide, setIsHide] = useState(false)

    let onKeyEvent = e =>{
        switch(e.code){
            case 'Enter':
                let row = {
                    id: new Date().getTime(),
                    title: e.target.value,
                    section: title,
                    content: '',
                    completed: false
                }
                break
            case 'Escape':
                setHide(false)
                break
        }
    }

    return (
        <div className="card col s3">
            <div className="card-content">
                <span className="card-title">{title}</span>
                {tasks.map(t =>(
                    <p className="z-depth-1" key={t.id}>{t.title}</p>
                ))}
                <p className={!isHide ? 'hide' : ''}>
                    <input className="input-task-title" type="text" onBlur={()=> setIsHide(false)} onKeyUp={onKeyEvent} placeholder="titre de la tâche"/>
                </p>
            </div>
            <div className="card-action">
                <button onClick={()=> setIsHide(true)} className="waves-effect waves-light btn"><span className="material-icons">add</span><span>ajouter une tâche</span></button>
            </div>
        </div>
    )
}