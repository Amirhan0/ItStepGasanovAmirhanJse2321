class LocalStorageUtil {
  constructor(keyName) {
    this.keyName = keyName;
  }
  getProducts() {
    const products = JSON.parse(localStorage.getItem(this.keyName)) || [];
    return products;
  }
  putProducts(products) {
    localStorage.setItem(this.keyName, JSON.stringify(products));
  }
}
const localStorageUtil = new LocalStorageUtil("guitars");
