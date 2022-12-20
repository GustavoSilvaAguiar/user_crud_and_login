import {
  encodeToBase64,
  decodeFromBase64,
} from "@/encodeToBase64/cryptoBase64";

export default {
  install: (app) => {
    const localStorage = window.localStorage;
    const key = "login_and_crud";
    app.config.globalProperties.$localStorageSetItem = (content) => {
      const encodedKey = encodeToBase64(key);
      const encodedContent = encodeToBase64(JSON.stringify(content));
      localStorage.setItem(encodedKey, encodedContent);
    };

    app.config.globalProperties.$localStorageGetItem = () => {
      const encodedKey = encodeToBase64(key);
      const encodedContent = localStorage.getItem(encodedKey);

      return encodedContent
        ? JSON.parse(decodeFromBase64(encodedContent))
        : null;
    };

    app.config.globalProperties.$localStorageRemoveItem = () => {
      localStorage.removeItem(encodeToBase64(key));
    };
  },
};
