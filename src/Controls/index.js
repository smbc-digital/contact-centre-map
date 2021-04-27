import { os_open, greyscale, streetLayer } from '../Tiles'
import Leaflet from 'leaflet'
import fetch from 'cross-fetch'

const AddLayerControlsLayers = MapConfig => {
  const controlLayers = {}

  if (MapConfig.DisplayLayerControls) {
    controlLayers['Ordnance Survey'] = os_open

    if (MapConfig.DisplayGrayScale) {
      controlLayers['Open Street Map'] = streetLayer
    }

    if (MapConfig.DisplayStreets) {
      controlLayers['Open Street Map Greyscale'] = greyscale
    }
  }

  if (Object.keys(controlLayers).length > 1) {
    return controlLayers
  }

  return {}
}

const AddWMSLayers = (Config, overlays, WMSLayerGroup, mapRef) => {
  if (Config.Map.DisplayLayerControls) {
    Object.keys(WMSLayerGroup).map((layer) => {
      const layerDetails = WMSLayerGroup[layer]
      var wmsLayer = new Leaflet.tileLayer.wms(layerDetails.url, layerDetails.layerOptions)
      if(layerDetails.displayOverlay){
        overlays[layer] = wmsLayer
      } else {
        wmsLayer.addTo(mapRef)
      }
    })
  } else {
    Object.keys(WMSLayerGroup).map((layer) => {
      const layerDetails = WMSLayerGroup[layer]
      var wmsLayer = new Leaflet.tileLayer.wms(layerDetails.url, layerDetails.layerOptions)
        wmsLayer.addTo(mapRef)
    })
  }
  return overlays
}

const AddLayerControlsOverlays = (Config, DynamicLayerGroup, WMSLayerGroup, mapRef) => {
  let overlays = {}
  if (Config.DynamicData.some(layer => layer.displayOverlay) && Config.Map.DisplayLayerControls) {
    Config.DynamicData.map(layer => {
      if (layer.displayOverlay) {
        overlays[layer.key] = DynamicLayerGroup[layer.key]
      }

      if (layer.visibleByDefault) {
        DynamicLayerGroup[layer.key].addTo(mapRef)
      }
    })
  } else {
    Config.DynamicData.map(layer => {
      DynamicLayerGroup[layer.key].addTo(mapRef)
    })
  }

  return AddWMSLayers(Config, overlays, WMSLayerGroup, mapRef)
}

const SearchControlOverlay = () => {
  const searchAddress = (rawSearchTerm, callResponse) => 
    fetch(`https://spatial.stockport.gov.uk/geoserver/wfs?request=getfeature&outputformat=json&typename=address:llpg_points&cql_filter=address%20ilike%27%25${rawSearchTerm}%25%27`)
      .then(res => res.clone().json())
      .then(response => {
        callResponse(response.features.map(item => {
          const address = item.properties.address.replace(/\r\n/g, ', ').toUpperCase().trim()
          return { 'loc': item.geometry.coordinates.reverse(), 'title': address }
        }))
      })
  return new Leaflet.Control.Search({
    sourceData: searchAddress,
    position: 'bottomleft',
    zoom: 19,
    filterData: (_, val2) => val2,
    marker: false,
    minLength: 4
  })
}

export { AddLayerControlsLayers, AddLayerControlsOverlays, SearchControlOverlay }
