export default function PokemonCard(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.weight}</td>
        <td>{props.awesome ? "The pokemon is da bae" : "Not that awsome"}</td>
        <td>
          {props.terrifying
            ? "Just run when you see it!"
            : "Should be ok to pet it!"}
        </td>
        <td>{props.abilities}</td>
      </tr>
    </>
  );
}
