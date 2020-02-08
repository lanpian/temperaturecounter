enum TurtlePenMode {
    //% block="down"
    Down,
    //% block="up"
    Up
}
/**
 * Temperature counter blocks
 */
//% weight=100 color=#0f9c11 icon="\uf188"
namespace tempcounter {
    let _img: Image;
    let _delay = 250;
    let _x: number;
    let _y: number;
    let _brightness: number;

    function init() {
        if (!_img) {
            led.setBrightness(255);
            led.setDisplayMode(DisplayMode.Greyscale);
            _img = images.createImage(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen();
        }
    }

    function paint() {
         // plot background
         _img.plotImage();
         // plot turtle
         led.plotBrightness(_x, _y, 255);
         // slow down
         basic.pause(_delay);
    }
   export function setBrightness(brightness: number): void {
        init();
        _brightness = Math.max(0, Math.min(255, brightness));
        paint();
    }
    init()
    paint()
}
