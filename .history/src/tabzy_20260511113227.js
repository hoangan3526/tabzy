function Tabzy(selector) {
  this.tabs = document.querySelector(selector);

  this.element = document.querySelector(this.tabs.getAttributes("href"));
  console.log(this.element);
}

const tab = new Tabzy("#tabs");
