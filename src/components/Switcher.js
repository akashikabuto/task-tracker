import { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../css/switcher.css';


export default function Switcher() {

  const currentLocale = localStorage.getItem("lang") || "eng";
  const { i18n } = useTranslation();
  const languages = [
    { name: "English", code: "eng" },
    { name: "Français", code: "fr" },
  ];
  const [language, setLanguage] = useState(currentLocale);
  const handleChangeLocale = e => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <div className='switcher' >
      <select className='switch-select' onChange={handleChangeLocale} value={language} >
        {languages.map(({ name, code }) => {
          return (
            <option key={code} value={code} >
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
