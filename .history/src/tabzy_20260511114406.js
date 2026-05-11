function Tabzy(selector) {
  this.container = document.querySelector(selector);

  this.tabs = Array.from(this.container.querySelectorAll("li a"));
  if (!this.tabs.length) {
    console.error("Tabs  is not containner ");
    return;
  }
  this.panel = this.tabs.map((panel) => {
    panel.getAttribute("href");
  });
  console.log(this.panel);
}

const tab = new Tabzy("#tabs");
