$(function(){
  $('article').children('ul').children('li').children('a').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    $('#model').addClass('active');
    let name = e.currentTarget.getAttribute("href")
    
    let image = new Image();
    image.src = profiles[name].imgSrc;

    let nameElement = document.createElement('h3');
    nameElement.innerHTML = profiles[name].name;

    let descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = profiles[name].information;

    $('#model').append(image, nameElement, descriptionElement);
  
  });

  $('#icon_close').click(function (e) { 
    e.preventDefault();
    $('#model').removeClass('active');
    resetModel()
  });

  $(document).click((event) => {
    if (!$(event.target).closest('#model').length) {
      $("#model").removeClass('active');
      resetModel()
    }        
  });

  let resetModel = () => {
    $("#model").children().filter(function(index) {return index !== 0}).remove();
  }
})

let profiles = {
  kevin: {
    name: "Kevin Wang",
    information: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.`,
  imgSrc: "images/img_kevin.jpg" 
  },
  louis: {
    name: "Louis Burton",
    information: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.`,
    imgSrc: "images/img_louis.jpg" 
  },
  kasper: {
    name: "Kasper Salto",
    information: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.`,
    imgSrc: "images/img_kasper.jpg",
  },
  chris: {
    name: "Chris Lee",
    information: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. It was popularised in 
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.`,
    imgSrc: "images/img_chris.jpg",
  }

}