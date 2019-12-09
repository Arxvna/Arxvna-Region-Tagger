function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    wfe: document.querySelector("#wfe").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#wfe").value = result.wfe || "A raid has done happened";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get("wfe");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);