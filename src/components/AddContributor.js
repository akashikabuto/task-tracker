
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AddContributor({ username, projectId, contributor, contributorEmail }) {

  let url = `https://mern-learning-task-tracker.herokuapp.com`;

  const initialState = {
    project: projectId, contributor, contributorEmail, projectName: "akashi",
  };
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const lang = localStorage.getItem('lang') || 'eng';
  const { t, i18n } = useTranslation();


  async function addContributor() {
    console.log("state", initialState);
    setLoading(true);
    const config = {
      method: "POST",
      headers: {
        'content-type': "application/json",
        'accept-language': `${lang}`,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(initialState)
    };
    try {
      const res = await (await fetch(`${url}/api/contribution/add`, config)).json();
      if (res.status === 200) {
        setLoading(false);
        alert(res.message);
      }
      if (res.status === 401) {
        setLoading(false);
        alert(res.message);
      }
      if (res.status === 409) {
        setLoading(false);
        alert(res.message);
      }
      if (res.status === 500) {
        setLoading(false);
        alert(JSON.stringify(res));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  useEffect(() => {
    i18n.changeLanguage(lang);
    //eslint-disable-next-line
  }, [lang]);


  return (
    <div className='searched-contributor' >
      <p>{username}</p>
      <button className='button' onClick={addContributor} disabled={loading ? true : false}  >{loading ? "loading..." : "add"}</button>
    </div>
  );
}
