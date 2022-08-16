import './App.scss'
import TitleBar from "./components/TitleBar";
import CopyList from "./components/CopyList";
import {useEffect} from "react";
import {listen} from "@tauri-apps/api/event";
import {invoke} from "@tauri-apps/api";

let inited = false;

function App() {
  useEffect(() => {
    let unlisten: any;
    if (!inited) {
      inited = true
      invoke("plugin:clipboard-watch|watch").then(value => {
        console.log('init then', value)
      }).catch(error => {
        console.log('init catch', error)
      });
      (async () => {
        unlisten = await listen("hello-event", (event) => {
          console.log('OHHHHHHHHHHHHHH', event.payload)
        })
      })()
    }
    return () => {
      unlisten?.()
    }
  }, [])
  return (
    <div className="App">
      <TitleBar/>
      <CopyList/>
    </div>
  )
}

export default App
