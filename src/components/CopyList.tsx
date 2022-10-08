import dots from "../assets/dots-horizontal.svg"
import pin from "../assets/pin.svg"
import React, {useEffect, useState} from "react";
import {invoke} from "@tauri-apps/api";
import {emit, listen} from "@tauri-apps/api/event";
import {writeText} from "@tauri-apps/api/clipboard";
import {appWindow} from "@tauri-apps/api/window";

let inited = false;
let unlisten: any;

interface IDataItem {
  value: string;
}

const CopyList = () => {
  useEffect(() => {
    if (!inited) {
      inited = true
      invoke("plugin:clipboard-watch|watch").then(value => {
        console.log('init then', value)
      }).catch(error => {
        console.log('init catch', error)
      });
      (async () => {
        unlisten?.()
        unlisten = await listen("hello-event", (event) => {
          // @ts-ignore
          const content = event?.payload?.content;
          console.log('clipboard changed', event)
          if (!content) return;
          emit("front-event")
          setItems((prevState) => [{value: content}, ...prevState,])
        })
      })()
    }
    return () => {
      unlisten?.()
    }
  }, [])
  const [items, setItems] = useState<IDataItem[]>([])
  const handlePaste = async (value: string, idx: number) => {
    const copyItems = items.map(e => e);
    copyItems.splice(idx, 1)
    setItems(copyItems)
    await writeText(value)
    await appWindow.hide()
    console.log('try to paste', value)
  }
  const handleMore = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    console.log('try to more',)
  }
  const handlePin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    console.log('try to pin',)
  }
  return <div className='copy-list'>
    <div className='function-bar'>
      {/* TODO: 留作清除按钮和 tab 页 */}
    </div>
    {
      items.map((item, idx) => {
        return <div
          key={idx}
          className='copy-item'
          tabIndex={idx + 2}
          onClick={() => {
            handlePaste(item.value, idx)
          }}
          onKeyDown={event => {
            if (event.code === 'Enter') {
              handlePaste(item.value, idx)
            }
          }}
        >
          <div className='value'>{item.value}</div>
          <div className='action'>
            <div className='more btn' title='查看更多信息' onClickCapture={handleMore}>
              <img src={dots} alt=''/>
            </div>
            <div className='pin btn' title='固定项目' onClickCapture={handlePin}>
              <img src={pin} alt=''/>
            </div>
          </div>
        </div>;
      },)
    }
  </div>
}

export default CopyList;