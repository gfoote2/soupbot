const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

function randMsg(message) {
  var result = Math.floor((Math.random() * 4) + 1) ;

  if(result === 1){
    message.channel.send("What do you mean you're AT SOUP?!");
  }
  if(result === 2){
    message.channel.send("WHY ARE YOU BUYING CLOTHES AT THE SOUP STORE?!!?!");
  }
  if(result === 3){
    message.channel.send("What do you mean there's only soup?");
  }
  if(result === 4){
    message.channel.send("Get out of the soup isle!");
  }
};


client.on('ready', () => {
  console.log("I'm at soup!");
});

/*
client.on("message", (message) => {
  if(message.author.bot) return;

  if (message.content.toLowerCase().includes("soup")){
    randMsg(message);
  }
});
*/


client.on("message", (message) => {
  if(message.author.bot) return;

  if (message.content.toLowerCase().includes("i cant find them") || message.content.toLowerCase().includes("i can't find them")){
    message.channel.send("What do you mean, *you can't find them*?");
  }

  else if (message.content.toLowerCase().includes("it means theres only soup") || message.content.toLowerCase().includes(" it means, theres only soup") || message.content.toLowerCase().includes("it means there's only soup") || message.content.toLowerCase().includes("it means, there's only soup")){
    message.channel.send("WELL THEN GET OUT OF THE SOUP ISLE!");
  }

  else if (message.content.toLowerCase().includes("theres only soup") || message.content.toLowerCase().includes("there's only soup")){
    message.channel.send("What do you mean, *there's only soup*?");
  }

  else if (message.content.toLowerCase().includes("theres more soup") || message.content.toLowerCase().includes("there's more soup")){
    message.channel.send("**What do you mean, *there's more soup*?!**");
  }

  else if (message.content.toLowerCase().includes("theres just more soup") || message.content.toLowerCase().includes("there's just more soup")){
    message.channel.send("Go into the next isle!");
  }

  else if (message.content.toLowerCase().includes("theres still soup") || message.content.toLowerCase().includes("there's still soup")){
    message.channel.send("WHERE ARE YOU RIGHT NOW?");
  }

  else if (message.content.toLowerCase().includes("i mean im at soup") || message.content.toLowerCase().includes("i mean, im at soup") || message.content.toLowerCase().includes("i mean, i'm at soup") || message.content.toLowerCase().includes("i mean i'm at soup")){
    message.channel.send("WHAT STORE ARE YOU IN?!");
  }

  else if (message.content.toLowerCase().includes("im at soup") || message.content.toLowerCase().includes("i'm at soup")){
    message.channel.send("WHAT DO YOU MEAN, *YOU'RE AT SOUP*?!");
  }

  else if (message.content.toLowerCase().includes("im at the soup store") || message.content.toLowerCase().includes("i'm at the soup store")){
    message.channel.send("WHY ARE YOU BUYING CLOTHES AT THE SOUP STORE?!!?!");
  }



});

client.login(config.token);
