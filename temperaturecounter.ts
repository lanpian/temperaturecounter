/**
 * second counter blocks
 */
//% weight=100 color=#0f9c11 icon="\uf1eb"
namespace SecCounter {
	let _secx = [0,1,2,3,4,4,4,3,2,1,0,0]
    let _secy = [3,4,4,4,3,2,1,0,0,0,1,2]
    let _brightness: number;
    let _x = 2;
	let _y = 2;
    let _img: Image;
    let _delay = 5000;

    function init() {
        if (!_img) {
            led.setBrightness(128);
            led.setDisplayMode(DisplayMode.Greyscale);
            _brightness = 128;
            _img = images.createImage(`
                . # # # .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                `)
            basic.clearScreen();
        }
    }

    function paint() {
        // plot per 5 second 
        _img.plotImage();
        led.plotBrightness(_x, _y, 255);
        // slow down
        basic.pause(_delay);
    }

    /**
     * Moves the turtle for the given amount of pixels
     * @param steps number of steps, eg: 1
     */
    //% blockId=turtleForward block="forward %steps|steps"
    //% weight=99 blockGap=8
    export function paintsecond(): void {
	    let itemx = 0;
		let itemy = 0;
        for (let index = 0; index <=11; index++) {
		     basic.pause(_delay)
			 itemx = _secx[(index-1 + 12) % 12]
			 itemy = _secy[(index-1 + 12 ) % 12]

			 led.plot(itemy,itemx)
			 itemx = _secx[index]
			 itemy = _secy[index]
			 led.unplot(itemy,itemx)
		}
	
    }

 
    // auto-initialize
    init()
    paint()
}

