export const products = [
  // Kafe
  { id: "001", name: "Espresso", price: 150, type: "kafa" },
  { id: "002", name: "Americano", price: 180, type: "kafa" },
  { id: "003", name: "Cappuccino", price: 220, type: "kafa" },
  { id: "004", name: "Latte", price: 250, type: "kafa" },
  { id: "005", name: "Mocha", price: 270, type: "kafa" },
  { id: "006", name: "Macchiato", price: 200, type: "kafa" },
  { id: "007", name: "Flat White", price: 230, type: "kafa" },
  { id: "008", name: "Turkish Coffee", price: 170, type: "kafa" },
  { id: "009", name: "Irish Coffee", price: 300, type: "kafa" },
  { id: "010", name: "Affogato", price: 320, type: "kafa" },

  // Ceđeni sokovi
  { id: "011", name: "Pomorandža", price: 250, type: "sok" },
  { id: "012", name: "Limunada", price: 200, type: "sok" },
  { id: "013", name: "Jabuka", price: 230, type: "sok" },
  { id: "014", name: "Grejp", price: 270, type: "sok" },
  { id: "015", name: "Šargarepa", price: 220, type: "sok" },
  { id: "016", name: "Ananas", price: 280, type: "sok" },
  { id: "017", name: "Mango", price: 300, type: "sok" },
  { id: "018", name: "Cvekla", price: 260, type: "sok" },
  { id: "019", name: "Jagoda", price: 290, type: "sok" },
  { id: "020", name: "Mix Vitamin", price: 350, type: "sok" },

  // Kolači
  { id: "021", name: "Cheesecake", price: 400, type: "kolac" },
  { id: "022", name: "Tiramisu", price: 420, type: "kolac" },
  { id: "023", name: "Čokoladna torta", price: 380, type: "kolac" },
  { id: "024", name: "Pita od jabuka", price: 350, type: "kolac" },
  { id: "025", name: "Baklava", price: 330, type: "kolac" },
  { id: "026", name: "Brownie", price: 370, type: "kolac" },
  { id: "027", name: "Muffin", price: 300, type: "kolac" },
  { id: "028", name: "Panakota", price: 410, type: "kolac" },
  { id: "029", name: "Mille-feuille", price: 430, type: "kolac" },
  { id: "030", name: "Profiterole", price: 450, type: "kolac" },

  // Sendviči
  { id: "031", name: "Club Sandwich", price: 500, type: "sendvic" },
  { id: "032", name: "Panini", price: 480, type: "sendvic" },
  { id: "033", name: "Toast sa sirom", price: 350, type: "sendvic" },
  { id: "034", name: "Burger", price: 600, type: "sendvic" },
  { id: "035", name: "Veggie Wrap", price: 450, type: "sendvic" },
  { id: "036", name: "Reuben Sandwich", price: 520, type: "sendvic" },
  { id: "037", name: "Chicken Sandwich", price: 550, type: "sendvic" },
  { id: "038", name: "Baguette sa lososom", price: 580, type: "sendvic" },
  { id: "039", name: "Kroasan sendvič", price: 500, type: "sendvic" },
  { id: "040", name: "Ciabatta sendvič", price: 530, type: "sendvic" },

  // Sladoledi
  { id: "041", name: "Vanila", price: 250, type: "sladoled" },
  { id: "042", name: "Čokolada", price: 270, type: "sladoled" },
  { id: "043", name: "Jagoda", price: 260, type: "sladoled" },
  { id: "044", name: "Pistaći", price: 280, type: "sladoled" },
  { id: "045", name: "Karamel", price: 300, type: "sladoled" },
  { id: "046", name: "Lešnik", price: 290, type: "sladoled" },
  { id: "047", name: "Menta-čokolada", price: 310, type: "sladoled" },
  { id: "048", name: "Kokos", price: 270, type: "sladoled" },
  { id: "049", name: "Mango", price: 320, type: "sladoled" },
  { id: "050", name: "Borovnica", price: 330, type: "sladoled" }
];

export const buttons = [
  { name: 'Kafe', type: 'kafa' },
  { name: 'Cedjeni sokovi', type: 'sok' },
  { name: 'Kolaci', type: 'kolac' },
  { name: 'Sendvici', type: 'sendvic' },
  { name: 'Sladoled', type: 'sladoled' }
];

export function selectProducts(buttonType) {
  let newProducts = [];
  products.forEach((product) => {
    if (product.type === buttonType) {
      newProducts.push(product);
    }
  });

  return newProducts;
}

const startingValues = [
  { id: "001", name: "Espresso", price: 150, type: "kafa" },
  { id: "002", name: "Americano", price: 180, type: "kafa" },
  { id: "003", name: "Cappuccino", price: 220, type: "kafa" },
  { id: "004", name: "Latte", price: 250, type: "kafa" },
  { id: "005", name: "Mocha", price: 270, type: "kafa" },
  { id: "006", name: "Macchiato", price: 200, type: "kafa" },
  { id: "007", name: "Flat White", price: 230, type: "kafa" },
  { id: "008", name: "Turkish Coffee", price: 170, type: "kafa" },
  { id: "009", name: "Irish Coffee", price: 300, type: "kafa" },
  { id: "010", name: "Affogato", price: 320, type: "kafa" }
];

export function renderStartingMenu() {
  let innerValue = '';
  startingValues.forEach((value) => {
    const html = `
    <div class="menu-item">
      <p class="item-name">${value.name}</p>
      <p class="item-price">${value.price} RSD</p>
    </div>
  `;

    innerValue += html;

    document.querySelector('.js-menu-items-holder').innerHTML = innerValue;
  });
} 