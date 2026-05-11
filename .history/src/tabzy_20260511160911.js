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
Tabzy.prototype.activeTab = function (tab) {
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  tab.closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));

  console.log(tab);
};
// Tabzy.prototype.switch = function (selector) {
//   this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));
//   const a = this.tabs.filter((tab) => tab.getAttribute("href") === selector);
//   a[0].closest("li").classList.add("tab-active");
//   this.panels.forEach((panel) => (panel.hidden = true));
//   const panelhidden = document.querySelector(selector);
//   panelhidden.hidden = false;
// };
Tabzy.prototype._init = function () {
  this.activeTab(this.tabs[0]);
  this.tabs.forEach((tab) => {
    tab.onclick = (event) => {
      this._handelTabs(event, tab);
    };
  });
};
Tabzy.prototype._handelTabs = function (event, tab) {
  event.preventDefault();

  this.activeTab(tab);
};
const tab = new Tabzy("#tabs");
// tab.switch("#tab1");
