const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 250; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10.98;
		const camp = new Campground({
			author: '600af22416e00c171055f6f2',
			description: `${sample(
				places
			)} is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.`,
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			geometry: {
				type: 'Point',
				coordinates: [cities[random1000].longitude, cities[random1000].latitude],
			},
			title: `${sample(descriptors)} ${sample(places)}`,
			price,
			images: [
				{
					url: 'https://res.cloudinary.com/acieffe/image/upload/v1611840199/YelpCamp/q8ahhivxanm6ousvcgea.jpg',
					filename: 'YelpCamp/q8ahhivxanm6ousvcgea',
				},
				{
					url: 'https://res.cloudinary.com/acieffe/image/upload/v1611840200/YelpCamp/dslnijmovvdugs2vn2vs.jpg',
					filename: 'YelpCamp/dslnijmovvdugs2vn2vs',
				},
				{
					url: 'https://res.cloudinary.com/acieffe/image/upload/v1611840200/YelpCamp/moaghumbtcdq97ivl1uo.jpg',
					filename: 'YelpCamp/moaghumbtcdq97ivl1uo',
				},
			],
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
