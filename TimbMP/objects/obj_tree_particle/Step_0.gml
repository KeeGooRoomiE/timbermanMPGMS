/// @description Insert description here
// You can write your code in this editor

image_alpha=a;
speed=spd;

if (a>0.1)
{
 a-=.1;
}
else
{ 
	instance_destroy(self)
}

if (spd>0.1)
{
	spd-=0.1;
}

//image_angle=direction;