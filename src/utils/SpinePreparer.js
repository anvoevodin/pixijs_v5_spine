// To make pixi-spine work in PixiJS v5 (using consumable components) we use import this "preparer" which will prepare PixiJS for pixi-spine import.
// Don't import pixi-spine here! You should import pixi-spine at the same place where you import this script (pixi-spine is AFTER the preparer)

import { SCALE_MODES, MIPMAP_MODES, DRAW_MODES } from '@pixi/constants'
import { Container } from '@pixi/display'
import { Texture, BaseTexture } from '@pixi/core'
import { Sprite } from '@pixi/sprite'
import { Rectangle, Matrix, Transform, Polygon } from '@pixi/math'
import { Graphics, GraphicsGeometry } from '@pixi/graphics'
import { SimpleMesh } from '@pixi/mesh-extras'
import { Loader, LoaderResource } from '@pixi/loaders'
import { rgb2hex, hex2rgb } from '@pixi/utils'

global.PIXI = {
    VERSION: '5.0.0',
    SCALE_MODES,
    MIPMAP_MODES,
    DRAW_MODES,
    Container,
    Texture,
    BaseTexture,
    Sprite,
    Rectangle,
    Matrix,
    Transform,
    Polygon,
    Graphics,
    GraphicsGeometry,
    SimpleMesh,
    Loader,
    LoaderResource,
    utils: {
        rgb2hex,
        hex2rgb
    }
}