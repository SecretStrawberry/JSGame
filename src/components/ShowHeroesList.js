function showHeroes(heroesList) {
  const { ...heroes } = heroesList;
  const heroesArray = [];
  // iterating over the object to get the individuals arrays out an push them in the heroesArray array
  // the object and the arrays can be any length
  for (const [key, value] of Object.entries(heroes)) {
    heroesArray.push(
      <div key={key}>
        {/* mapping over each array to take out the individuals itmes with a span around */}
        {value.map((item, key) => (
          <span key={key}>{item}</span>
        ))}
      </div>
    );
  }

  return heroesArray;
}

export default showHeroes;
