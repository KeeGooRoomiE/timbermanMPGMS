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

if (spd>(0.1*xsc) )
{
	spd-=(0.1*xsc);
}
//vspeed = 0 - (a*(-1.2));

	//image_angle=355+a*45;
	var _diff = angle_difference(270, direction);
	direction += _diff * (0.05*xsc);
if (sd >179)
{
	image_angle=direction-180;
}
else
{
	image_angle = direction;
}
