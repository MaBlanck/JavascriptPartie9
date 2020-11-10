let tweets = document.querySelectorAll('p');
for( i = 0; i < tweets.length; i++){
    var tweet = tweets[i];
    tweet.setAttribute('data-inline-tweet', "")
    tweet.setAttribute('data-inline-tweet-tags', "")
}