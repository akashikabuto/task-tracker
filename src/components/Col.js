import '../css/col.css';

export default function Col({ isOver, children }) {
  const className = isOver ? " highlight-region" : "";

  return (
    <div className={`col${className}`}>
      {children}
    </div>
  );
}
