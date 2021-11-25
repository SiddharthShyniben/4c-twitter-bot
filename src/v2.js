const TwitterApi = require('twitter-api-v2').default;

const client = new TwitterApi({
	appKey: '',
	appSecret: '',
	accessToken: '',
	accessSecret: ''
});

const retweet = async search => {
	console.log('retweet')
	const tweets = await client.v2.search(search, {}).catch(() => {});

	for await (const tweet of tweets) {
		if (tweet.text.startsWith('RT @') && tweet.text.includes('#4ccommunity')) {
			continue;
		}
	
		await client.v2.retweet('Fix this', tweet.id).catch(() => {});
	}
};

setInterval(() => retweet('#4CCommunity'), 60000);
