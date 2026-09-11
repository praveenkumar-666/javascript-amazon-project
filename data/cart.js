export const cart = []

export function addToCart(productId){

  let matchingItem 

  let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
  let quantityValue = Number(quantitySelector.value)
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem
      }
    })
      if(matchingItem){
        matchingItem.quantity += quantityValue
      }else{
        cart.push({
        productId : productId,
        quantity : quantityValue
    })}
}