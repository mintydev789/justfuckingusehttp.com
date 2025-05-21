import figlet from "figlet";

// console.log(figlet.fontsSync());

const contents = `JUST FUCKING USE HTTP!

Alright, listen up, asshole! You know what's more foolproof than your hippie-ass HTML bullshit? That's right, pure text over HTTP! While you're out here arguing with the frontend fanatics over the "right" way to make a webpage, you never even stopped for a goddamn second to think that you don't need any of that shit. Who the fuck cares about a *button* when all you need is text? Ever read a book, dipshit?

"Oh, but how am I going to make a nice-looking page?"

Let me tell you of a wonderful thing called:

${figlet.textSync("ASCII", { font: "3D-ASCII" })}
Might be a bit old-fashioned even for you, but this is what we call 𝔞 𝔢 𝔰 𝔱 𝔥 𝔢 𝔱 𝔦 𝔠. That's right, we also have fancy Unicode characters, you sorry-ass bitch. Want italics? 𝑐ℎ𝑒𝑐𝑘. Bold? 𝐜𝐡𝐞𝐜𝐤. Underline? m͟o͟t͟h͟e͟r͟f͟u͟c͟k͟i͟n͟g͟ ͟c͟h͟e͟c͟k͟.

"But mah interactivity!"

Who the fuck asked for interactivity? You think a user wants to see your shitty b̴̙͝U̸̡̇t̷͍͝T̵̳̚ô̵̲N̶̪̂ on a ⓅⓊⓇⒺ ⒽⓉⓂⓁ ⓌⒺⒷⓈⒾⓉⒺ? Fuck no. Just give them a text response telling them to call your contact number and make some sweaty call center employee take their fucking ecommerce orders. Worst comes to worst, make those assholes work for it and send your server a perfectly-formatted POST request, ordering their next hentai body pillow cover and paying with Trump's scamcoin.


${figlet.textSync("Why HTTP?", { font: "Cosmike" })}


Because it's fucking universal, you bellend! And not like your pussy-ass HTML. For Christ's sake, how much do you want to overbloat the fucking internet? At the rate you're adding new useless features you'll soon need a 5090 just to run fucking Chrome. If your shitty page isn't accessible with Lynx, why the fuck should anyone even bother?

And how many times are you gonna stumble into a W3C feature that's not supported even in the big browsers, before you realize it's a fucking waste of time? That's right, I see that you're trying to use those month/week select inputs, even though they're more useless than the is-even package when you load your page with Firefox (although how much of a miserable fuck do you have to be to use Firefox?)

${figlet.textSync("In conclusion...", { font: "miniwi" })}

𝐉𝐮𝐬𝐭 𝐟𝐮𝐜𝐤𝐢𝐧𝐠 𝐮𝐬𝐞 𝐇𝐓𝐓𝐏!


Subscribe to my OnlyFans if you want to see the next installment: JUST FUCKING USE GOPHER!

And if you're reading this through a fucking browser and not a TTY (or Lynx) as Richard Stallman intended (PBUH), you should just quit your job now and let the latest garbage AI do it better, you worthless piece of shit.


No rights reserved, this is public domain, you GUI-loving loser.
Parody of justfuckingusehtml.com (no hate)

Made by Deni Mintsaev (a miserable fuck Firefox user)
Mastodon: mastodon.social/@this_chord
Website: denimintsaev.com
Source code: https://github.com/this-chord/justfuckingusehttp.com
`;

Deno.serve((_req) => {
  return new Response(contents);
});
