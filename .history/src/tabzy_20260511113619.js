function Tabzy(selector) {
  this.container = document.querySelector(selector);

  this.tabs = this.container.querySelector("li a");
  console.log(this.tabs);
}

const tab = new Tabzy("#tabs");
