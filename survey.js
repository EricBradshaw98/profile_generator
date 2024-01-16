// Focus on the following:

// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question("What's your name?' Nicknames are also acceptable", (answer) => {
profile.name = answer
  rl.question("What's an activity you like doing?", (answer) => {
    profile.activity = answer
    rl.question("What do you listen to while doing that?", (answer) => {profile.listen = answer
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {profile.meal = answer
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {profile.eat = answer
          rl.question("Which sport is your absolute favourite?", (answer) => {profile.sport = answer
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {profile.superpower = answer

  




  console.log(`Hi my name is ${profile.name}. My favourite activity is ${profile.activity}. When I am doing this, I listen to ${profile.listen}. I love to eat ${profile.meal}. My favourite thing to eat during this is ${profile.eat}. I love to play ${profile.sport} and my superpower is ${profile.superpower}.`);




  rl.close();
});
});
});
});
});
});
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

//Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.