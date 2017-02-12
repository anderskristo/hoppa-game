var boot = {
    preload: function() {
        this.game.stage.backgroundColor = '#000';
        this.game.load.image('player', 'assets/images/player.png');
    },

    create: function() {
        this.game.state.start('menu');
    }
};