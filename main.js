var size = 10;
var divisions = 20;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 6;
camera.position.y = 2;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var grid = new THREE.GridHelper(size,divisions);
//scene.add(grid);


var controls = new THREE.OrbitControls(camera,renderer.domElement);

var loader = new THREE.GLTFLoader();
//var shibaMod;
loader.load('models/shiba/shiba.gltf', ( gltf ) =>{
    shibaMod = gltf.scene;
    scene.add(shibaMod);
    
    isGrowing = true;

    function animateScale(){
        requestAnimationFrame(animateScale);

        console.log(shibaMod.scale.x);
/*
        if(shibaMod.scale.x < 3 && isGrowing){
        shibaMod.scale.x += 0.002;
        shibaMod.scale.z += 0.002;
        shibaMod.scale.y += 0.002;
            if(shibaMod.scale.x > 3){
                isGrowing = !isGrowing;

            }
        }
        else if(shibaMod.scale.x > 0.5 && !isGrowing) {
          //  shibaMod.scale.x -= 0.002;
           // shibaMod.scale.z -= 0.002;
           // shibaMod.scale.y -= 0.002;
           // if(shibaMod.scale.x < 0.5){
            //    isGrowing = !isGrowing;
           // }
        }*/
    }
    animateScale();
} );




var pyjamMod;
loader.load('models/pyjama_shiba/pyjama.gltf', ( gltf ) =>{
    pyjamMod = gltf.scene;
    scene.add(pyjamMod);
    pyjamMod.position.x = 2;
    pyjamMod.position.y = 1;
} );

/*var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);
*/
const geometry = new THREE.CylinderGeometry( 1, 1, 10, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry, material );



var light = new THREE.PointLight(0xFFFFF,5,500)
light.position.set(10,0,25);
scene.add(light);

var light2 = new THREE.PointLight(0xFF2266,5,500)
light2.position.set(10,0,25);
scene.add(light2);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});

function animate(){
    requestAnimationFrame(animate);

    renderer.render(scene,camera);
}

animate();