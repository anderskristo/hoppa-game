var menu = {
    create: function() {
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.start, this);

        var styleIntro = { font: '48px Arial', fill: '#ffffff', boundsAlignH: 'center', boundsAlignV: 'middle' };
        var intro = game.add.text(0, 0, 'Start hoppa', styleIntro);
        intro.setTextBounds(0, 100, 800, 100);
    },

    start: function() {
        this.game.state.start('play');
    }
};