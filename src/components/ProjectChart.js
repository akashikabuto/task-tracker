import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function ProjectChart() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  const Data = {
    labels: [`${t("Collaborators")}`, `${t("Tasks")}`, `${t("Issues")}`],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          'gray',
          '#002966',
          'red'
        ],
        borderColor: [
          'gray',
          '#002966',
          'red'
        ],
        borderWidth: 0.3,
      },
    ],
  };


  return (
    <Pie data={Data} />
  );
}
