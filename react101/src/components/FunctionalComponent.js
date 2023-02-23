function Facts() {
  let fact1 = "Fact 1: React is pretty epic";
  let fact2 = "Fact 2: React is pretty epic";
  let fact3 = "Fact 3: React is pretty epic";
  let fact4 = "Fact 4: React is pretty epic";
  let fact5 = "Fact 5: React is pretty epic";

  return (
    <ol>
      <li>{fact1}</li>
      <li>{fact2}</li>
      <li>{fact3}</li>
      <li>{fact4}</li>
      <li>{fact5}</li>
    </ol>
  );
}

export default function Heading() {
  return <h1>React Fun Facts!</h1>;
}

export { Facts };
