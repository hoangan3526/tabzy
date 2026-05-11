function Tabzy(id) {
  const tabs = document.querySelector(id);
  tabs.array.forEach((element) => {
    console.log(element);
  });
}

const tab = new Tabzy("#tabs");
