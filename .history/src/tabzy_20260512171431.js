function Tabzy(selector, options = {}) {
  this.container = document.querySelector(selector);
  if (!this.container) {
    console.error(`Tabzy: No container found for selector '${selector}'`);
    return;
  }
  this.tabURL = selector;

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
  this.opt = Object.assign(
    {
      remember: false,
      selector,
    },
    options,
  );
  this._originalHTML = this.container.innerHTML;
  this._init();
}

Tabzy.prototype._init = function () {
  const hash = location.search;
  console.log(hash);

  const tab =
    (this.opt.remember &&
      hash &&
      this.tabs.find((tab) => tab.getAttribute("href") === hash)) ||
    this.tabs[0];

  this.activateTab(tab);
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
Tabzy.prototype.activateTab = function (tab) {
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  tab.closest("li").classList.add("tab-active");

  this.panels.forEach((panel) => (panel.hidden = true));

  const index = this.tabs.indexOf(tab);
  if (index !== -1) {
    this.panels[index].hidden = false;
  }
  if (this.opt.remember) {
    const params = new URLSearchParams(location.search);

    const targetId = tab.getAttribute("href").replace("#", "");

    const queryId = this.tabURL.replace("#", "");

    params.set(queryId, targetId);
    history.replaceState("null", "null", "?" + params);
  }
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
const tab = new Tabzy("#tabs", {
  remember: true,
});
const tab2 = new Tabzy("#tabs2", {
  remember: true,
});
// tab.switch("#tab1");
// tab.destroy();
