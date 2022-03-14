/// @description Insert description here
// You can write your code in this editor
draw_self();

var cellY=24;

for (i=0; i<arrL; i++)
{
	draw_sprite( spr_tt, treearr[i], x-1, y-(cellY/2)-(cellY*i) );
}