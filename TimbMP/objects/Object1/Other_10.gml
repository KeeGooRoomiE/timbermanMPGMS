/// @description Create chopping effect

//create object
var p=instance_create_depth(x-1,y-12,depth-1,Object2);

//set sprtie
p.sprite_index=spr_tt;
p.image_speed=0;

var ddamp=irandom_range(-20,20);

if (isChompingLeft)
{
	p.direction=irandom(0+ddamp);
}
if (isChompingRight)
{
	p.direction=irandom(180+ddamp);
}

//set proper image
//[DEBUG] placed image same as tree 
p.image_index=treearr[0];