import { useState, useEffect } from 'react';
import '../css/newEntry.css';
import { useDispatch } from 'react-redux';
import { seeAllTasks } from "../redux/actions/actions";
import { useHistory } from 'react-router-dom';

export default function NewEntry({ projectId, t }) {

  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const initialState = {
    taskName: "",
    description: "",
    project: ``,
  };

  function setTheState() {
    setState({
      ...state,
      project: projectId
    });
  }

  useEffect(() => {
    setTheState();
    //eslint-disable-next-line
  }, [projectId]);

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [state, setState] = useState(initialState);
  const locale = localStorage.getItem("lang") || "eng";
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'accept-language': `${locale}`,
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(state)
    };
    try {
      const res = await (await fetch(`${url}/api/task/add?projectId=${projectId}`, config)).json();
      if (res.status === 201) {
        setLoading(false);
        dispatch(seeAllTasks(token, locale, history));
        history.push(`/dashboard/tasks/${projectId}`);
      }
      if (res.status === 409) {
        setLoading(false);
        setMessage("Task already exists");
      }
      if (res.status === 401) {
        history.push('/login');
      }
      if (res.status === 500) {
        setLoading(false);
        console.log(res);
      }

    } catch (error) {
      window.alert("SERVER ERROR");
    }
  }



  return (
    <>
      <form onSubmit={handleSubmit} >
        {message && <div className="insert-error"><p>{message}</p></div>}
        <div className='flex' >
          <label>{t("TaskName")}</label>
          <input type='text' placeholder={t("TaskName")} className='input'
            required
            onChange={(e) => setState({ ...state, taskName: e.target.value })}
          />
        </div>
        <div className='flex' >
          <label> {t("SmallDescription")} </label>
          <input type='text' placeholder={t("SmallDescription")} className='input'
            required
            onChange={(e) => setState({ ...state, description: e.target.value })}
          />
        </div>
        <button className='button' disabled={loading ? true : false}  > {loading ? t('loading') : t("insert")} </button>
      </form>
    </>
  );
}
