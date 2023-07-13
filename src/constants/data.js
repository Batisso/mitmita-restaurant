import images from './images';

const wines = [

  {
    title: 'Fetira with egg & honey',
    price: '$10.85',
    tags: 'Toasted Flatten bread with Egg, spices & honey',
  },
  {
    title: 'Chechebsa/Qinche& Dirkosh',
    price: '13.99',
    tags: 'Kita, an Ethiopian bread with spices & Butter',
  },
  {
    title: 'Foule',
    price: '12.99',
    tags: 'Fava beans seasoned with assorted spices',
  },
];

const cocktails = [
  {
    title: 'Dulet',
    price: '$18.99',
    tags: 'Minced beef, liver, onion and jalapeños',
  },
  {
    title: "Zilzil Tibs",
    price: '$16.50',
    tags: 'Finger length stripes of tender lean beef ',
  },
  {
    title: 'Quanta Firfir',
    price: '$16.99',
    tags: 'Seasoned dried beef sautéed with house spices',
  },
  
];

const awards = [
  
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    
  },
  {
    imgUrl: images.award01,
    title: 'AA Hospitality',
   
  },
  {
    imgUrl: images.award01,
    title: 'Outstanding Chef',
    
  },
  {
    imgUrl: images.award01,
    title: 'Best Restaurant Awards',
    
  }
];

export default { wines, cocktails, awards };
