// Visit the wiki for more info - https://kubejs.com/
console.info('six seven')

Ponder.tags( e => {
    
    e.createTag('sixone:special_tutorial', 'minecraft:campfire', 'Special Tutorials', 'Special ponder for special you!', [
        "quark:oak_vertical_slab",
        "extradelight:mint",
    ])
    e.createTag('sixone:orientation_lock', 'quark:oak_vertical_slab', 'Orientation Lock', 'Locking orientation to make it easier to place', [
        "#quark:vertical_slabs",
    ])
    e.createTag('sixone:mint_spread', 'extradelight:mint', 'Growing Mint', 'Reminder to jump up!', [
        "extradelight:mint",
    ])
})

function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}

Ponder.registry( e => {
    e.create("#quark:vertical_slabs").scene("orientation_lock", "Locking block orientation", (scene, util) => {
        scene.showStructure();
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "west"
                if ((i+j)%3 == 0)
                {
                    f = "north"
                }
                scene.world.setBlock([i,j,2], Block.id("quark:oak_vertical_slab").with("type", f), false)
                scene.world.setBlock([i,j,2], Block.id("quark:oak_vertical_slab").with("type", f), true)
                scene.idle(2);

            }
        }
        scene.idle(10);
        
        //scene.showStructure();
        scene.text(60, "Placing Quark's vertical slabs correctly can be frustrating...", [2.5,2.5,2.5]).placeNearTarget();

        scene.idle(80);
        
        scene.text(60, "Luckily, a feature (also) introduced by Quark will help that", [2.5,2.5,2.5]).placeNearTarget();
 
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "west"
                if ((i+j)%3 == 0)
                {
                    f = "north"
                }
                scene.world.setBlock([i,j,2], Block.id("minecraft:air"), true)
                scene.idle(2);

            }
        }
        scene.idle(80);
        scene.world.setBlock([2,1,2], Block.id("create:brass_casing"), true)
        scene.world.setBlock([2,1,2], Block.id("create:brass_casing"), true)
        scene.text(40, "Look at a block's face...", [2.5,1.5,2]).placeNearTarget().attachKeyFrame();
        scene.idle(50);
        scene.text(50, "and press Lock Rotation (defaults to K)", [2.5,1.5,2]).placeNearTarget().attachKeyFrame();
        scene.idle(30);
        scene.showControls(30, [2.5,1.5,2], "down").withItem(Item.of("frequency:symbol_k"))
        scene.idle(40);
        scene.world.setBlock([2,1,2], Block.id("air"), true)
        scene.idle(20);
        scene.text(100, "Placing any oriented block will behave as if you place it on that surface regardless of where you look", [2.5,1.5,2.5]).placeNearTarget().attachKeyFrame();
        scene.idle(20);
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "north"
                scene.world.setBlock([i,j,2], Block.id("quark:oak_vertical_slab").with("type", f), false)
                scene.world.setBlock([i,j,2], Block.id("quark:oak_vertical_slab").with("type", f), true)
                scene.idle(4);

            }
        }
        scene.idle(50);
        scene.text(80, "Keep in mind that you will need to look at certain spots if placement rules requires it", [2.5,1.5,2.5]).colored(PonderPalette.RED)
