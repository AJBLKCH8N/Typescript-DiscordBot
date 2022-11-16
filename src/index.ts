import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";


(async () => {
    //instantiate a new client
    const BOT = new Client ({intents: IntentOptions});
    // connect to Discord Gateway with .login() method
    await BOT.login(process.env.BOT_Token);
})();