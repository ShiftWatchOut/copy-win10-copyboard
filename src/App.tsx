import './App.scss'
import TitleBar from "./components/TitleBar";
import CopyList from "./components/CopyList";
import {useEffect} from "react";
import {listen} from "@tauri-apps/api/event";
import {invoke} from "@tauri-apps/api";

let inited = false;

function App() {
  useEffect(() => {
    if (!inited) {
      inited = true
      invoke("init_copy_watch").then(value => {
        console.log('init then', value)
      }).catch(error => {
        console.log('init catch', error)
      })
    }
    let unlisten: any;
    (async () => {
      unlisten = await listen("hello-event", (event) => {
        console.log('OHHHHHHHHHHHHHH', event.payload)
      })
    })()
    return () => {
      unlisten?.()
    }
  }, [])
  return (
    <div className="App">
      <TitleBar/>
      <CopyList />
    </div>
  )
}

export default App
