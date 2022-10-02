var form = document.forms.images;
var form2 = document.forms.images2;

let M = 0
let N = 0

const mapWidth = document.body.clientWidth/2;

const map = document.getElementById('globeViz')
const map2 = document.getElementById('globeViz2')

const renderEarth = (e) => {
    M = e.target.value;
    const myGlobe = Globe()
        .backgroundColor("#00000000")
        .globeImageUrl(`./${M}.jpg`)
        .bumpImageUrl("topology.png")
        myGlobe(map)
        .width(mapWidth)
}

const renderEarth2 = (e) => {
    N = e.target.value;

    const myGlobe2 = _Globe()
        .backgroundColor("#00000000")
        .globeImageUrl(`./${N}.jpg`)
        .bumpImageUrl("topology.png")
        myGlobe2(map2)
        .width(mapWidth)

/*    const globeMaterial = myGlobe.globeMaterial();
    globeMaterial.bumpscale = 20;
    new THREE.TextureLoader().load('./4.jpg', texture => {
        globeMaterial.specularMap = texture;
        globeMaterial.specular = new THREE.Color('grey');
        globeMaterial.shininess = 15;
    })

    const globeMaterial2 = myGlobe2.globeMaterial();
    globeMaterial2.bumpscale = 20;
    new THREE.TextureLoader().load('./4.jpg', texture => {
        globeMaterial2.specularMap = texture;
        globeMaterial2.specular = new THREE.Color('grey');
        globeMaterial2.shininess = 15;
    })*/
}

form.addEventListener('change', renderEarth)
form2.addEventListener('change', renderEarth2)

renderEarth({target: {value: 0}})
renderEarth2({target: {value: 0}})