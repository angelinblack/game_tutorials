var game = new Phaser.Game(800,600, Phaser.AUTO, '');

game.state.add('play', {

	//Preload function to load all images for the game at the start of going to url
	preload: function() {
		//Loading the first skeleton image
		this.game.load.image('skeleton', 'assets/allacrost_enemy_sprites/skeleton.png');
		//Loading the background images
		this.game.load.image('forest-back', 'assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
		this.game.load.image('forest-lights', 'assets/parallax_forest_pack/layers/parallax-forest-lights.png');
		this.game.load.image('forest-middle', 'assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
		this.game.load.image('forest-front', 'assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');
		//Loading the "Army of Darkness"
		this.game.load.image('aerocephal', 'assets/allacrost_enemy_sprites/aerocephal.png');
		this.game.load.image('arcana_drake', 'assets/allacrost_enemy_sprites/arcana_drake.png');
		this.game.load.image('aurum-drakueli', 'assets/allacrost_enemy_sprites/aurum-drakueli.png');
		this.game.load.image('bat', 'assets/allacrost_enemy_sprites/bat.png');
		this.game.load.image('daemarbora', 'assets/allacrost_enemy_sprites/daemarbora.png');
		this.game.load.image('deceleon', 'assets/allacrost_enemy_sprites/deceleon.png');
		this.game.load.image('demonic_essence', 'assets/allacrost_enemy_sprites/demonic_essence.png');
		this.game.load.image('dune_crawler', 'assets/allacrost_enemy_sprites/dune_crawler.png');
		this.game.load.image('green_slime', 'assets/allacrost_enemy_sprites/green_slime.png');
		this.game.load.image('nagaruda', 'assets/allacrost_enemy_sprites/nagaruda.png');
		this.game.load.image('rat', 'assets/allacrost_enemy_sprites/rat.png');
		this.game.load.image('scorpion', 'assets/allacrost_enemy_sprites/scorpion.png');
		this.game.load.image('snake', 'assets/allacrost_enemy_sprites/snake.png');
		this.game.load.image('spider', 'assets/allacrost_enemy_sprites/spider.png');
		this.game.load.image('stygian_lizard', 'assets/allacrost_enemy_sprites/stygian_lizard.png');
		//Loading image for gold coin
		this.game.load.image('gold_coin', 'assets/496_RPG_icons/I_GoldCoin.png');
		//Loading weapon images
		this.game.load.image('dagger', 'assets/496_RPG_icons/W_Dagger004.png');
		this.game.load.image('sword', 'assets/496_RPG_icons/S_Sword09.png');
		
		//adding audio to the game
		//this.game.load.audio('boden', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
		//adding Star Wars sprites, all credit to original person for spritesheet are located on the sprite sheets themselves in sw_assets
		//Background
		this.game.load.image('duneSea-back', 'sw_assets/background_sprite/duneSea-back.png');
		this.game.load.image('duneSea-front', 'sw_assets/background_sprite/duneSea-front.png');
		//Enemies
		this.game.load.image('4-lom', 'sw_assets/enemy_sprites/4-lom.png');
		this.game.load.image('black_ImpGuard', 'sw_assets/enemy_sprites/black_ImpGuard.png');
		this.game.load.image('bobaFett', 'sw_assets/enemy_sprites/bobaFett.png');
		this.game.load.image('bossk', 'sw_assets/enemy_sprites/bossk.png');
		this.game.load.image('darthVader', 'sw_assets/enemy_sprites/darthVader.png');
		this.game.load.image('dengar', 'sw_assets/enemy_sprites/dengar.png');
		this.game.load.image('gamorrean', 'sw_assets/enemy_sprites/gamorrean.png');
		this.game.load.image('hoth_probe', 'sw_assets/enemy_sprites/hoth_probe.png');
		this.game.load.image('ig-88', 'sw_assets/enemy_sprites/ig-88.png');
		this.game.load.image('monkeyLizard', 'sw_assets/enemy_sprites/monkeyLizard.png');
		this.game.load.image('probe', 'sw_assets/enemy_sprites/probe.png');
		this.game.load.image('rancor', 'sw_assets/enemy_sprites/rancor.png');
		this.game.load.image('red_ImpGuard', 'sw_assets/enemy_sprites/red_ImpGuard.png');
		this.game.load.image('sideous', 'sw_assets/enemy_sprites/sideous.png');
		this.game.load.image('zuckuss', 'sw_assets/enemy_sprites/zuckuss.png');
		//Audio, I do not own the rights to this sound file, all rights are reserved and owned by John Williams and the London Symphony Orchestra
		this.game.load.audio('mainTitle', 'sw_assets/MainTitle.ogg');
		//Weapons
		this.game.load.image('blasterShot', 'sw_assets/ability_sprites/blasterShot.png');
		this.game.load.image('forcePush', 'sw_assets/ability_sprites/forcePush.png');
		this.game.load.image('saberSlash', 'sw_assets/ability_sprites/saberSlash.png');
		this.game.load.image('thermalDet', 'sw_assets/ability_sprites/thermalDetonator.png');
		//Building panel for upgrades
		var bmd = this.game.add.bitmapData(250, 500);
		bmd.ctx.fillStyle = '#9a783d';
		bmd.ctx.strokeStyle = '#35371c';
		bmd.ctx.lineWidth = 12;
		bmd.ctx.fillRect(0, 0, 250, 500);
		bmd.ctx.strokeRect(0, 0, 250, 500);
		this.game.cache.addBitmapData('upgradePanel', bmd);
		
		//Adding the button
		var buttonImage = this.game.add.bitmapData(476, 48);
		buttonImage.ctx.fillStyle = '#e6dec7';
		buttonImage.ctx.stokeStyle = '#35371c';
		buttonImage.ctx.lineWidth = 4;
		buttonImage.ctx.fillRect(0, 0, 225, 48);
		buttonImage.ctx.strokeRect(0, 0, 225, 48);
		this.game.cache.addBitmapData('button', buttonImage);
		
		//create the main player
		this.player = {
			clickDmg: 1,
			gold: 50,
			dps: 0
		};
		
		//world progression
		this.level = 1;
		//Number of monsters killed in current level
		this.levelKills = 0;
		//Number of monsters required to advance level
		this.levelKillsRequired = 10;
				
	},
	
	create: function() {
		//Assign music var to reference and play
		var music = this.game.add.audio('mainTitle', 1, true);
		music.loop = true;
		music.play();
		
		//music = game.sound.play('boden');
		//var skeletonSprite = game.add.sprite(450, 290, 'skeleton');
		//skeletonSprite.anchor.setTo(0.5, 0.5);
		//Setting the background images loaded to be the background
		var state = this;
		
		this.background = this.game.add.group();
		//setup each of our background layers to take the full screen
		['forest-back', 'forest-lights', 'forest-middle', 'forest-front']
		//['duneSea-back', 'duneSea-front'] Could not get the Tattoine Dune Sea images to work for the background, so we will keep the forest theme and pretend we are on Endor :D
			.forEach(function(image) {
				var bg = state.game.add.tileSprite(0, 0, state.game.world.width,
					state.game.world.height, image, '', state.background);
				bg.tileScale.setTo(4,4);
			});
			
		//adding upgrade panel image and buttons
		this.upgradePanel = this.game.add.image(10, 70, this.game.cache.getBitmapData('upgradePanel'));
		var upgradeButtons = this.upgradePanel.addChild(this.game.add.group());
		upgradeButtons.position.setTo(8, 8);
		//Data for upgrade buttons based on attack type
		var upgradeButtonsData = [
			{icon: 'blasterShot', name: 'Blaster Shot', level:0, cost:5, purchaseHandler: function(button, player) {
				player.clickDmg += 1;
			}},
			{icon: 'saberSlash', name: 'Saber Slash', level:0, cost:25, purchaseHandler: function(button, player) {
				player.dps += 5;
			}},
			{icon: 'forcePush', name: 'Force Push', level: 0, cost: 100, purchaseHandler: function(button, player) {
				player.clickDmg += 20;
			}},
			{icon: 'thermalDet', name: 'Thermal Detonator', level: 0, cost: 50, purchaseHandler: function(button, player) {
				player.clickDmg += 10;
			}}
		];
		
		//Updating button information each time the button is pressed
		var button;
		upgradeButtonsData.forEach(function(buttonData, index) {
			button = state.game.add.button(0, (50*index), state.game.cache.getBitmapData('button'));
			button.icon = button.addChild(state.game.add.image(6, 6, buttonData.icon));
			button.text = button.addChild(state.game.add.text(42, 6, buttonData.name + ': ' + buttonData.level, {font: '16px Arial Black'}));
			button.details = buttonData;
			button.costText = button.addChild(state.game.add.text(42, 24, 'Cost: ' + buttonData.cost, {font: '16px Arial Black'}));
			button.events.onInputDown.add(state.onUpgradeButtonClick, state);
			
			upgradeButtons.addChild(button);
		});
		//Creating the data for connecting name of monster to corresponding sprite, updated for Star Wars theme
		var monsterData = [
			{name: '4-Lom', image: '4-lom', maxHealth: 10},
			{name: 'B. Imperial Guard', image: 'black_ImpGuard', maxHealth: 20},
			{name: 'Boba Fett', image: 'bobaFett', maxHealth: 30},
			{name: 'Bossk', image: 'bossk', maxHealth: 5},
			{name: 'Darth Vader', image: 'darthVader', maxHealth: 10},
			{name: 'Dengar', image: 'dengar', maxHealth: 10},
			{name: 'Gamorrean', image: 'gamorrean', maxHealth: 15},
			{name: 'Hoth Probe', image: 'hoth_probe', maxHealth: 8},
			{name: 'IG-88', image: 'ig-88', maxHealth: 3},
			{name: 'Monkey Lizard', image: 'monkeyLizard', maxHealth:13},
			{name: 'Probe', image: 'probe', maxHealth: 2},
			{name: 'Rancor', image: 'rancor', maxHealth: 2},
			{name: 'R. Imperial Guard', image: 'red_ImpGuard', maxHealth: 6},
			{name: 'Darth Sideous', image: 'sideous', maxHealth: 4},
			{name: 'Zuckuss', image: 'zuckuss', maxHealth: 4},
		];
		//Creating the monster group and attributes for monsters, as well as click-event
		this.monsters = this.game.add.group();
		
		var monster;
		monsterData.forEach(function(data) {
			//create a sprite for them off screen
			monster = state.monsters.create(1000, state.game.world.centerY, data.image);
			//use the built in health component
			monster.health = monster.maxHealth = data.maxHealth;
			//center anchor
			monster.anchor.setTo(0.5, 1.5);
			monster.scale.setTo(1.5, 1.5);
			//reference to the database
			monster.details = data;
			
			//enable input so we can click it!
			monster.inputEnabled = true;
			monster.events.onInputDown.add(state.onClickMonster, state);
			
			//hook into health and lifecycle events
			monster.events.onKilled.add(state.onKilledMonster, state);
			monster.events.onRevived.add(state.onRevivedMonster, state);
		});
		
		//Display the monster
		this.currentMonster = this.monsters.getRandom();
		this.currentMonster.position.set(this.game.world.centerX + 100, this.game.world.centerY + 50);
		//Add and display group for the monster UI
		this.monsterInfoUI = this.game.add.group();
		this.monsterInfoUI.position.setTo(this.currentMonster.x - 220, this.currentMonster.y + 120);
		this.monsterNameText = this.monsterInfoUI.addChild(this.game.add.text(0, 0, this.currentMonster.details.name, {
			font: '48px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		}));
		this.monsterHealthText = this.monsterInfoUI.addChild(this.game.add.text(0, 80, this.currentMonster.health + ' HP', {
			font: '32px Arial Black',
			fill: '#ff0000',
			strokeThickness: 4
		}));
	
		//Damage text for attacks
		this.dmgTextPool = this.add.group();
		var dmgText;
		for (var d=0; d<50; d++) {
			dmgText = this.add.text(0, 0, '1', {
				font: '64px Arial Black',
				fill: '#fff',
				strokeThickness: 4
			});
			//Start out not existing, so we don't draw it yet
			dmgText.exists = false;
			dmgText.tween = game.add.tween(dmgText)
				.to({
					alpha: 0,
					y: 100,
					x: this.game.rnd.integerInRange(100, 700)
				}, 1000, Phaser.Easing.Cubic.Out);
				
			dmgText.tween.onComplete.add(function(text, tween) {
				text.kill();
			});
			this.dmgTextPool.add(dmgText);
		}
		
		//Creating pool of coins
		this.coins = this.add.group();
		this.coins.createMultiple(50, 'gold_coin', '', false);
		this.coins.setAll('inputEnabled', true);
		this.coins.setAll('goldValue', 1);
		this.coins.callAll('events.onInputDown.add', 'events.onInputDown', this.onClickCoin, this);
		this.playerGoldText = this.add.text(30, 30, 'Gold: ' + this.player.gold, {
			font: '24px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		});
		
		//Looping dps, 100ms 10x a second
		this.dpsTimer = this.game.time.events.loop(100, this.onDPS, this);
		
		//Setup World Progression Display
		this.levelUI = this.game.add.group();
		this.levelUI.position.setTo(this.game.world.centerX, 30);
		this.levelText = this.levelUI.addChild(this.game.add.text(0, 0, 'Level: ' + this.level, {
			font: '24px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		}));
		this.levelKillsText = this.levelUI.addChild(this.game.add.text(0, 30, 'Kills: ' + this.levelKills + '/' + this.levelKillsRequired, {
			font: '24px Arial Black',
			fill: '#fff',
			strokeThickness: 4
		}));

	},
	//DPS Function based on damage of player and health of monster
	onDPS: function() {
		if (this.player.dps > 0) {
			if (this.currentMonster && this.currentMonster.alive) {
				var dmg = this.player.dps / 10;
				this.currentMonster.damage(dmg);
				//update health text of monster
				this.monsterHealthText.text = this.currentMonster.alive ? Math.round(this.currentMonster.health) + ' HP' : 'DEAD';
			}
		}
	},
		
	//Function for the upgrade button
	onUpgradeButtonClick: function(button, pointer) {
		//make sure it updates after we buy upgrade
		function getAdjustedCost() {
			return Math.ceil(button.details.cost + (button.details.level * 1.46));
		}
		//Adjusting player gold based on price of updgrade
		if (this.player.gold - getAdjustedCost() >= 0) {
			this.player.gold -= getAdjustedCost();
			this.playerGoldText.text = 'Gold: ' + this.player.gold;
			button.details.level++;
			button.text.text = button.details.name + ': ' + button.details.level;
			button.costText.text = 'Cost: ' + getAdjustedCost();
			button.details.purchaseHandler.call(this, button, this.player);
		}
	},
		
	//Function for clicking on coin and adjusted player gold
	onClickCoin: function(coin) {
		if (!coin.alive) {
			return;
		}
		//give player gold
		this.player.gold += coin.goldValue;
		//update UI
		this.playerGoldText.text = 'Gold: ' + this.player.gold;
		//remove coin from UI
		coin.kill();
	},

	onClickMonster: function(monster, pointer) {
		//reset the currentMonster before we move him
		//this.currentMonster.position.set(1000, this.game.world.centerY);
		//now pick the next in the list, and bring him up
		//this.currentMonster = this.monsters.getRandom();
		//this.currentMonster.position.set(this.game.world.centerX + 100, this.game.world.centerY);
		//apply click damange to monster
		this.currentMonster.damage(this.player.clickDmg);
		//grab a damage text from the pool to display what happened
		var dmgText = this.dmgTextPool.getFirstExists(false);
		if (dmgText) {
			dmgText.text = this.player.clickDmg;
			dmgText.reset(pointer.positionDown.x, pointer.positionDown.y);
			dmgText.alpha = 1;
			dmgText.tween.start();
		}
		//update the health text
		this.monsterHealthText.text = this.currentMonster.alive ? this.currentMonster.health + ' HP' : 'DEAD';
		
	},
	onKilledMonster: function(monster) {
		//move the monster off screen again
		monster.position.set(1000, this.game.world.centerY);
		
		var coin;
		//spawn a coin when monster is killed
		coin = this.coins.getFirstExists(false);
		coin.reset(this.game.world.centerX + this.game.rnd.integerInRange(-100, 100), this.game.world.centerY);
		coin.goldValue = Math.round(this.level * 1.33);
		this.game.time.events.add(Phaser.Timer.SECOND * 3, this.onClickCoin, this, coin);
		
		this.levelKills++;
		
		//if levelKills is greater than kills required, move to next level
		if (this.levelKills >= this.levelKillsRequired) {
			this.level++;
			this.levelKills = 0;
		}
		
		this.levelText.text = 'Level: ' + this.level;
		this.levelKillsText.text = 'Kills: ' + this.levelKills + '/' + this.levelKillsRequired;
		
		//pick a new monster
		this.currentMonster = this.monsters.getRandom();
		//updrade monster based on level
		this.currentMonster.maxHealth = Math.ceil(this.currentMonster.details.maxHealth + ((this.level - 1) * 10.6));
		//make sure they are fully healed
		this.currentMonster.revive(this.currentMonster.maxHealth);
	},
	onRevivedMonster: function(monster) {
		monster.position.set(this.game.world.centerX + 100, this.game.worldCenterY + 50);
		//update the text display
		this.monsterNameText.text = monster.details.name;
		this.monsterHealthText.text = monster.health + 'HP';
	},
	render: function() {
		//game.debug.text('Adventure Awaits!', 250, 290);
		//game.debug.text(this.currentMonster.details.name,
		//this.game.world.centerX - this.currentMonster.width / 2,
		//this.game.world.centerY + this.currentMonster.height /2);
		//Audio render files w/ optional Decoding if statement
		//game.debug.soundInfo(music, 32, 32);
		
		//if (music.isDecoding) {
			//game.debug.text("Decoding MPS ...", 32, 200);
		//}
	}
});

game.state.start('play');