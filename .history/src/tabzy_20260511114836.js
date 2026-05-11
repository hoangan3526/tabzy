function Tabzy(selector) {
  this.container = document.querySelector(selector);

  this.tabs = Array.from(this.container.querySelectorAll("li a"));
  if (!this.tabs.length) {
    console.error("Tabs  is not containner ");
    return;
  }
  hastab = false;
  this.panels = this.tabs.map((tabs) => {
    const panel = document.querySelector(tabs.getAttribute("href"));
    if (!panel) {
      console.error("khong co panl ");
      hastab = true;
    }
    return panel;
  });
  if (!hastab) {
    return;
  }
  console.log(this.panel);
}

const tab = new Tabzy("#tabs");
