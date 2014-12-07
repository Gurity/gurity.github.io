var tabs_position_x = [0];
var tabs_width = [];
var id_to_index = {};

function init_tab_click() {
    var $tabs = $('.nav_tab');
    $.each($tabs, function(index) {
        id_to_index[this.id] = index;
        tabs_width.push($(this).width());
        var x = tabs_position_x[tabs_position_x.length - 1];
        tabs_position_x.push(x + $(this).innerWidth());
    });
    console.info(tabs_width);
    console.info(tabs_position_x);
    $(document).on('click', '.nav_tab', function(e) {
        e.preventDefault();
        var target = e.target;
        //alert(id_to_index[target.id]);
        $('#nav_float_underline').animate({
            left: tabs_position_x[id_to_index[target.id]],
            width: tabs_width[id_to_index[target.id]]}, 200);
    });
}
