const helpCommands = {
    "help": "?help <number, contact, pornhub, fact, dadjoke, time, exchange, convert, rule, seed, 8ball, ping, bestping, worstping, averageping, namemc, firstmsg, lastmsg, msgcount, popbob, jared2013, record, mcfact, ud, calc>",
    // "help": "?help <discord, setdiscord, contact, pornhub, 1337x, fact, dadjoke, time, exchange, convert, rule, seed, 8ball, ping, bestping, worstping, averageping, namemc, firstmsg, lastmsg, msgcount, popbob, jared2013, record, mcfact, ud, calc>",
    // "discord": "?discord <username> ≫ Get someone's Discord tag.",
    // "setdiscord": "?setdiscord <discord tag> ≫ Set your Discord tag so people can get in touch with you.",
    "number": "?number <number> ≫ Get a random fact about a number.",
    "contact": "?contact ≫ Returns how to get in touch with the bot developer.",
    "pornhub": "?pornhub (?ph) <search term> ≫ Search PornHub.",
    "tpb": "?thepiratebay (?tpb) <search term> ≫ Search The Pirate Bay. (disabled due to block)",
    // "1337x": "?1337x <search term> ≫ Search 1337x.",
    "fact": "?fact ≫ Print a random fact.",
    "dadjoke": "?fact ≫ Dad joke.",
    "time": "?time <region> ≫ Tells the time in a specified location.",
    "exchange": "?exchange <amount> <from currency> <to currency> ≫ Convert currency.",
    "convert": "?convert <amount> <from unit> <to unit> ≫ Convert units.",
    "rule": "?rule <1-47> ≫ Returns a specific rule of the internet.",
    "seed": "?seed ≫ Get the server seed.",
    "8ball": "?8ball <question> ≫ Ask the magic 8 ball something.",
    "ping": "?ping (?p) <username*> ≫ Show someone's ping. *username is optional*",
    "bestping": "?bestping ≫ Show who has the lowest ping.",
    "worstping": "?worstping (?wp) ≫ Show who has the highest ping.",
    "averageping": "?averageping (?ap) ≫ Show the average player ping.",
    "namemc": "?namemc <username> ≫ Get username history for a player.",
    "firstmsg": "?first <username> ≫ Prints the first recorded message a player sent.",
    "lastmsg": "?first <username> ≫ Prints the last recorded message a player sent.",
    "msgcount": "?msgcount ≫ Count how many chat messages PhiBot has recorded so far.",
    "popbob": "?popbob ≫ Returns a random popbob quote.",
    "jared2013": "?jared2013 (?jared) ≫ Returns a random jared2013 quote.",
    "record": "?record ≫ Returns the record number of messages that passed without mentioning 2b2t.",
    "mcfact": "?mcfact ≫ Returns a random fact about Minecraft.",
    "ud": "?urbandictionary (?ud) <search term> ≫ Search Urban Dictionary.",
    "calc": "?calc (?math) <expression> ≫ Calculator.",
    "quote": "?quote <name> ≫ Get a quote from a famous person.",
}



var whisper;
function help(username, args){
    if(args[0] == undefined){
        whisper(username, helpCommands["help"]);
    }else{
        if(helpCommands[args[0]] == undefined){
            whisper(username, `"?${args[0]}" is not a command.`);
        }else{
            whisper(username, helpCommands[args[0]]);
        }
    }
}

module.exports = function(whisperFunc){
    whisper = whisperFunc;
    return help;
}
