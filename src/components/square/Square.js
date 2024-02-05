export default function Square({ value, onSquareClick, winner }) {

  let icon = <i className="bi bi-question-lg"></i>;
  let xIcon = <i className="bi bi-x-lg"></i>;
  let oIcon = <i className="bi bi-circle"></i>;
  let classButton = winner ? 'btn-success' : value === 'X' ? 'btn-info' : value === 'O' ? 'btn-light' : 'btn-primary';

  return (
    <button className={"btn m-1 py-3 px-4 " + classButton} onClick={onSquareClick}>
      {value === 'X' ? xIcon : value === 'O' ? oIcon : icon}
    </button>
  );
}
