console.log('worked');

const hotDog = {
    id: 2379,
    name: 'Хот-дог куриный',
    price: '79 ₽',
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?',
    
};

const photoEl = document.getElementById('photo-1');
    photoEl.src = hotDog.photoUrl;
const nameEl = document.getElementById('name');
    nameEl.textContent = hotDog.name;
const priceEl = document.getElementById('price');
    priceEl.textContent = hotDog.price;
  


const cheeseburgerDeLuxe = {
        id: 2382,
        name: 'Чизбургер Де Люкс',
        price: '124 ₽',
        photoCheeseburgerDeLuxeUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?',
        
    };
    
const photoCheeseburgerDeLuxeEl = document.getElementById('photo-2')
    photoCheeseburgerDeLuxeEl.src = cheeseburgerDeLuxe.photoCheeseburgerDeLuxeUrl;
const nameCheeseburgerDeLuxeEl = document.getElementById('name-2');
     nameCheeseburgerDeLuxeEl.textContent = cheeseburgerDeLuxe.name;
const priceCheeseburgerDeLuxeEl = document.getElementById('price-2');
    priceCheeseburgerDeLuxeEl.textContent = cheeseburgerDeLuxe.price;
        
      

