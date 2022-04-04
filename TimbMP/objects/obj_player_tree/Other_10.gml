/// @description Create chopping effect

var xx=x-1;
var yy=y-12;

//create object
var p=instance_create_depth(xx,yy,depth-1,obj_tree_particle);

//set sprtie
p.sprite_index=treeCellSpr;
p.image_speed=0;
p.image_index=irandom(p.image_number-1);
p.xsc = xsc;
p.b=treebrarr[0];

//set movement direction
if (isChompingLeft)
{
	p.direction=5+irandom(5);
	p.sd=5;
}
if (isChompingRight)
{
	p.direction=175-irandom(5);
	p.sd=185;
}

//set proper image
//[DEBUG] placed image same as tree 
p.image_index=treearr[0];