var cart = [{itemName:'bananas', itemPrice: 25}, {itemName:'rocks', itemPrice: 75}, {itemName:'salt', itemPrice: 5}]

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
  
function addToCart(item) {
 cart.push({itemName: item, itemPrice: getRandomInt(101)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  //I don't think this if statemet will work according to the lst one
  if (cart[0] === undefined) {
    return "Your shopping cart is empty."
  } else {
    let message = "In your cart, you have"
    cart.forEach(function(item, index) {
      if (cart.length === 1) {
        message += ` ${cart[index].itemName} at $${cart[index].itemPrice}.`
      } else if (index === cart.length - 1) {
        message += ` and ${cart[index].itemName} at $${cart[index].itemPrice}.`
      } else {
        message += ` ${cart[index].itemName} at $${cart[index].itemPrice},`
      }
    })
    return message
  }
}

function total() {
  var total = 0
  cart.forEach(function(item, index) {
    total += cart[index].itemPrice
  })
  return total
}

function removeFromCart(item) {
  cart.forEach(function(object, index) {
    if (object.itemName === item ) {
      cart.splice(index, 1)
      return cart
    }
  })
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === 'undefined') {
    console.log(typeof(cardNumber))
    return "Sorry, we don't have a credit card on file for you."
  } 
  console.log(cart)
  console.log(cart.splice(0, cart.length))
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
}

console.log(placeOrder(11111))
console.log(cart)


