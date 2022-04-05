/// @description Insert description here
// You can write your code in this editor
image_xscale = xsc;
image_yscale = xsc;

image_alpha=a;
speed=spd;

if (a>0.05)
{
 a-=.05;
}
else
{ 
	instance_destroy(self)
}
