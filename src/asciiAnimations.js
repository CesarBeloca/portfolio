import {daftPunk} from './ascii/animations/daftPunk.js';
import {blackAndWhiteLoop} from "./ascii/animations/blackAndWhiteLoop.js";
import {magicAnimated3D} from "./ascii/animations/magicAnimated3D.js";
import {walkCycle3D} from "./ascii/animations/walkCycle3D.js";
import {radio80s} from "./ascii/animations/radio80s.js";
import {animationArt} from "./ascii/animations/animationArt.js";
import {animationLoop} from "./ascii/animations/animationLoop.js";
import {dailyRenderBlackAndWhite} from "./ascii/animations/dailyRenderBlackAndWhite.js";
import {balletAnimated} from "./ascii/animations/balletAnimated.js";
import {moon} from "./ascii/animations/moon.js";

export const animations = [
    daftPunk,
    blackAndWhiteLoop,
    magicAnimated3D,
    walkCycle3D,
    radio80s,
    animationArt,
    animationLoop,
    dailyRenderBlackAndWhite,
    balletAnimated,
    moon
];

export const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
