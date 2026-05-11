function Tabzy(selector) {
  this.container = document.querySelector(selector);

  this.tabs = this.container.querySelectorAll("li a");
  console.log(this.tabs);
}

const tab = new Tabzy("#tabs");
