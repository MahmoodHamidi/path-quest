import { createContext, useContext, useReducer, useEffect } from "react";

export const languages = {
  fa:{code: "fa",
    dir: "rtl",
    flag: "🇮🇷",
    name: "فارسی",
    translations: {
      websiteName: "سفر خیالی",
      welcome: "به سفر خیالی خوش آمدید!",
      welcomeMessage: "راه خروجی وجود ندارد—فقط بقا مهم است. منابع محدود هستند، خطرات در هر گوشه کمین کرده‌اند و هر اشتباهی می‌تواند آخرین اشتباه شما باشد.",
      themeToggle: "تغییر تم",
      languageToggle: "تغییر زبان",
      selectStory: "یک داستان انتخاب کنید ..."
    },
  },
  en: {
    code: "en",
    dir: "ltr",
    flag: "🇬🇧",
    name: "English",
    translations: {
      websiteName: "Imaginary Journey",
      welcome: "Welcome to the Imaginary Journey!",
      welcomeMessage: "There’s no way out—only survival. Resources are limited, dangers lurk around every corner, and every mistake could be your last.",
      themeToggle: "Toggle Theme",
      languageToggle: "Switch Language",
      selectStory: "select a story ..."
    },
  },
  de: {
    code: "de",
    dir: "ltr",
    flag: "🇩🇪",
    name: "Deutsch",
    translations: {
      websiteName: "Imaginäre Reise",
      welcome: "Willkommen zur imaginären Reise!",
      welcomeMessage: "Es gibt keinen Ausweg – nur das Überleben zählt. Ressourcen sind begrenzt, Gefahren lauern an jeder Ecke und jeder Fehler könnte dein letzter sein.",
      themeToggle: "Thema wechseln",
      languageToggle: "Sprache ändern",
      selectStory: "Wähle eine Geschichte ..."
    },
  },
};

const intialState = {
  theme: localStorage.getItem("theme") || "dark",
  language: localStorage.getItem("language") || "de",
};

function reducer(state, action) {
  console.log("Reducer triggered! Action type:", action.type);
  console.log("Current state before action:", state);
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    case "TOGGLE_LANGUAGE":
      console.log("Switching language to:", action.payload);
      localStorage.setItem("language",action.payload);
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

const GlobalContext = createContext();

export function GlobalProvider({children}){
    const [state,dispatch] = useReducer(reducer,intialState);


    useEffect(() => {
        if (state.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [state.theme]);
    
      useEffect(() => {
        document.documentElement.setAttribute("dir", languages[state.language]?.dir);
      }, [state.language]);

      return (
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
      )
}

export function useGlobalContext(){
    return useContext(GlobalContext);
}
