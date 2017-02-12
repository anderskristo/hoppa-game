var play = {
    
    create: function() {
        this.player = this.game.add.sprite(0, 0, 'player');
        game.physics.enable([ this.player , Phaser.Physics.ARCADE]);
        this.player.alignIn(game.world.bounds, Phaser.BOTTOM_CENTER);
        this.player.body.gravity.y = 1000;
        this.player.collideWorldBounds = true;
        

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

        this.cursors = game.input.keyboard.createCursorKeys();
    },

    update: function() {
        if (!this.player.inWorld) {
            this.restart();
        }

        if (this.cursors.left.isDown) {
            this.player.x -= 6;
        }

        if (this.cursors.right.isDown) {
            this.player.x += 6;
        }
    },

    jump: function() {
        this.player.body.velocity.y = -450;
    },

    restart: function() {
        this.game.state.start('menu');
    }

};