import { useState, useEffect } from 'react';
import '../css/CoContainer.css';

export default function Contributor({ userId, users, Contributor }) {

  const [Users, setUsers] = useState([]);
  const [Owner, setOwner] = useState('');

  function setSearch(user) {
    if (!user) {
      setUsers([]);
    }
    else {
      let matchedUsers = users.filter(({ username }) => {
        const regex = new RegExp(`${user}`, 'gi');
        return username.match(regex);
      });
      setUsers(matchedUsers);
    }
  }

  let { ids } = { ids: Contributor.map(x => x.projectOwner) };


  useEffect(() => {
    let uniq = [...new Set(ids)];
    let owner = (uniq.toString());
    setOwner(owner);
  }, [ids]);




  return (
    <div className='contributor' >
      {Owner === userId ? <div>
        <input type='text' placeholder='Search collaborator' className='collaborator-input'
          onChange={(e) => setSearch(e.target.value)}
        />
        {Users.length !== 0 ? <>
          {Users && Users.map((users, idx) => {
            return <div key={idx} className='searched-contributor' >
              <p>{users.username}</p>
              <button className='button' >Add</button>
            </div>;
          })}
        </> : ""}
      </div> : <div>
        <p>You are not the owner of this project <br />so you can't add contributors </p>
      </div>}

    </div>
  );
}
