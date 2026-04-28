var xmlPath = './festival.xml';

fetch(xmlPath)
  .then(function (response) {
    if (!response.ok) {
      throw new Error('No se pudo cargar ' + xmlPath + ' (' + response.status + ')');
    }

    return response.text();
  })
  .then(function (xmlText) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    let Festival = xmlDoc.querySelector('festival');


    let heroPretitle = document.getElementById('hero-pretitle');
    let heroTitle = document.getElementById('heroTitle');
    let heroSubtitle = document.querySelector('.hero-subtitle');
    let heroLocation = document.getElementById('heroLocation');
    let heroTime = document.getElementById('heroTime');

    let nombreFestival = Festival.querySelector('nombre').textContent.trim();
    let ciudad = Festival.querySelector('ciudad').textContent.trim();
    let fecha = Festival.querySelector('fecha').textContent.trim();
    let horario = Festival.querySelector('horario').textContent.trim();
    let direccion = Festival.querySelector('lugar').textContent.trim();
    let descripcion = Festival.querySelector('descripcion').textContent.trim();

    var contacto = Festival.querySelector('contacto');
        var telefono = contacto.querySelector('telefono').textContent.trim();
        var whatsapp = contacto.querySelector('whatsapp').textContent.trim();
        var email = contacto.querySelector('email').textContent.trim();
    
    heroLocation.textContent = direccion;
    heroTime.textContent = horario;
     
    document.title = nombreFestival;

    heroPretitle.textContent = ciudad + ' · ' + fecha;
    heroTitle.textContent = nombreFestival;
    heroSubtitle.textContent = descripcion;

    window.festivalXmlDoc = xmlDoc;
    window.nombreFestival = nombreFestival;
    /*
    NODOS ACTIVIDADES
     */
    var nodoActividades = Festival.querySelector('actividades');
    var activityList = document.getElementById('activity-list');
    var divCardsGrid = document.getElementById('cardsGrid');

    nodoActividades.querySelectorAll('actividad').forEach(function (actividad) {
        
        var id= actividad.getAttribute('id').trim();
        var tipo= actividad.getAttribute('tipo').trim();
        var titulo = actividad.querySelector('titulo').textContent.trim();
        var descripcion = actividad.querySelector('descripcion').textContent.trim();
        var sala = actividad.querySelector('sala').textContent.trim();
        var itinerario = actividad.querySelector('itinerario').textContent.trim();
        var precio = actividad.querySelector('precio').textContent.trim();
        var imagen = actividad.querySelector('imagen').textContent.trim();
        var icono = actividad.querySelector('icono').textContent.trim();

        let li=document.createElement('li');
        let enlace = document.createElement('a');

        enlace.setAttribute('href', '#' + id);
        enlace.setAttribute('data-tipo', tipo);
        enlace.classList.add('activity-link');
        
        let spanActivityIcon = document.createElement('span');
        spanActivityIcon.classList.add('activity-icon');
        spanActivityIcon.textContent = icono;

        let div = document.createElement('div');

        let strong = document.createElement('strong');
        strong.textContent = titulo;
        
        let spanActivityMeta = document.createElement('span');
        spanActivityMeta.classList.add('activity-meta');
        spanActivityMeta.textContent = sala + ' · ' + itinerario + ' · ' + precio;

        let spanFlecha = document.createElement('span');
        spanFlecha.classList.add('arrow');
        spanFlecha.textContent = '→';

        enlace.appendChild(spanActivityIcon);

        div.appendChild(strong);
        div.appendChild(spanActivityMeta);
        enlace.appendChild(div);
        enlace.appendChild(spanFlecha);

        li.appendChild(enlace);
        activityList.appendChild(li);   


        //cardsGrid

        let article = document.createElement('article')
        article.classList.add('card')
        article.setAttribute('id', id)
        article.setAttribute('data-tipo', tipo)

        let figure = document.createElement('figure')
        figure.classList.add('card-image')

        let imgCard = document.createElement('img')
        imgCard.setAttribute('src', imagen)
        imgCard.setAttribute('alt', titulo)

        let figcaption = document.createElement('figcaption')
        figcaption.classList.add('card-badge')
        figcaption.textContent = tipo

        figure.appendChild(imgCard)
        figure.appendChild(figcaption)

        article.appendChild(figure)

        let divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body')

        let h3 = document.createElement('h3')
        h3.classList.add('card-title')
        h3.id = 'card-title-' + id

        divCardBody.appendChild(h3)

        let pCardDesc= document.createElement('p')
        pCardDesc.classList.add('card-desc')
        pCardDesc.textContent = descripcion

        divCardBody.appendChild(pCardDesc)

        let dlCardDetails = document.createElement('dl')
        dlCardDetails.classList.add('card-details')

        let divCardDetail1 = document.createElement('div')
        divCardDetail1.classList.add('card-detail')
        let divCardDetail2 = document.createElement('div')
        divCardDetail2.classList.add('card-detail')
        let divCardDetail3 = document.createElement('div')
        divCardDetail3.classList.add('card-detail')

        let dtSala = document.createElement('dt')
        dtSala.textContent = '🏛️ Sala'

        let ddSala = document.createElement('dd')
        ddSala.textContent = sala

    

        let dtSala2 = document.createElement('dt')
        dtSala2.textContent = '🕙 Horario'

        let ddSala2 = document.createElement('dd')
        ddSala2.textContent = itinerario

        

        let dtSala3 = document.createElement('dt')
        dtSala3.textContent = '🎟️ Precio'

        let ddSala3 = document.createElement('dd')
        ddSala3.classList.add('price')
        if(precio=='Gratis'){
            ddSala3.classList.add('free')
        }
        ddSala3.textContent = precio

        divCardDetail1.appendChild(dtSala)
        divCardDetail1.appendChild(ddSala)

        divCardDetail2.appendChild(dtSala2)
        divCardDetail2.appendChild(ddSala2)

        divCardDetail3.appendChild(dtSala3)
        divCardDetail3.appendChild(ddSala3)

        dlCardDetails.appendChild(divCardDetail1)
        dlCardDetails.appendChild(divCardDetail2)
        dlCardDetails.appendChild(divCardDetail3)

        divCardBody.appendChild(dlCardDetails)

        article.appendChild(divCardBody)
        
        divCardsGrid.appendChild(article)

    });

    //direccion
        //telefono
    //whatsapp
    //email    

    var ubicacion= document.getElementById('ubicacion').innerText= direccion;
    var fechaTiempo= document.getElementById('fechaTiempo').innerText= fecha + ' · ' + horario;

    var telefonoEl = document.getElementById('telefono');
    var whatsappEl = document.getElementById('whatsapp');
    var emailEl = document.getElementById('emailContacto');

    
      var telefonoLink = document.createElement('a');
      telefonoLink.href = 'tel:' + telefono;
      telefonoLink.textContent = telefono;
      telefonoEl.textContent = '';
      telefonoEl.appendChild(telefonoLink);
    

    
      var whatsappLink = document.createElement('a');
      whatsappLink.href = 'https://wa.me/' + whatsapp;
      whatsappLink.textContent = whatsapp;
      whatsappEl.textContent = '';
      whatsappEl.appendChild(whatsappLink);
    

    
      var emailLink = document.createElement('a');
      emailLink.href = 'mailto:' + email;
      emailLink.textContent = email;
      emailEl.textContent = '';
      emailEl.appendChild(emailLink);
    

    
  })
  .catch(function (error) {
    console.error('Error al cargar el XML:', error);
  });
