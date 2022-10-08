
#[cfg(target_os = "macos")]
pub fn send_short_cut() {
    use core_graphics::event::{CGEvent, CGEventTapLocation};
    use core_graphics::event_source::{CGEventSource, CGEventSourceStateID};
    let source_ref = CGEventSource::new(CGEventSourceStateID::CombinedSessionState).unwrap();
    let k_vk_command = 0x37;
    let k_vk_ansi_v = 0x09;
    let command_down = CGEvent::new_keyboard_event(source_ref.clone(), k_vk_command, true).unwrap();
    let v_down = CGEvent::new_keyboard_event(source_ref.clone(), k_vk_ansi_v, true).unwrap();
    let v_up = CGEvent::new_keyboard_event(source_ref.clone(), k_vk_ansi_v, true).unwrap();
    let command_up = CGEvent::new_keyboard_event(source_ref.clone(), k_vk_command, true).unwrap();
    command_down.post(CGEventTapLocation::HID);
    v_down.post(CGEventTapLocation::HID);
    v_up.post(CGEventTapLocation::HID);
    command_up.post(CGEventTapLocation::HID);
}

#[cfg(target_os = "windows")]
pub fn send_short_cut() {}
