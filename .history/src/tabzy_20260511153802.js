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
Tabzy.prototype.activeTab = function (index) {
  if (!this.tabs[index]) {
    console.warn(`Tabzy: Không có tab nào ở vị trí số ${index}`);
    return;
  }

  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  this.tabs[index].closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));

  this.panels[index].hidden = false;
};
Tabzy.prototype.switch = function (selector) {
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));
  const a = this.tabs.filter((tab) => tab.getAttribute("href") === selector);
  console.log(a.closest("li"));
};
Tabzy.prototype._init = function () {
  this.activeTab(0);
  this.tabs.forEach((tab, index) => {
    tab.onclick = (event) => {
      this._handelTabs(event, index);
    };
  });
};
Tabzy.prototype._handelTabs = function (event, index) {
  event.preventDefault();

  this.activeTab(index);
};
const tab = new Tabzy("#tabs");
tab.switch("#tab3");
