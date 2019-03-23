defaultTitles = [
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
const getFromStorage = keys => {
  if (chrome.storage) {
    return new Promise((resolve, reject) =>
      chrome.storage.local.get(keys, resolve)
    );
  } else {
    return browser.storage.local.get(keys);
  }
};
const setToStorage = object => {
  if (chrome.storage) {
    return new Promise((resolve, reject) =>
      chrome.storage.local.set(object, resolve)
    );
  } else {
    return browser.storage.local.set(object);
  }
};
function saveOptions(e) {
  e.preventDefault();
  setToStorage({
    albums: document.querySelector("#albums").value
  });
}

function restoreOptions() {
  function setCurrentChoice({ albums }) {
    console.log(albums);
    document.querySelector("#albums").value =
      albums || defaultTitles.join("\n");
  }

  getFromStorage("albums").then(setCurrentChoice);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#albums").onchange = saveOptions;
