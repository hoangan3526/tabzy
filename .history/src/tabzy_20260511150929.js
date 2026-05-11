function Tabzy(selector) {
  this.container = document.querySelector(selector);

  this.tabs = Array.from(this.container.querySelectorAll("li a"));
  if (!this.tabs.length) {
    console.error("Tabs  is not containner ");
    return;
  }
  this.panels = this.tabs
    .map((tabs) => {
      const panel = document.querySelector(tabs.getAttribute("href"));
      if (!panel) {
        console.error("khong co panl ");
      }
      return panel;
    })
    .filter(Boolean);
  if (this.tabs.length !== this.panels.length) return;
  this._init();
}
Tabzy.prototype.activeTable = function (index) {
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  this.tabs[index].closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));

  this.panels[index].hidden = false;
};

Tabzy.prototype._init = function () {
  this.activeTable(0);
  this.tabs.forEach((tab) => {
    tab.onclick = (event) => {
      this._handelTabs(event, tab);
    };
  });
};
Tabzy.prototype._handelTabs = function (event, index) {
  event.preventDefault();

  this.activeTable(index);
};
const tab = new Tabzy("#tabs");
tab.activeTable(3);
