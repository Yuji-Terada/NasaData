var N = document.form.image.value;
    
    Globe()
      .globeImageUrl(`./${N}.jpg`)
      .pointAltitude('size')
      .pointColor('color')
    (document.getElementById('globeViz'))
