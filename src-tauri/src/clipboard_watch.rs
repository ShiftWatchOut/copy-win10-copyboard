use std::thread;
use std::time::Duration;
use tauri::plugin::{Builder, TauriPlugin};
use tauri::{AppHandle, ClipboardManager, Manager, Runtime};

#[derive(Clone, serde::Serialize)]
struct ClipboardData<'r> {
    content: &'r str,
}

#[derive(Default)]
struct MyState {}

#[tauri::command]
fn watch<R: Runtime>(app: AppHandle<R>) {
    thread::spawn(move || {
        println!("loop");
        let mut last_str = String::from("");
        loop {
            thread::sleep(Duration::from_secs(1));
            let latest_str = app.clipboard_manager().read_text().unwrap().unwrap();
            if !latest_str.eq(&last_str) {
                last_str = latest_str;
                app.emit_all(
                    "hello-event",
                    ClipboardData {
                        content: last_str.as_str(),
                    },
                )
                .unwrap()
            }
        }
    });
}

pub fn init<R: Runtime>() -> TauriPlugin<R> {
    Builder::new("clipboard-watch")
        .invoke_handler(tauri::generate_handler![watch])
        .setup(|app_handle| {
            app_handle.manage(MyState::default());
            Ok(())
        })
        .build()
}
