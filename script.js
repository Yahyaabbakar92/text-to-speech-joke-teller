const audio = document.getElementById('audio');
const button = document.getElementById('button');

function tellJoke(joke) {
	VoiceRSS.speech({
		key: '5d19d5c569874af3bbdbc8a4415cebe0',
		src: joke,
		hl: 'en-us',
		v: 'Linda',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false,
	});
}

// Get joke from api
async function getJoke() {
	const jokeUrl = 'https://v2.jokeapi.dev/joke/Any';
	let joke = '';

	try {
		const response = await fetch(jokeUrl);
		const data = await response.json();

		if (data.setup) {
			joke = `${data.setup} ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		tellJoke(joke);
	} catch (error) {
		console.log('Oh Oh. Error: ', error);
	}
}

// Event Listeners
button.addEventListener('click', getJoke);
