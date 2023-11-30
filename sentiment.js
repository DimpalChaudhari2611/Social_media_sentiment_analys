const Sentiment = require('sentiment');
const sentiment = new Sentiment();

// Sample social media data (replace this with your own data)
const socialMediaPosts = [
  "I love this platform! It's amazing!",
  "Feeling neutral about the new update.",
  "Not happy with the service provided.",
];

// Analyzing sentiment for each post
socialMediaPosts.forEach(post => {
  const result = sentiment.analyze(post);
  console.log(`Post: "${post}" - Sentiment Score: ${result.score}`);
});


Remember to install the sentiment library using npm before running this code:

bash
npm install sentiment
