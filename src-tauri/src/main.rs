#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Manager, Runtime, SystemTray, SystemTrayEvent, SystemTrayMenu, Window};
use std::thread;
use std::time::Duration;

#[derive(serde::Serialize, Clone)]
struct Payload<'r> {
    message: &'r str,
}

#[tauri::command]
fn init_copy_watch<R: Runtime>(window: Window<R>) {
    thread::spawn(move || {
        println!("loop");
        loop {
            thread::sleep(Duration::from_secs(1));
            window.emit("hello-event", Payload { message: "event-hello" }).unwrap()
        }
    });
}

fn main() {
    let quit = CustomMenuItem::new("quit", "退出");
    let hide_or_show = CustomMenuItem::new("hide_or_show", "隐藏/显示");
    let tray_menu = SystemTrayMenu::new().add_item(hide_or_show).add_item(quit);
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            if !cfg![debug_assertions] {
                // 非调试模式都要隐藏任务栏图标
                window.set_skip_taskbar(true).unwrap();
            }
            app.listen_global("hello-event", |event| {
               println!("got hello-event with {:?}", event.payload());
            });
            Ok(())
        })
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "quit" => {
                    std::process::exit(0);
                }
                "hide_or_show" => {
                    let window = app.get_window("main").unwrap();
                    let is_visible = window.is_visible().unwrap();
                    if is_visible {
                        window.hide().unwrap();
                    } else {
                        window.show().unwrap()
                    }
                }
                _ => {}
            },
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![init_copy_watch])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
