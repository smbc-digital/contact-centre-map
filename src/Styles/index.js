function getColor_AreaCommittees(d) {
    switch 	(d) { 	case 'Corporate' : 
                        return '#ffff00'
                    case 'Education' : 
                        return '#ffaf5f'
                    case 'Greenspace' : 
                        return '#55ff55'
                    case 'Highways' : 
                        return '#3255ff'
                    case 'Social Services' :
                        return '#c88cff'
                    case 'Stockport Homes' : 
                        return '#d70000'
                    case 'Strategic Housing' : 
                        return '#15ebf6'
                    case 'Not Assigned' : 
                        return '#000000'
                    case 'Other' : 
                        return '#000000'                   
                }
            }
function LandOwnershipstyle(feature) {
    return {
        fillColor: getColor_AreaCommittees(feature.properties.committee_new),
        weight: 0,
        opacity: 0,
        color: 'black',
        fillOpacity: 0.5
        }
    }

    const conservationStyle = {
        color: '#FF0000',
        weight: 1,
        opacity: 0.2,
        fillColor: '#FF0000',
        fillOpacity: 0.2
    }

    const prowStyle = {
        color: '#006d2c',
        weight: 4,
        opacity: 1,
        fillColor: '#fec44f',
        fillOpacity: 0,
        dashArray: '7,7,7',
        dashOffset: '0'
    }

const tpoStyle = {
    color: '#00ff00',
    weight: 1,
    opacity: 1,
    fillColor: '#00ff00',
    fillOpacity: 0.7
}
const proposedtpoStyle = {
    color: '#f7ff05',
    weight: 1,
    opacity: 1,
    fillColor: '#f7ff05',
    fillOpacity: 0.7
}
const revokedtpoStyle = {
    color: '#2e3330',
    weight: 1,
    opacity: 1,
    fillColor: '#2e3330',
    fillOpacity: 0.7
}
const adopted_highwaysStyle = {
    color: '#ce1256',
    weight: 1,
    opacity: 0.25,
    fillColor: '#ce1256',
    fillOpacity: 0.25
}
function getColor_gritboxes(d) {
    switch  (d) {   case 'highway'    :
                        return '#ff7f00'    
                    case 'car park'    :
                        return '#3f007d'  
                }
    }

function gritboxesStyle (feature) {
    return {
        radius: 6,
        color: '#000',
        weight:2,
        opacity:1,
        fillColor: getColor_gritboxes (feature.properties.box_type),
        fillOpacity:1
    }
}

function getColor_grittingroutes(d) {
    switch  (d) {   case 'Trailer'    :
                        return '#ffff99'    
                    case 'Supervisor'    :
                        return '#6a3d9a'
                    case 'Primary'    :
                        return '#e31a1c'  
                    case 'Other'    :
                        return '#33a02c'    
                }
    }
function grittingroutesStyle (feature) {
    return {
        color: getColor_grittingroutes (feature.properties.classification),
        weight: 4,
        opacity: 1,
        }
    }

    const propertyextentsStyle = {
        color: '#00ff00',
        weight: 0,
        opacity: 1,
        fillColor: '#00ff00',
        fillOpacity: 0
    }

    const section38Style = {
    color: '#800080',
    weight: 3,
    opacity: 1,
    fillColor: '#800080',
    fillOpacity: 0.5
    }

    const leasesStyle = {
        color: '#006400',
        weight: 4,
        opacity: 1,
        fillColor: '#006400',
        fillOpacity: 0
}

export {
tpoStyle,
proposedtpoStyle,
revokedtpoStyle,    
prowStyle,
LandOwnershipstyle,
adopted_highwaysStyle,
grittingroutesStyle,
conservationStyle,
gritboxesStyle,
propertyextentsStyle,
section38Style,
leasesStyle
}