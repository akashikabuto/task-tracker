import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/NotFound.css';


export default function NotFound() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem('lang') || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  return (
    <pre className='notFound'>
      404
      <br />
      <br />
      {t("ThePageNotFound")}
    </pre>
  );
}
