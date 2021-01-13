//TODO: Add Jezz Bezos for seattle property
//Figure out picture with S3
const {db, Hosts, Locations, ToKnow} = require('./index.js');

const hosts = [
  {
    name: 'Dwayne Johnson',
    verified: true,
    joinDate: 'Tue Mar 24 2015 18:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Hello jabroni! I am a former professionial wrestler, Hollywood mega-star, and full-time Airbnb host. When not hosting my mansions for you, I am all around the world, on tv/movie sets, and defeated evil geniuses. Due to my crazy lifestyle, I unfortunately can\'t be there for introducing you to my pad, but i\'m sure you\'ll live in luxury! Make yourself at home, live the life of a hollywood star, just like you are and kick some candy a**!',
    reviews: 978,
    contact: {
      email: 'theRock@jabroni.com',
      phone: '555-123-1273',
    },
    response: {
      rate: 100,
      time: 'within an hour'
    },
    properties: ['Hollywood lifeStyle of luxury! Manion for a star', 'Jabroni, it\'s the Rock cave', 'The real Hollywood of Florida']
  },
  {
    name: 'Elon Musk',
    verified: true,
    joinDate: 'Fri Jul 28 2017 20:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Welcome to my, uh, Airbnb! As everything I did, I strive for almost the best in the world. If it\'s a bit error prone, then that\'s ok. As such, my Airbnb\'s are in the 98% of the best Airbnb\'s, between Bill and I. As I travel the world, I may stop in and crash during your stay. So always be prepared for partying! Feel free to use any cars that may be in the garage, but just fill them back up with gas... ;)',
    reviews: 3762,
    contact: {
      email: 'populateMars@tesla.com',
      phone: '255-739-9227',
    },
    response: {
      rate: 98,
      time: 'within a few hours'
    },
    properties: ['Model H is for house', 'Giga Mansion of Beverly Hills', 'First house on Mars - Pre-book now!!!']
  },
  {
    name: 'Steve Schneider',
    verified: false,
    joinDate: 'Wed Sept 5 2018 18:00:00 GMT-0600 (Mountain Daylight Time)',
    desc: 'Welcome everyone! My name is Steve and I hope you find my location spectacular! After moving to the Bay Area for family reasons, I quickyl found out this BREATHTAKING house! I knew I had to have it, but as my family grew from 2 to 10 kids, our house just couldn\'t keep up. Instead of selling, I decided to offer it up for tourists and vacationers to truly enjoy the best property (in my mind!) of the Bay Area! Enjoy!!!! (Please don\'t break anything.)',
    reviews: 43,
    contact: {
      email: 'steve@ss.com',
      phone: '555-123-9876',
    },
    response: {
      rate: 83,
      time: 'within a day'
    },
    properties: ['Bay for days! The best view in the Bay']
  }
];

const locations = [
  {
    city: 'Hollywood',
    state: 'California',
    country: 'United States'
  },
  {
    city: 'Austin',
    state: 'Texas',
    country: 'United States'
  },
  {
    city: 'Oakland',
    state: 'California',
    country: 'United States'
  }
];

const toKnow = [
  {
    name: 'Hollywood lifeStyle of luxury! Manion for a star',
    rules: {
      house: ['Self check-in with lockbox', 'Not suitable for children and infants', 'No pets', 'No smoking', 'Only 4 visitors'],
      additional: ['No Film Productions Without Permission', 'No jumping off the balcony into the pool', 'No loud music after 2:00 AM']
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['Must climb stairs - There are 5 stories. The elevator is broken, so you must climb stairs to access bedrooms, kitchen, and basketball court.', 'Security Deposit - if you damage the home, you may be charged up to $500']
    },
    cancelPolicy: ['Free cancellation for 48hrs', 'After that, cancel before 4:00pm on Feb 12 to get 50% back, minus the first night and service fee']
  },
  {
    name: 'Model H is for house',
    rules: {
      house: ['Self check-in with lockbox', 'Checkout: 11:00 AM', 'Not suitable for children and infants', 'Parties only', 'No pets'],
      additional: ['No Jeff Bezos']
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['No Jeff Bezos - Do not allow Jeff Bezos on to the property', 'Security Deposit - if you damage the home, you may be charged to throw an epic party on my birthday']
    },
    cancelPolicy: ['Free cancellation for 12hrs', 'After that, cancel before 12:00pm on Apr 3 to get 30% back, minus the service fee']
  },
  {
    name: 'Bay for days! The best view in the Bay',
    rules: {
      house: ['Check-in: 4:00 PM - 8:00 PM', 'No smoking', 'No pets', 'No parties or events', 'No visitors'],
      additional: ['No loud noise after 11 PM', 'No Candle/Fire Use', 'No Film Productions Without Permission']
    },
    health: {
      safety: ['Committed to Airbnb\'s enhanced cleaning process.', 'During the COVID-19 pandemic, all hosts and guests must review and follow Airbnb\'s social-distancing and other COVID-19-related guidelines.', 'Carbon monoxide alarm', 'Smoke alarm'],
      acknowledge: ['Security Deposit - if you damage the home, you may be charged up to $125']
    },
    cancelPolicy: ['Free cancellation from 1 week of booking', 'After that, cancel before 4:00pm on Feb 27 to get 50% back, minus the service fee']
  }
];

const seedDB = () => {
  Hosts.create(hosts)
    .then(() => Locations.create(locations))
    .then(() =>ToKnow.create(toKnow))
    .then(db.disconnect);
}

seedDB();