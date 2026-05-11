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

  const panel = document.querySelector(tab.getAttribute("href"));
  panel.hidden = false;
};
Tabzy.prototype.switch = function (input) {
  let tabToActive = null;
  if (typeof input === "string") {
    this.tabs.forEach((tab) =>
      tab.closest("li").classList.remove("tab-active"),
    );
    tabToActive = this.tabs.find((tab) => tab.getAttribute("href") === input);
  } else if (this.tabs.includes(input)) {
    tabToActive = input;
  }
  if (!tabToActive) return console.error("errroror");

  this.activeTab(tabToActive);
};
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
tab.switch(`a[href ="#tab1"]`);
