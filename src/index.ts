import { Client, Interaction } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";
import { onInteraction } from "./events/onInteraction";


(async () => {
    //if (!validateEnv()) return;
    //instantiate a new client
    const BOT = new Client ({intents: IntentOptions});
    // connect to Discord Gateway with .login() method
    BOT.on("ready", () => console.log("Connected to Discord"));
    await connectDatabase();
    await BOT.login(process.env.BOT_Token as string);
    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction)
    );

})();