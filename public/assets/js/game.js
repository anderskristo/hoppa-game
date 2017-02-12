var game = new Phaser.Game(800, 600, Phaser.AUTO, 'hoppa');

game.state.add('boot', boot);
game.state.add('menu', menu);
game.state.add('play', play);

game.state.start('boot');