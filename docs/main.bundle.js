(()=>{"use strict";const s={"traffic-stress-tiles":{type:"vector",url:"https://www.tiles.dvrpc.org/data/lts.json",minzoom:8},"rr-lines-src":{type:"geojson",data:"https://opendata.arcgis.com/datasets/48b0b600abaa4ca1a1bacf917a31c29a_0.geojson"},"rr-stops-src":{type:"geojson",data:"https://opendata.arcgis.com/datasets/64eaa4539cf4429095c2c7bf25c629a2_0.geojson"}};mapboxgl.accessToken="pk.eyJ1IjoiYWFyb25kdnJwYyIsImEiOiJja2NvN2s5dnAwaWR2MnptbzFwYmd2czVvIn0.Fcc34gzGME_zHR5q4RnSOg";const t={"rr-lines":{id:"rr-lines",type:"line",source:"rr-lines-src",layout:{},paint:{"line-width":4,"line-opacity":.4,"line-color":"blue"}},"rr-stops":{id:"rr-stops",type:"circle",source:"rr-stops-src",layout:{},paint:{"circle-radius":10,"circle-opacity":.7,"circle-color":"red"}}},o=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v10",center:[-75.16362,39.95238],zoom:12});o.on("load",(function(){for(const t in s)o.addSource(t,s[t]);for(const s in t)o.addLayer(t[s])}))})();