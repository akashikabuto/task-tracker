import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/verification.css';


export default function VerificationPage() {

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  let url = `https://mern-learning-task-tracker.herokuapp.com`;
  const locale = localStorage.getItem("lang") || "eng";
  const [state, setState] = useState({
    message: ""
  });

  const [loading, setLoading] = useState(false);


  async function verifyToken() {
    setLoading(true);
    try {
      const config = {
        method: "POST",
        headers: {
          'accept-language': `${locale}`
        },
      };
      const res = await (await fetch(`${url}/api/contribution/verify?token=${token}`, config)).json();
      if (res.status === 201) {
        setLoading(false);
        setState({ ...state, message: 'Your contribution has been verified' });
      }
      if (res.status === 400) {
        setLoading(false);
        setState({ ...state, message: 'Invalid token' });
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    verifyToken();
    //eslint-disable-next-line
  }, [token]);


  return (
    <div className='verification-page' >
      <div className='verification-card'>
        {loading ? <p>Loading....</p> : <p>{state.message}</p>}
      </div>
    </div>
  );
}
