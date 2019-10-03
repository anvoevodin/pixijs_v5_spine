import { Texture } from '@pixi/core'
import { Container } from '@pixi/display'

export default class Character extends Container {
    static getCharactersNames(count) {
        return SKINS.slice(0, Math.min(count, SKINS.length))
    }

    constructor(spineData, skinName) {
        super()
        if (SKINS.indexOf(skinName) === -1) throw new Error('Skin "' + skinName + '" does not exist')

        this._spine = new PIXI.spine.Spine(spineData)
        this._spine.skeleton.setSkinByName(skinName) // Spine can use different set of sprites in the same animations and it's called "skins"
        this._spine.scale.set(0.3)
        this.addChild(this._spine)
        this.staticWidth = this._spine.width

        this._currentAnimation = -1
        this.nextAnimation()
    }

    nextAnimation() {
        this._currentAnimation++
        if (this._currentAnimation > ANIMATIONS.length - 1) this._currentAnimation = 0
        this._spine.state.setAnimation(0, ANIMATIONS[this._currentAnimation].name, ANIMATIONS[this._currentAnimation].repeat) // We set the walking animation starting from 0 time (true at the end means to loop the animation)
    }

    onResize(width, height) {

    }
}

const SKINS = [
    'Assassin',
    'Beardy',
    'Chuck',
    'Fletch',
    'Gabriel',
    'Pamela-1',
    'Pamela-2',
    'Pamela-3',
    'Pamela-4',
    'Pamela-5',
    'Ducky',
    'Stumpy',
    'Truck',
    'Young',
    'Buck',
    'Turbo',
    'Dummy',
    'MetalMan',
    'Commander',
    'default'
]
const ANIMATIONS = [{
    name: 'walk',
    repeat: true
}, {
    name: 'walk2',
    repeat: true
}, {
    name: 'crouchIdle',
    repeat: true
}, {
    name: 'crouchWalk',
    repeat: true
}, {
    name: 'block',
    repeat: true
}, {
    name: 'hitBig',
    repeat: false
}, {
    name: 'floorIdle',
    repeat: true
}, {
    name: 'floorGetUp',
    repeat: false
}, {
    name: 'meleeSwing1',
    repeat: false
}, {
    name: 'meleeSwing2',
    repeat: false
}, {
    name: 'meleeSwing1-fullBody',
    repeat: false
}, {
    name: 'meleeSwing2-fullBody',
    repeat: false
}, {
    name: 'hideSword',
    repeat: false
}, {
    name: 'jump',
    repeat: false
}, {
    name: 'idleTired',
    repeat: true
}, {
    name: 'idle',
    repeat: true
}, {
    name: 'punch1',
    repeat: false
}, {
    name: 'punch2',
    repeat: false
}, {
    name: 'roll',
    repeat: false
}, {
    name: 'run',
    repeat: true
}, {
    name: 'run2',
    repeat: true
}, {
    name: 'empty',
    repeat: true
}]