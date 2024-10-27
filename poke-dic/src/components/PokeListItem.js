import "./css/PokeListItem.css";
import classnames from "classnames";

function PokeListItem({ poke, onRemove, onDoubleClick }) {
  const { id, name, img, unactive } = poke;

  return (
    <li
      className={classnames("PokeListItem", { unactive })}
      onDoubleClick={() => {
        onDoubleClick(id);
      }}
    >
      <img src={poke.img} alt={poke.name} width="130" />
      <p>{poke.name}</p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default PokeListItem;
