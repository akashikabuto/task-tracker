import '../css/input.css';

export default function Input({ placeholder, type, handleOnchange, name, error }) {

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleOnchange}
        name={name}
        className={`${error && 'error-border'} login-input`}
      />
      {error && <div className='input-error' >{error}</div>}
    </>
  );
}
