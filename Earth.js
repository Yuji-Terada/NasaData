var form = document.forms.images;
var N = form.image.value;
    
    Globe()
      .globeImageUrl(`./${N}.jpg`)
      .pointAltitude('size')
      .pointColor('color')
    (document.getElementById('globeViz'))
