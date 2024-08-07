export const useLocalStorage = (key) => {
   const setItem = (value) => {
      try {
         window.localStorage.setItem(key, JSON.stringify.value);
      } catch (error) {
         console.log(error);
      }
   };

   const getItem = (value) => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : undefined;
      } catch (error) {
         console.log(error);
      }
   };

   const removeItem = (value) => {
      try {
         window.localStorage.removeItem(key);
      } catch (error) {
         console.log(error);
      }
   };
};
