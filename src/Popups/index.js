const prowPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-map-signs smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Public Right of Way</span>
    </div>
    <div class="smbc-map__item__body">
      <p>PROW Number: ${feature.properties.row}</p>
      <p>Type: ${feature.properties.type}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }
 export {
  prowPopup
}