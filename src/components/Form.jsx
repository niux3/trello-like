import {useRecoilValue, useSetRecoilState} from "recoil";
import {tasksData} from "../atoms/taskAtom";


export let Form = ({data}) =>{
    let setTasks = useSetRecoilState(tasksData),
        tasks = useRecoilValue(tasksData)
    let onSubmit = e =>{
        e.preventDefault()
        let row = {
            id: data.id,
            section: e.target.querySelector('#section').value,
            title: e.target.querySelector('#title').value,
            content: e.target.querySelector('#content').value
        }
        setTasks([...tasks.filter(t => t.id !== data.id), row])
        document.querySelector('.modal header button').click()
    }
    return (
        <form onSubmit={onSubmit} className="container">
            <div className="row">
                <div className="input-field col s12">
                    <select id="section" className="browser-default" defaultValue={data.section}>
                        <option>à faire</option>
                        <option>en cours</option>
                        <option>en recette</option>
                        <option>en production</option>
                    </select>
                    <label htmlFor="section" className="active">section</label>
                </div>

                <div className="input-field col s12">
                    <input type="text" id="title" placeholder="titre" className="autocomplete" defaultValue={data.title}/>
                    <label htmlFor="title" className="active">titre</label>
                </div>

                <div className="input-field col s12">
                    <textarea name="content" id="content" defaultValue={data.content}></textarea>
                    <label htmlFor="content" className="active">contenu</label>
                </div>
                <button type="submit" className="waves-effect waves-light btn">sauvegarder</button>
            </div>
        </form>
    )
}