import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { viewOneProject } from "../redux/actions/actions";
import ProjectCards from "./ProjectCards";
import ProjectChart from "./ProjectChart";
import ProjectDetails from "./ProjectDetails";
import '../css/oneProject.css';

export default function OneProject() {

  const token = localStorage.getItem('token');
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneProject } = useSelector(state => state.tasks);
  useEffect(() => {
    dispatch(viewOneProject(token, id));
    //eslint-disable-next-line
  }, [id]);
  const { t, i18n } = useTranslation();
  const locale = localStorage.getItem("lang") || "eng";

  useEffect(() => {
    i18n.changeLanguage(locale);
    //eslint-disable-next-line
  }, [locale]);


  return (
    <>
      <ProjectCards projectId={id} />
      <div>
        {oneProject.map(({ id, project_name }) => {
          return <ProjectDetails id={id} projectName={project_name} />;
        })}
      </div>
      <div className="project-status" >
        <p>{t("Status")} :</p>
        <p className="progress" >In progress</p>
      </div>
      <div className="chart" >
        <ProjectChart />
      </div>
    </>
  );
}
