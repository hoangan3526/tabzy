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
  // ==========================================
  // BƯỚC PHÒNG THỦ: Kiểm tra xem index có tồn tại không
  // ==========================================
  if (!this.tabs[index]) {
    console.warn(`Tabzy: Không có tab nào ở vị trí số ${index}`);
    return; // Thoát hàm luôn, không chạy xuống dưới để tránh lỗi sập trang
  }

  // 1. Gỡ mác active của tất cả các tab
  this.tabs.forEach((tab) => tab.closest("li").classList.remove("tab-active"));

  // 2. Đeo mác active cho tab được chọn
  this.tabs[index].closest("li").classList.add("tab-active");

  // 3. Ẩn tất cả panels
  this.panels.forEach((panel) => (panel.hidden = true));

  // 4. Hiện panel được chọn
  this.panels[index].hidden = false;
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
tab.activeTab(3);
