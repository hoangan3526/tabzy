function Tabzy(id) {
  const tabs = document.querySelector(id);
  tabs.onclick = (e) => {
    console.log(e.target);
  };
}

const tab = new Tabzy("#tabs");
