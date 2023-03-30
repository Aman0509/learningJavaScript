class Product {
  constructor(title, imageUrl, price, description) {
    this.title=title;
    this.imageUrl=imageUrl;
    this.price=price;
    this.description=description;
  }
}

class ElementAttributes {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender=true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value){
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum =  this.items.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProducts() {
    console.log("Ordering is in progress...");
    console.log(this.items);
  }

  render(){
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
      <h2>Total: $${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = document.querySelector('button');
    orderButton.addEventListener('click', () => this.orderProducts());
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render(){
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
      <div>
        <img src=${this.product.imageUrl} alt=${this.product.title}>
        <div class='product-item__content'>
          <h2>${this.product.title}</h2>
          <h3>$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId){
    super(renderHookId, false);
    this.render();
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
      new Product(
        'Pillow',
        'https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038',
        19.99,
        "A soft pillow good for neck"
      ),
      new Product(
        'Carpet',
        'https://images.woodenstreet.de/image/cache/data%2Fhome-decors%2Frugs%2Frhombus-geometric-pattern-hand-tufted-woolen-carpet-6-4-feet%2Frevised%2Fupdated%2FC-1-750x650.jpg',
        89.20,
        'A good carpet'
      )
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.#products) {
      new ProductItem(product, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [new ElementAttributes('id', 'prod-list')]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
};

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app'); // class field
    new ProductList('app');
  }
}

class App {
  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();