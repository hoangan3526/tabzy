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
Tabzy.prototype._init = function () {
  const tabActive = this.tabs[0];
  tabActive.closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));
  this.tabs.forEach((tab) => {
    tab.onclick = (event) => {
      this._handelTabs(event, tab);
    };
  });
  const currentPanel = this.panels[0];
  currentPanel.hidden = false;
};
Tabzy.prototype._handelTabs = function (event, tab) {
  event.preventDefault();
  this.tabs.forEach((tab) => {
    tab.closest("li").classList.remove("tab-active");
  });
  tab.closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => {
    panel.hidden = true;
    console.log(panel);

    const element = document.querySelector(panel.getAttribute("href"));
    console.log(element);
  });
};
const tab = new Tabzy("#tabs");
