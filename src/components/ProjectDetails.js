import React from 'react';

export default function ProjectDetails({ id, projectName }) {
  return (
    <div key={id} className="pro-details" >
      <p className='pro-details-name-pro'>Project :</p>
      <p className='pro-details-name' > {projectName} </p>
    </div>
  );
}
