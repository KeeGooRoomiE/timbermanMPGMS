/// @description Insert description here
// You can write your code in this editor


var minutes = floor(leftTime/60);
var seconds = leftTime % 60;

var time = string(minutes) + ":" + string(seconds);

var cw = camera_get_view_width(view_camera[0]);
var ch = camera_get_view_height(view_camera[0]);
var cx = camera_get_view_x(view_camera[0]);
var cy = camera_get_view_y(view_camera[0]);

draw_set_font(fnt_main);
draw_set_halign(fa_center);
draw_set_valign(fa_middle);

//draw_text_ext_transformed_color(cx+cw/2,cy+24,time,24,128,1.1,1.1,0,c_black,c_black,c_black,c_black,1);
draw_sprite(spr_panel, 0, cx+cw/2, cy+18);
draw_text_ext_transformed_color(cx+cw/2, cy+24, time, 24, 128, 1, 1, 0, c_white, c_white, c_white, c_white, 1);

