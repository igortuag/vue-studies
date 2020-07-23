var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green.jpg",
    description: "Image of socks",
    url: "./assets/vmSocks-green.jpg",
    toolTip: "Socks",
    isActive: true,
    isStyled: true,
    isDisabled: false,
    inventory: 8,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue.jpg",
      },
    ],
    sizes: ["Small", "Medium", "Large"],
    cart: 0,
  },
  methods: {
    addToCart () {
      this.cart += 1;
    },
    removeToCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  },
});
