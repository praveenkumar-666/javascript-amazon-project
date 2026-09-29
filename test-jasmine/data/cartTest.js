import { addToCart, cart, loadFromStorage } from "../../data/cart.js";


describe('test suite : Add to Cart',()=>{
    it('add an existing product to cart',()=>{

    })

    it('adds a new product to the cart', () => {

    spyOn(localStorage,'setItem')
   
    spyOn(localStorage, 'getItem').and.callFake(() => {
     
      return JSON.stringify([]);
      
    });
   

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
      
})

 })
 