.placeNearTarget().attachKeyFrame()
        scene.idle(90);
        scene.text(50, "For example with stairs...", [2.5,1.5,2.5]).placeNearTarget()
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "south"
                scene.world.setBlock([i,j,2], Block.id("air"), true)
                scene.idle(1);

            }
        }
        scene.idle(40);
        scene.world.setBlock([3,1,0], Block.id("create:brass_casing"), true)
        scene.world.setBlock([3,1,0], Block.id("create:brass_casing"), true)
        scene.idle(10);
        scene.text(50, "When looking at lower part of the face...", [3.5,1.2,0]).placeNearTarget().attachKeyFrame()
        scene.idle(10);
        scene.showControls(30, [3.5,1.2,0], "down").withItem(Item.of("frequency:symbol_k"))
        scene.idle(60);
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "south"
                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f), false)
                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f), true)
                scene.idle(2);
            }
        }
        scene.text(50, "you will place normal staircases...", [2.5,2.5,2.5]).placeNearTarget()
        scene.idle(60);
        scene.idle(10);
        scene.text(50, "When looking at upper part of the face...", [3.5,1.75,0]).placeNearTarget().attachKeyFrame()
        scene.idle(10);
        scene.showControls(30, [3.5,1.8,0], "down").withItem(Item.of("frequency:symbol_k"))
        scene.idle(60);
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "south"
                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f).with("half","top"), false)
                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f).with("half","top"), true)
                scene.idle(2);
            }
        }
        scene.text(50, "you will place inverted staircases...", [2.5,2.5,2.5]).placeNearTarget()
        scene.idle(60);
        scene.text(80, "You can also have it only be locked on cardinal directions by pressing the keybind while not looking after locking at a face", [2.5,2.5,2.5]).placeNearTarget().attachKeyFrame()
        for (var i = 4; i >= 0; i--){
            for (var j = 1; j < 4 ; j++){
                let f = "south"
                scene.world.setBlock([i,j,2], Block.id("air"), true)
                scene.idle(1);

            }
        }
        scene.idle(80);
        scene.showControls(30, [-2.5,2.8,1.5], "up").withItem(Item.of("frequency:symbol_k"))
        scene.idle(40);
        for (var i = 4; i >= 4; i--){
            for (var j = 1; j < 5 ; j++){
                scene.world.setBlock([i,j,2], Block.id("minecraft:stone"), false)
                scene.world.setBlock([i,j,2], Block.id("minecraft:stone"), true)
                scene.idle(1);
            }
        }
        scene.idle(20);
        var dx = 0
        for (var i = 3; i >= 0; i--){
            for (var j = 1; j < 5 ; j++){
                let f = "south"
                dx++;
                let x = (dx%2==0)?"top":"bottom"
                if(dx <= 2){
                    scene.showControls(30, [4.0,1.2 + ((dx - 1) * 1.5), 2.5], "left").withItem(Item.of("frequency:symbol_k"))
                    scene.idle(10);
                }

                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f).with("half",x), false)
                scene.world.setBlock([i,j,2], Block.id("minecraft:oak_stairs").with("facing", f).with("half",x), true)
                scene.idle(dx > 2 ? 3 : 40);
            }
        }
        scene.idle(20);
        scene.text(120, "To unlock rotation, press the keybind on the same face twice or mid-air until the overlay disappears.", [2.5,2.5,2.5]).placeNearTarget().attachKeyFrame()
        scene.idle(140);
    })

    e.create("extradelight:mint").scene("mint_spreads", "Growing Mints", (s, u)=>{
        function placeMint(x,y,z) {
            s.world.setBlock([x,y,z],Block.id("extradelight:mint_crop"), false)
            s.world.setBlock([x,y,z],Block.id("extradelight:mint_crop"), true)
        }
        s.showStructure()
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 5; j++){
                s.world.setBlock([i,0,j],Block.id("minecraft:grass_block"), false)
                s.world.setBlock([i,0,j],Block.id("minecraft:grass_block"), true)
                s.idle(2)
            }
        }
        s.idle(20)
        s.addKeyframe()
        s.showControls(30, [2.5,1,2.5], "down").rightClick().withItem(Item.of("extradelight:mint"))
        s.idle(10)
        placeMint(2,1,2)
        s.idle(20)
        s.world.setBlock([4,0,0],Block.id("minecraft:farmland"), true)
        s.idle(5)
        s.world.setBlock([4,0,1],Block.id("minecraft:water"), true)
        s.idle(5)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat"), true)
        s.idle(5)
        s.world.setBlock([4,0,0],Block.id("minecraft:farmland").with("moisture", 7), false)
        s.idle(10)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 2), false)
        s.idle(5)
        placeMint(3,1,2)
        s.idle(7)
        placeMint(3,1,3)
        s.idle(1)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 3), false)
        s.idle(5)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 4), false)
        s.idle(7)
        placeMint(1,1,3)
        s.idle(10)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 5), false)
        s.idle(15)
        placeMint(2,1,3)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 6), false)
        s.idle(12)
        placeMint(1,1,2)
        s.idle(7)
        placeMint(1,1,1)
        s.idle(5)
        s.world.setBlock([4,1,0],Block.id("minecraft:wheat").with("age", 7), false)
        placeMint(3,1,4)
        s.idle(5)
        placeMint(2,1,1)
        s.idle(11)
        placeMint(0,1,2)
        s.idle(5)
    })
})