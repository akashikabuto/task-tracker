import Cookies from "js-cookie";
const currentLocale = Cookies.get("i18next") || "eng";

export default function Switcher() {

  const languages = [
    { name: "English", code: "eng" },
    { name: "Français", code: "fr" },
  ];

  return (
    <div className='switcher' >
      <select className='switch-select' >
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
