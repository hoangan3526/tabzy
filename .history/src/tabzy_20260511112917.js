function Tabzy(selector) {
  this.tabs = document.querySelector(selector);
  if (!tabs) {
    return console.error("loi roi");
  }
}

const tab = new Tabzy("#tabs");
