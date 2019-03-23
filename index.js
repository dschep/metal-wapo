(async function() {
  const getFromStorage = keys => {
    if (chrome.storage) {
      return new Promise((resolve, reject) =>
        chrome.storage.local.get(keys, resolve)
      );
    } else {
      return browser.storage.local.get(keys);
    }
  };

  const defaultTitles = [
    "Democracy Dies in Darkness",
    "Welcome to Hell",
    "Screaming for Vengeance",
    "Reign in Blood",
    "The Erosion of Sanity",
    "Altars of Madness",
    "Vulgar Display of Power",
    "Seasons in the Abyss",
    "Slowly We Rot",
    "Bonded by Blood",
    "Storm of the Light’s Bane",
    "Operation: Mindcrime",
    "The Downward Spiral",
    "All Hope Is Gone",
    "Kill ’Em All",
    "Peace Sells … but Who’s Buying?"
  ];
  const { albums } = await getFromStorage("albums");
  const titles = albums ? albums.split("\n") : defaultTitles;
  const title = titles[Math.floor(Math.random() * titles.length)];
  debugger
  Array.from(
    document.querySelectorAll(".masthead-tagline a,.header-tagline")
  ).map(function(element) {
    element.innerHTML = title;
  });
})();
