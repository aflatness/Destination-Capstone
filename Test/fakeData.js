const toKnow = {
  name: 'Hollywood lifeStyle of luxury! Manion for a star',
  rules: {
    house: ['Self check-in with lockbox', 'Not suitable for children and infants', 'No pets', 'No smoking', 'Only 4 visitors'],
    additional: ['No Film Productions Without Permission', 'No jumping off the balcony into the pool', 'No loud music after 2:00 AM'],
  },
  health: {
    safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
    acknowledge: ['Must climb stairs - There are 5 stories. The elevator is broken, so you must climb stairs to access bedrooms, kitchen, and basketball court.', 'Security Deposit - if you damage the home, you may be charged up to $500'],
  },
  cancelPolicy: ['Free cancellation for 48hrs', 'After that, cancel before 4:00pm on Feb 12 to get 50% back, minus the first night and service fee'],
};
const locations = {
  city: 'Hollywood',
  state: 'California',
  country: 'United States',
  desc: 'Hollywood is a trendy area known for its high-energy nightlife. The fabled Sunset Strip features the Chateau Marmont, a swanky celebrity hideaway, plus comedy clubs and live music venues like the legendary Whiskey a Go Go. Santa Monica Boulevard, awash in rainbow flags, is home to a number of gay bars, dance clubs and shops. Hollywood also offers some of the city’s most buzzworthy restaurants.\n\nWeHo: Located in the heart of metropolitan Los Angeles, at 1.9 square miles, West Hollywood is a robust economic and cultural center instilled with idealism and creativity. The City of West Hollywood is filled with rich history. People from all over the globe visit West Hollywood for its iconic destinations such as The Sunset Strip for its unparalleled historical connection to music, entertainment, architecture, fashion, and culture-making; for Santa Monica Boulevard’s historic LGBT destinations and entertainment establishments; and for the Design District’s shopping, galleries, and restaurants.',
};
const hosts = {
  name: 'Dwayne Johnson',
  verified: true,
  photo: 'https://fechostinfo.s3-us-west-1.amazonaws.com/dwayneJohnson',
  joinDate: 'Tue Mar 24 2015 18:00:00 GMT-0600 (Mountain Daylight Time)',
  desc: 'Hello jabroni! I am a former professionial wrestler, Hollywood mega-star, and full-time Airbnb host. When not hosting my mansions for you, I am all around the world, on tv/movie sets, and defeated evil geniuses. Due to my crazy lifestyle, I unfortunately can\'t be there for introducing you to my pad, but i\'m sure you\'ll live in luxury! Make yourself at home, live the life of a hollywood star, just like you are and kick some candy a**!',
  reviews: 978,
  contact: {
    email: 'theRock@jabroni.com',
    phone: '555-123-1273',
  },
  response: {
    rate: 100,
    time: 'within an hour',
  },
  properties: ['Hollywood lifeStyle of luxury! Manion for a star', 'Jabroni, it\'s the Rock cave', 'Cabin near seattle, the getaway you need!'],
  messages: [],
};

module.exports = {
  hosts, locations, toKnow,
};
