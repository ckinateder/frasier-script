const excludeCharacters = [">>>>>>> master", "=======", "<<<<<<< HEAD"];
const fillColor = "steelblue";
const accentColor = "orange";
const numCharacters = 10;
const majorCharacters = ["Frasier", "Niles", "Martin", "Daphne", "Roz"];
let characterData;

d3.csv("data/transcripts.csv").then((data) => {
  console.log(`decoding ${data.length} rows`);
  processedData = [];
  data.forEach((d) => {
    /*
    Keep only the columns we need:
        "character",
        "charactername",
        "charactertype",
        "gender",
        "title",
        "lines",
        "season",
        "episode",
    */
    const p = {
      character: d.character,
      charactername: d.charactername,
      charactertype: d.charactertype,
      gender: d.gender,
      title: d.title,
      lines: d.lines,
      season: d.season,
      episode: d.episode,
    };

    if (p.character in excludeCharacters) {
    } else processedData.push(p);
  });

  console.log(`processed ${processedData.length} rows`);

  //characterData = characterData.slice(0, numCharacters);
  // create the bar chart and top characters
  const barChart = new CharacterBarChart(processedData);
  const averagg = new LinesOverTime(processedData);
  const characterArcDiagram = new ArcDiagram(processedData);
});
