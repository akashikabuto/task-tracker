import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { oneProject } = useSelector(state => state.tasks);
  useEffect(() => {
    dispatch(viewOneProject(token, id, history));
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
        {oneProject.map(({ _id, project }) => {
          return <ProjectDetails id={_id} projectName={project.name} />;
        })}
      </div>
      {oneProject.map(({ _id }) => {
        return <div className="project-status" key={_id} >
          <p>{t("Status")} :</p>
          <p className="progress" >In progress</p>
        </div>;
      })}
      <div className="chart" >
        <ProjectChart />
      </div>
    </>
  );
}
