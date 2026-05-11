function Tabzy(id) {
  const tabs = document.querySelector(id);
  tabs.onclick = function (e) {
    console.log(e.target);
  };
}

const tab = new Tabzy("#tabs");
