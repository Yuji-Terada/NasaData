var form = document.forms.images;

let N = 0

const renderEarth = (e) => {
    N = e.target.value;
    Globe()
        .globeImageUrl(`./${N}.jpg`)
        .pointAltitude('size')
        .pointColor('color')
    Container()
        .backgroundColor([#00000000])
    (document.getElementById('globeViz'));
}

form.addEventListener('change', renderEarth)

renderEarth({target: {value: 0}})
