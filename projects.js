const PROJECTS = [
  {
    title: "NENO",
    description: "NENO is a personal knowledge garden manager (a.k.a. note-taking app) with freedom to exit, user-owned data, and bottom-up organization.",
    image: "neno-logo.svg",
    imageIsIcon: true,
    altText: "NENO Logo",
    link: "https://polyrainbow.github.io/neno/",
  },
  {
    title: "Sebi Siebenschläfer",
    description: "Creative-Commons-lizensierte, GEMA-freie Musik für kleine und große Kinder.",
    image: "sebi-siebenschläfer-cover.jpeg",
    altText: "Sebi Siebenschläfer Album Cover",
    link: "https://sebi-siebenschlaefer.de",
  },
  {
    title: "MICONAU",
    description: "An audio player that can be controlled with a MIDI keyboard, written in Rust. Plays most common audio formats (mp3, flac, etc.)",
    image: "miconau.jpg",
    altText: "MIDI Keyboard with keys and transport icons on the keys: With the white keys, an album is selected. With the black keys, play, pause, next track, previous track can be triggered.",
    link: "https://github.com/polyrainbow/miconau",
  },
  {
    title: "6-bit Binary-Decimal Converter",
    description: "An Arduiono-powered toy I built for my children to learn counting in binary",
    image: "binary-decimal-converter.jpeg",
    altText: "6-bit Binary-Decimal Converter",
    link: "https://nrw.social/@seb/109313649266091260",
  },
  {
    title: "Niklas Luhmann Archive",
    description: "Niklas Luhmann's famous zettelkasten with more than 90,000 note cards. I helped bringing it online.",
    image: "zettelkasten.jpg",
    altText: "Niklas Luhmann's zettelkasten",
    link: "https://niklas-luhmann-archiv.de/bestand/zettelkasten/zettel/ZK_1_NB_1_1_V",
  },
  {
    title: "SEven - Science Fiction Event Graph Generator",
    description: "Model & visualize non-linear timelines in speculative fiction, featuring 🕰️ Time Travel 🕰️ Time Dilation 🕰️ Anti-Time 🕰️ Frozen Time 🕰️ Alternative Timelines 🕰️ Closed Timelike Curves",
    image: "seven.png",
    altText: "Screenshot of SEven - Science Fiction Event Graph Generator",
    link: "https://polyrainbow.github.io/Seven/",
  },
  {
    title: "Emoji Piano",
    description: "Share melodies via emojis",
    image: "emoji-piano.png",
    altText: "Screenshot of Emoji Piano",
    link: "https://polyrainbow.github.io/emoji-piano/",
  },
  {
    title: "PLEX",
    description: "A silly web synthesizer I have built in 2012. One of the first Web Audio apps.",
    image: "plex.png",
    altText: "Sebi Siebenschläfer Album Cover",
    link: "https://polyrainbow.github.io/plex/",
  },
  {
    title: "One In A Googolplex",
    description: "A pop band that I was part of a long time ago.",
    image: "sodw.jpg",
    altText: "Sebi Siebenschläfer Album Cover",
    link: "https://oneinagoogolplex.bandcamp.com/",
  },
  {
    title: "Star Trek IMDB Ratings Diagram",
    description: "Diagram of all Star Trek TV seasons and their IMDB rankings.",
    image: "star-trek-imdb.png",
    altText: "Graph showing all seasons of Star Trek TV shows and their IMDB ratings",
    link: "https://nrw.social/@seb/110094059874139964",
  },
  {
    title: "WiFi radio",
    description: "A WiFi radio I built from a Nokia Lumia smartphone and a car loudspeaker.",
    image: "radio.jpeg",
    altText: "WiFi radio",
    link: "https://nrw.social/@seb/109556469452987054",
  },
];

const projectsContainer = document.getElementById("projects");

for (const project of PROJECTS) {
  const a = document.createElement("a");
  a.href = project.link;
  a.rel = "nofollow noopener";
  a.target = "_blank";
  projectsContainer.appendChild(a);
  const projectEl = document.createElement("div");
  projectEl.className = "project";
  a.appendChild(projectEl);
  const img = document.createElement("img");
  if (project.imageIsIcon) {
    img.className = "icon";
  }
  img.src = "assets/project-images/" + project.image;
  img.alt = project.altText;
  projectEl.appendChild(img);
  const textContainer = document.createElement("div");
  textContainer.className = "text";
  projectEl.appendChild(textContainer);
  const titleEl = document.createElement("div");
  titleEl.className = "title";
  titleEl.innerText = project.title;
  textContainer.appendChild(titleEl);
  const descriptionEl = document.createElement("div");
  descriptionEl.className = "description";
  descriptionEl.innerText = project.description;
  textContainer.appendChild(descriptionEl);
}