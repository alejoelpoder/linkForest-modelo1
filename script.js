var CIRCLE_W = 20
var ACTUAL_W = CIRCLE_W*0.70
var MIN_W = 0
var CIRCLE_DIST = CIRCLE_W/2

var COLS = innerWidth / CIRCLE_DIST +1
var ROWS = innerHeight / CIRCLE_DIST +1
var GREATER = Math.max(innerWidth, innerHeight)


var dots = []
var beacon

function setup() {
    createCanvas(innerWidth, innerHeight)
    noStroke()

    for (var ci = 0; ci < COLS; ++ci)
        for (var ri = 0; ri < ROWS; ++ri){
            var dot = new Dot(ci * CIRCLE_DIST, ri * CIRCLE_DIST)
                  
            dots.push(dot)
        }
}

function draw() {
    background('#1D353F')
    beacon = new p5.Vector(mouseX || touchX, mouseY || touchY)

    fill('#DCA721')
    dots.forEach(function (dot) {        
        dot.render()
    })
}

var Dot = function (posX, posY) {
    this.position = new p5.Vector(posX, posY)
}

Dot.prototype = {
    render: function () {
        var w = this.calcWidth()
        ellipse(this.position.x, this.position.y, w, w)
    },

    calcWidth: function () {
        var delta = Math.max(p5.Vector.dist(beacon, this.position), 0)

        delta *= map(
            noise(this.position.x, this.position.y, frameCount),
            0, 1,
            0.7, 1.5
        )

        if (delta > GREATER/2.3) {
            delta = GREATER/2.3
        }

        return map(delta, 0, GREATER/2, ACTUAL_W, MIN_W)
    }
}

$(document).ready(function(){
    $('.links_site_1').mouseenter(() => {
        $('.links_site_1').css('border-color','#DCA721')
        $('.links_site_2').css('border-top','solid 3px #DCA721')
    }).mouseleave(() => {
        $('.links_site_1').css('border-color','#000')
        $('.links_site_2').css('border-top','solid 3px #000')
    });

    $('.links_site_2').mouseenter(() => {
        $('.links_site_1').css('border-color','#DCA721')
        $('.links_site_2').css('border-color','#DCA721')
        $('.links_site_3').css('border-top','solid 3px #DCA721')
    }).mouseleave(() => {
        $('.links_site_1').css('border-color','#000')
        $('.links_site_2').css('border-color','#000')
        $('.links_site_3').css('border-top','solid 3px #000')
    });

    $('.links_site_3').mouseenter(() => {
        $('.links_site_1').css('border-color','#DCA721')
        $('.links_site_2').css('border-color','#DCA721')
        $('.links_site_3').css('border-color','#DCA721')
        $('.links_site_4').css('border-top','solid 3px #DCA721')
    }).mouseleave(() => {
        $('.links_site_1').css('border-color','#000')
        $('.links_site_2').css('border-color','#000')
        $('.links_site_3').css('border-color','#000')
        $('.links_site_4').css('border-top','solid 3px #000')
    });

    $('.links_site_4').mouseenter(() => {
        $('.links_site_1').css('border-color','#DCA721')
        $('.links_site_2').css('border-color','#DCA721')
        $('.links_site_3').css('border-color','#DCA721')
        $('.links_site_4').css('border-color','#DCA721')
    }).mouseleave(() => {
        $('.links_site_1').css('border-color','#000')
        $('.links_site_2').css('border-color','#000')
        $('.links_site_3').css('border-color','#000')
        $('.links_site_4').css('border-color','#000')
    });
  });