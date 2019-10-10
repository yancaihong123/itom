// import Vue from 'vue';
const store = window.sessionStorage;
const local = window.localStorage;
// eslint-disable-next-line no-unused-vars
class storeMethod {
  set(key, val, localSave) {
    // 默认是session缓存，若传了lacalSave则为本地缓存
    if (key && typeof key === 'string') {
      if (localSave) {
        local.setItem(key, JSON.stringify(val));
      } else {
        store.setItem(key, JSON.stringify(val));
      }
    }
    return this
  }
  get(key, localSave) {
    const value = localSave ? local.getItem(key) : store.getItem(key);
    if (typeof value !== 'string') {
      return undefined
    }
    try {
      return JSON.parse(value)
    } catch (e) {
      return value || undefined
    }
  }
  // remove(key, localSave) {
  //   const val = this.get(key, localSave);
  //   if (localSave) {
  //     local.removeItem(key);
  //   } else {
  //     store.removeItem(key);
  //   }
  // }
}
// eslint-disable-next-line no-undef
const storage = new StoreMethod()
export default storage
