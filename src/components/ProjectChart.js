import { useEffect } from "react";
import { VictoryPie } from "victory";
import { useTranslation } from 'react-i18next';

export default function ProjectChart() {

  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);

  return (
    <VictoryPie data={[
      { x: `${t("Collaborators")}`, y: 25 },
      { x: `${t("Issues")}`, y: 40 },
      { x: `${t("Tasks")}`, y: 15 }
    ]}
      animate={{
        duration: 2000
      }}
      colorScale={["#0065ff", "rgb(119, 99, 99)", "#16243a"]}
      width={200}
      height={200}
      style={{
        labels: {
          fontSize: 11
        }
      }}

      labels={({ datum }) => `${datum.x}: ${datum.y}`}
    />
  );
}
