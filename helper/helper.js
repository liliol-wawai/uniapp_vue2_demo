/**
 * 封装提示框
 */
function toast(icon, text, duration, mask, position) {
    duration = duration || 1500;
    mask = mask || false;
    position = position || false;
    uni.showToast({
        icon: icon,
        title: text,
        duration: duration,
        mask: mask,
        position: position,
    })
}

export default {
    toast
}
