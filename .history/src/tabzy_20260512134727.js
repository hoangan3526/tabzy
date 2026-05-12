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
  this._originalHTML = this.container.innerHTML;
  this._init();
}
Tabzy.prototype.activateTab = function (tab) {
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  tab.closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));

  const panel = document.querySelector(tab.getAttribute("href"));
  panel.hidden = false;
  history.replaceState(null, null, tab.getAttribute("href"));
};
Tabzy.prototype.switch = function (input) {
  let tabToActivate = null;
  if (typeof input === "string") {
    tabToActivate = this.tabs.find((tab) => tab.getAttribute("href") === input);
  } else if (this.tabs.includes(input)) {
    tabToActivate = input;
  }
  if (!tabToActivate) return console.error("errroror");

  this.activateTab(tabToActivate);
};
Tabzy.prototype._init = function () {
  this.activateTab(this.tabs[0]);
  this.tabs.forEach((tab) => {
    tab.onclick = (event) => {
      this._handelTabs(event, tab);
    };
  });
};
Tabzy.prototype._handelTabs = function (event, tab) {
  event.preventDefault();

  this.activateTab(tab);
};
Tabzy.prototype.destroy = function () {
  this.container.innerHTML = this._originalHTML;
  this.panels.forEach((panel) => (panel.hidden = false));
  this.container = null;
  this.tabs = null;
  this.panels = null;
};
const tab = new Tabzy("#tabs");
// tab.switch("#tab1");
// tab.destroy();
