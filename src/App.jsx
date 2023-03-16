import { useState } from 'react'
import Navbar from './components/Navbar'
import {Section} from "./components/Section"

function App() {
  let [tasks, setTasks] = useState([
      {
          id: 1,
          section: "à faire",
          title: "rencontrer Damien",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
          id: 2,
          section: "en recette",
          title: "conclusion du call avec Damien",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
          id: 3,
          section: "à faire",
          title: "call avec entreprise",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
  ])

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
      </>
  )
}

export default App
