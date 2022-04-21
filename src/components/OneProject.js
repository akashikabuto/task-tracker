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

export default function OneProject({ projectName }) {

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
      <ProjectCards projectId={id} projectName={projectName} />
      <div>
        <ProjectDetails id={oneProject._id} projectName={oneProject.name} />
      </div>
      <div className="project-status" >
        <p>{t("Status")} :</p>
        <p className="progress" > {oneProject.status}</p>
      </div>
      <div className="chart" >
        <ProjectChart />
      </div>
    </>
  );
}
