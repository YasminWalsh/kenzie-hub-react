const storeData = (obj) => {
  localStorage.setItem("dataUser", JSON.stringify(obj));
};

const getData = () => {
  const dataString = localStorage.getItem("dataUser");
  const dataObj = JSON.parse(dataString);
  return dataObj;
};

export { storeData, getData };
