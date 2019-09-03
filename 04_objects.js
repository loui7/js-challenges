/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TEST: npm test

*/

const drinkShop = {
  title: 'My Fancy Drink Shop',
  products: [
    {
      id: 1,
      title: 'Coca Cola',
      price: 4.32,
    },
    {
      id: 2,
      title: 'Fanta',
      price: 4.22,
    },
    {
      id: 3,
      title: 'Lift',
      price: 4.11,
    },
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000,
      },
      orders: [
        {
          id: 61721,
          status: 'delivered',
          items: [
            {
              productId: 1,
              qty: 2,
            },
            {
              productId: 3,
              qty: 1,
            },
            {
              productId: 2,
              qty: 3,
            },
          ],
          notes: 'Please leave on doorstep',
        },
        {
          id: 82721,
          status: 'delivered',
          items: [
            {
              productId: 4,
              qty: 100,
            },
          ],
          notes: 'Really enjoying coke ATM',
        },
      ],
    },
  },
};
const shop = {
  // Return the shop title (you have access to the shop object from here)
  shopTitle: () => drinkShop.title,

  // Return an uppercase version of string
  upperCase: (string) => string.toUpperCase(),

  // Return an uppercase shop title.
  upperCaseShopTitle: () => shop.upperCase(shop.shopTitle()),

  // Return a specific product object
  productById: (productId) => drinkShop.products
    .find((product) => product.id === productId),

  // given a product id, return its cost. DRY ;)
  productCost: (productId) => shop.productById(productId).price,

  // return(drinkShop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
  // Given a user's email, return their address in the format:
  // streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000
  formatAddress: (email) => {
    const {
      streetNumber, street, city, postcode,
    } = drinkShop.customers[email].address;
    return `${streetNumber} ${street}, ${city}, ${postcode}`;
  },

  // Return the total cost of an order.
  totalCost: (email, orderId) => {
    const order = drinkShop.customers[email].orders
      .find((ord) => ord.id === orderId);
    return order.items
      .reduce(((total, item) => total + (shop.productCost(item.productId) * item.qty)), 0);
  },

  // Add a product to the shop.
  addProduct: (id, title, price) => {
    drinkShop.products.push({ id, title, price });
    return true;
  },

  // Update the price of a specific product
  updateProductPrice: (id, newPrice) => {
    console.log('id', id);
    shop.productById(id).price = newPrice;
    return true;
  },
};

module.exports = shop;
