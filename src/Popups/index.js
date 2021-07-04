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

 const Land_Ownership_Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Land Ownership</span>
</div>
<div class="smbc-map__item__body">
  <p>Name: ${feature.properties.property_name}</p>
  <p>Committee: ${feature.properties.committee_new}</p>
  <p>Title Number: ${feature.properties.titlenumber}</p>
</div>
</div>`

  layer.bindPopup(content)
}

const conservationPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Conservation Area</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.cons_area}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const tpoPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Tree Preservation Order</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${feature.properties.tpo_number}</p>
      <p>Tree Number: ${feature.properties.tree_number}</p>
      <p>Name: ${feature.properties.tpo_name}</p>
      <p>Species: ${feature.properties.tree_species}</p>
      <p>Status: ${feature.properties.status}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const grittingroutesPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Gritting Routes</span>
  </div>
  <div class="smbc-map__item__body">
    <p>Route Type: ${feature.properties.classification}</p>
    <p>Route No: ${feature.properties.route}</p>
    <p>Route Description: ${feature.properties.name}</p>
  </div>
</div>`
 
  layer.bindPopup(content)
 } 

 const gritboxPopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-snowflake smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Grit Bins</span>
   </div>
   <div class="smbc-map__item__body">
     <p>Street: ${feature.properties.street}</p>
     <p>Position: ${feature.properties.position}</p>
   </div>
 </div>`
  
  layer.bindPopup(content)
 }

 const propertyextentsPopup = (feature, layer) => {
 
  const content = `<div class="smbc-map__item">
   <div class="smbc-map__item__header__block">
     <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
     <span class="smbc-map__item__header__block__title">Property Details</span>
   </div>
   <div class="smbc-map__item__body">
          ${feature.properties.sao_details}
     <br>${feature.properties.pao_details} ${feature.properties.street}
     <br>${feature.properties.town}
     <br>${feature.properties.postcode}
     <p>UPRN: ${feature.properties.uprn}</p>
   </div>
 </div>`
  
  layer.bindPopup(content)
 }

 const section38Popup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-road smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Section 38</span>
    </div>
    <div class="smbc-map__item__body"> 
      <p>Status: ${feature.properties.status}</p>
      <p>Date: ${feature.properties.date_registered}</p>
    </div>`

    layer.bindPopup(content)
}

const leasesPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
<div class="smbc-map__item__header__block">
  <i class="fa fa-file-text smbc-map__item__header__block__icon" aria-hidden="true"></i>
  <span class="smbc-map__item__header__block__title">Leases</span>
</div>
<div class="smbc-map__item__body">
  <p>Lease ID: ${feature.properties.lease_id}</p>
  <p>Tenant: ${feature.properties.tenant}</p>
  <p>Lease Type: ${feature.properties.lease_type}</p>
  <p>Property Leased: ${feature.properties.property_leased}</p>
  <p>Property Type: ${feature.properties.property_type}</p>  
</div>
</div>`

  layer.bindPopup(content)
}

 
 
 export {
  prowPopup,
  conservationPopup,
  tpoPopup,
  Land_Ownership_Popup,
  grittingroutesPopup,
  gritboxPopup,
  propertyextentsPopup,
  section38Popup,
  leasesPopup
}