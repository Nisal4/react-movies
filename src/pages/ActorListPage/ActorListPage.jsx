import { movies } from "../../data";
function ActorListPage() {
  const actors = movies.flatMap((m) => m.cast);
  const actorsList = new Set(actors);
  const casts = Array.from(actorsList);

  const castsList = casts.map((c, idx) => (
    <div key={idx}>
      <img src={`https://picsum.photos/id/${idx}/200/300`} />
      <p>{c}</p>
      <hr />
    </div>
  ));

  return (
    <>
      <h1>Actor List Page</h1>
      {castsList}
    </>
  );
}

export default ActorListPage;