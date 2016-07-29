// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
    'facebookAuth' : {
        'clientID'      : '204537145813-4gi65ic07ceiasrm6ul3lt26ja23nme8.apps.googleusercontent.com', // your App ID
        'clientSecret'  : 'PpCXpzW2bxfFjh2y5bcSkrKe', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },
    
    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },
    
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'PpCXpzW2bxfFjh2y5bcSkrKe',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};