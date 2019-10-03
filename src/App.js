import { Application } from '@pixi/app'

import Character from './components/Character'

export default class App extends Application {
    constructor() {
        super({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xffffff
        })
        document.body.appendChild(this.view) // Create Canvas tag in the body

        this.characterSpace = 150

        this.init()

        window.addEventListener('resize', this.onResize.bind(this))
    }

    init() {
        this.loader.add('characters', './assets/atlas.json') // Load JSON only. The rest (.atlas and .png) is going to be loaded automatically
        this.loader.load(this.draw.bind(this))
    }

    draw(loader, resources) {
        this.widthPart = window.innerWidth / this.characterSpace // Which part of the screen's width a character needs to be shown
        this.characters = Character.getCharactersNames(Math.round(this.widthPart)).map(name => {
            const character = new Character(this.loader.resources.characters.spineData, name)
            this.stage.addChildAt(character, 0) // Add at the 0 index in order to keep the order of the sprites (the left ones are on the top)
            return character
        })

        // We're going to change animations of the spine objects every second
        setInterval(() => {
            this.characters.forEach(character => character.nextAnimation())
        }, 1000)

        this.onResize()
    }

    onResize() {
        this.renderer.resize(window.innerWidth, window.innerHeight)
        const width = this.renderer.width, height = this.renderer.height

        this.characters.forEach((character, i) => {
            // Resize the way all characters could fit the screen
            character.scale.set((window.innerWidth / this.widthPart) / character.staticWidth)
            character.x = (i + 1 + i) * (width / this.characters.length) * 0.5 // Set positions the way the characters could have the equal space between them
            character.y = height
        })
    }
}