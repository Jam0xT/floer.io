import "./scss/main.scss";
import { Game } from "./scripts/game";
import { UI } from "@/ui.ts";
import { Settings } from "@/settings.ts";
import { loadStyleSheet } from "@/scripts/utils/styleSheets.ts";
import { Renderer } from "@/scripts/renderer.ts";

loadStyleSheet();

export class ClientApplication {
    settings = new Settings(this);
    ui = new UI(this);
    game = new Game(this);
    renderer = new Renderer(this);

    async init() {
        await this.game.init();
    }
}

void new ClientApplication().init();
