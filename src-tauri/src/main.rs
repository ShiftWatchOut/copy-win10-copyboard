#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

mod clipboard_watch;
mod platform_action;

use std::any::Any;
use cocoa::appkit::NSWindow;
use cocoa::base::{nil, YES};
use tauri::{App, CustomMenuItem, GlobalShortcutManager, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};
use crate::platform_action::{get_current_window, send_short_cut};

fn main() {
    let quit = CustomMenuItem::new("quit", "退出");
    let hide_or_show = CustomMenuItem::new("hide_or_show", "隐藏/显示");
    let tray_menu = SystemTrayMenu::new().add_item(hide_or_show).add_item(quit);
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            // if !cfg![debug_assertions] {
                // 非调试模式都要隐藏任务栏图标
                window.set_skip_taskbar(true).unwrap();
            // }
            app.listen_global("front-event", |event| {
                // send_short_cut();
                println!("got hello-event with {:?}", event.payload());
            });
            app.global_shortcut_manager().register("CommandOrControl+Shift+V", move || {
                unsafe {
                    get_current_window();
                }
                let is_visible = window.is_visible().unwrap();
                if is_visible {
                    window.hide().unwrap();
                } else {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }).unwrap();
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
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
                _ => {}
            },
            _ => {}
        })
        .plugin(clipboard_watch::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
