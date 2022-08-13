import {appWindow} from "@tauri-apps/api/window";

const TitleBar = () => {
  const handleClose = async () => {
    await appWindow.hide()
  }
  return <div className='title-bar'>
    <div
      className='drag-zone'
      data-tauri-drag-region=""
    >
      剪贴板
    </div>
    <div className='close' onClick={handleClose}></div>
  </div>
}

export default TitleBar;