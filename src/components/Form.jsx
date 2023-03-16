export let Form = ({data}) =>{
    let onSubmit = e =>{
        e.preventDefault()
        console.log(e)
        document.querySelector('.modal header button').click()
    }
    return (
        <form onSubmit={onSubmit} className="container">
            <div className="row">
                <div className="input-field col s12">
                    <select id="section" className="browser-default">
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