var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Goa_Iron_AuctionBlocks_31102022_1 = new ol.format.GeoJSON();
var features_Goa_Iron_AuctionBlocks_31102022_1 = format_Goa_Iron_AuctionBlocks_31102022_1.readFeatures(json_Goa_Iron_AuctionBlocks_31102022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goa_Iron_AuctionBlocks_31102022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goa_Iron_AuctionBlocks_31102022_1.addFeatures(features_Goa_Iron_AuctionBlocks_31102022_1);
var lyr_Goa_Iron_AuctionBlocks_31102022_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Goa_Iron_AuctionBlocks_31102022_1, 
                style: style_Goa_Iron_AuctionBlocks_31102022_1,
                interactive: true,
                title: '<img src="styles/legend/Goa_Iron_AuctionBlocks_31102022_1.png" /> Goa_Iron_AuctionBlocks_31.10.2022'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Goa_Iron_AuctionBlocks_31102022_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Goa_Iron_AuctionBlocks_31102022_1];
lyr_Goa_Iron_AuctionBlocks_31102022_1.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'Lease_Id': 'Lease_Id', 'Mine': 'Mine', 'ML/TC Numb': 'ML/TC Numb', 'Comodity': 'Comodity', 'Lease Area': 'Lease Area', 'Forest Are': 'Forest Are', 'Taluka': 'Taluka', 'District': 'District', 'State': 'State', 'Lessee': 'Lessee', 'Mine Name': 'Mine Name', 'Category': 'Category', 'Active Min': 'Active Min', 'Mine Type': 'Mine Type', 'Main Miner': 'Main Miner', 'PRODUCTION': 'PRODUCTION', 'PRODUCTI_1': 'PRODUCTI_1', 'Last Produ': 'Last Produ', 'Exploratio': 'Exploratio', 'Total Bore': 'Total Bore', 'Meterage (': 'Meterage (', 'Balance Re': 'Balance Re', 'Balance _1': 'Balance _1', 'Balance _2': 'Balance _2', 'Balance _3': 'Balance _3', 'Grade (%)_': 'Grade (%)_', 'Grade (%_1': 'Grade (%_1', 'Stripping': 'Stripping', });
lyr_Goa_Iron_AuctionBlocks_31102022_1.set('fieldImages', {'LAYER': '', 'GM_TYPE': '', 'Lease_Id': '', 'Mine': '', 'ML/TC Numb': '', 'Comodity': '', 'Lease Area': '', 'Forest Are': '', 'Taluka': '', 'District': '', 'State': '', 'Lessee': '', 'Mine Name': '', 'Category': '', 'Active Min': '', 'Mine Type': '', 'Main Miner': '', 'PRODUCTION': '', 'PRODUCTI_1': '', 'Last Produ': '', 'Exploratio': '', 'Total Bore': '', 'Meterage (': '', 'Balance Re': '', 'Balance _1': '', 'Balance _2': '', 'Balance _3': '', 'Grade (%)_': '', 'Grade (%_1': '', 'Stripping': '', });
lyr_Goa_Iron_AuctionBlocks_31102022_1.set('fieldLabels', {'LAYER': 'header label', 'GM_TYPE': 'header label', 'Lease_Id': 'header label', 'Mine': 'header label', 'ML/TC Numb': 'header label', 'Comodity': 'header label', 'Lease Area': 'header label', 'Forest Are': 'header label', 'Taluka': 'header label', 'District': 'header label', 'State': 'header label', 'Lessee': 'header label', 'Mine Name': 'header label', 'Category': 'header label', 'Active Min': 'header label', 'Mine Type': 'header label', 'Main Miner': 'header label', 'PRODUCTION': 'header label', 'PRODUCTI_1': 'header label', 'Last Produ': 'header label', 'Exploratio': 'header label', 'Total Bore': 'header label', 'Meterage (': 'header label', 'Balance Re': 'header label', 'Balance _1': 'header label', 'Balance _2': 'header label', 'Balance _3': 'header label', 'Grade (%)_': 'header label', 'Grade (%_1': 'header label', 'Stripping': 'header label', });
lyr_Goa_Iron_AuctionBlocks_31102022_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});