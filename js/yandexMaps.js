ymaps.ready(function(){

    var myMap = new ymaps.Map('map', {
        center: [37.61691485505143, 55.7517318022522],
        zoom: 10
    });

    var button = new ymaps.control.Button({
        data: {
            content: 'Ночной режим'
        },
        options: {
            selectOnClick: true,
            maxWidth: [90, 120, 200]
        }
    });

    button.events.add('select', function(){
        setMapLayer(myMap, 'dark');
    }).add('deselect', function(){
        setMapLayer(myMap, 'light');
    });
    
    myMap.controls.add(button, {
        float: 'left'
    });
});


function setMapLayer(map, map_type){
    const MAP = 'custom#' + map_type;
    ymaps.layer.storage.add(MAP, function mapLayer() {
        return new ymaps.Layer('https://core-renderer-tiles.maps.yandex.net/tiles?l=map' + ((map_type == 'dark') ? ('&theme=dark') : ('')) + '&%c&%l');
    });
    ymaps.mapType.storage.add(MAP, new ymaps.MapType(map_type, [MAP]));
    map.setType(MAP);
}