/**
 * 封装数据存储，提供更加简洁的操作方式
 */

const SPLIT_FLAG = '|MF|';

/**
 * 获取字符串配置
 * 
 * @param {Object} key
 * @return String
 */
export function getStorageString(key) {
    try {
        return uni.getStorageSync(key);
    } catch (e) {
        _toast(e.message);
        return null;
    }
}

export function setStorageString(key, value) {
    try {
        return uni.setStorageSync(key, value);
    } catch (e) {
        _toast(e.message);
        return null;
    }
}

/**
 * 获取缓存列表
 * 
 * @param {Object} key
 * @return Object
 */
export function getStorageItems(key) {
    try {
        return uni.getStorageSync(key).split(SPLIT_FLAG).filter(item => {
            return item !== '';
        });
    } catch (e) {
        _toast(e.message);
        return null;
    }
}

/**
 * 向当前的存储中添加一项
 * 
 * @param {Object} key
 * @param {Object} item
 * @return Boolean
 */
export function addStorageItem(key, item) {
    try {
        let items = uni.getStorageSync(key);
        if (items === undefined) {
            items = [];
        } else {
            items = items.split(SPLIT_FLAG);
        }

        items.push(item);

        uni.setStorageSync(key, items.join(SPLIT_FLAG));
        return true;
    } catch (e) {
        _toast(e.message);
        return null;
    }
}

/**
 * 删除数据存储
 * 
 * @param {Object} key
 */
export function removeStorage(key) {
    try {
        uni.removeStorageSync(key);
        return true;
    } catch (e) {
        _toast(e.message);
        return null;
    }
}

export function _toast(title) {
    uni.showToast({
        title: title,
        icon: 'none',
        duration: 2000
    });
}
