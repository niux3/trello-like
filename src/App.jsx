import { useState } from 'react'
import {useRecoilValue} from "recoil"
import Navbar from './components/Navbar'
import {Section} from "./components/Section"
import {tasksData} from "./atoms/taskAtom"
import {Modal} from "./components/Modal";
import {idModalAtom} from "./atoms/idModalAtom";

function App() {
    let tasks = useRecoilValue(tasksData)
    let idModal = useRecoilValue(idModalAtom)

    return (
        <>
            <Navbar />
            <div className="container board">
                <div className="row">
                    <Section title="à faire" tasks={tasks.filter(t => t.section === "à faire")} />
                    <Section title="en cours" tasks={tasks.filter(t => t.section === "en cours")} />
                    <Section title="en recette" tasks={tasks.filter(t => t.section === "en recette")} />
                    <Section title="en production" tasks={tasks.filter(t => t.section === "en production")} />
                </div>
            </div>
            {idModal !== null  && <Modal />}
        </>
    )
}

export default App
