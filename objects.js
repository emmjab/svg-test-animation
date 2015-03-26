  	    function create_flower_1(x_pos, y_pos) {

	    var flower_1_container = grass_is_greener.append("g")
	    								 .attr("class", "flower_1_container")
	    								 .attr("transform", "translate("+x_pos+","+y_pos+")");

	   	var stem = flower_1_container.append("rect")
	   								 .attr("x", 0)
	   								 .attr("y", 2)
	   								 .attr("width", 2)
	   								 .attr("height", 30)
	   								 .attr("fill", "green");

	    var petals = flower_1_container.append("circle")
	    							   .attr("cx", 0)
	    							   .attr("cy", 0)
	    							   .attr("r", 10)
	    							   .attr("fill", "orange");

	    var flower_center = flower_1_container.append("circle")
	    									  .attr("cx", 0)
	    									  .attr("cy", 0)
	    									  .attr("r", 5)
	    									  .attr("fill", "yellow");

	    return flower_1_container;
    }



    function create_flower_2(x_pos, y_pos) {

	    var flower_2_container = grass_is_greener.append("g")
	    								 .attr("class", "flower_2_container")
	    								 .attr("transform", "translate("+x_pos+","+y_pos+")");

	   	var stem = flower_2_container.append("rect")
	   								 .attr("x", 0)
	   								 .attr("y", 2)
	   								 .attr("width", 2)
	   								 .attr("height", 30)
	   								 .attr("fill", "green");



	    var flower_bulb = flower_2_container.append("ellipse")
	    									  .attr("cx", 0)
	    									  .attr("cy", 0)
	    									  .attr("rx", 5)
	    									  .attr("ry", 7)
	    									  .attr("fill", "purple");

	    var petals = flower_2_container.append("polygon")
	    							   .attr("points", "-4,-4 -2,-10 0,-4 2,-10 4,-4")
	    							   .attr("fill", "purple");

	    var leaf = flower_2_container.append("polygon")
	    							 .attr("points", "0,12 8,18 0,24")
	    							 .attr("fill", "green");

	    return flower_2_container;
    }


  	// first created dog; direction is currently useless
  	function create_dog(direction) {

	    var dog_container = svg.append("g")
	    					   .attr("class", "dog_container");

		var dog = dog_container.append("g")
					 .attr("class", "dog");
					 //.attr("transform"), "scale("+direction+",1)");
						   

	  	var head = dog.append("circle")
	  					.attr("cx", 250-250)
	  					.attr("cy", h - 120)
	  					.attr("r", 20)
	  					.attr("fill","yellow");

	    var snout = dog.append("ellipse")
	    			  .attr("cx",258-250)
	    			  .attr("cy", h-115)
	    			  .attr("rx", 20)
	    			  .attr("ry",14)
	    			  .attr("fill","yellow");

	    var nose = dog.append("circle")
	    			  .attr("cx",277-250)
	    			  .attr("cy", h-122)
	    			  .attr("r",3)
	    			  .attr("fill","black");

	    var eye = dog.append("circle")
	    			  .attr("cx",262-250)
	    			  .attr("cy", h-124)
	    			  .attr("r",3)
	    			  .attr("fill","black");

	  	var ear = dog.append("ellipse")
	  				 .attr("cx", 240-250)
	  				 .attr("cy", h-115)
	  				 .attr("rx", 8)
	  				 .attr("ry", 12)
	  				 .attr("fill", "orange");

	  	var body = dog.append("rect")
	  				  .attr("x",230-250)
	  				  .attr("y",h-100)
	  				  .attr("width",40)
	  				  .attr("height",100)
	  				  .attr("fill","darkblue");

	    var briefcase_handle = dog.append("rect")
	  					   .attr("x",235-250)
	  					   .attr("y",h-35)
	  					   .attr("width",25)
	  					   .attr("height",4)
	  					   .attr("fill","brown");

	  	var briefcase_handle_left = dog.append("rect")
	  					   .attr("x",235-250)
	  					   .attr("y",h-35)
	  					   .attr("width",4)
	  					   .attr("height",10)
	  					   .attr("fill","brown");

	  	var briefcase_handle_right = dog.append("rect")
	  					   .attr("x",258-250)
	  					   .attr("y",h-35)
	  					   .attr("width",4)
	  					   .attr("height",10)
	  					   .attr("fill","brown");

	    var briefcase = dog.append("rect")
	  					   .attr("x",225-250)
	  					   .attr("y",h-25)
	  					   .attr("width",45)
	  					   .attr("height",23)
	  					   .attr("fill","brown");

	  	var briefcase_decoration_left = dog.append("rect")
	  										.attr("x",232-250)
	  										.attr("y",h-25)
	  										.attr("width",6)
	  										.attr("height",23)
	  										.attr("fill","red");

	   	var briefcase_decoration_right = dog.append("rect")
	  										.attr("x",259-250)
	  										.attr("y",h-25)
	  										.attr("width",6)
	  										.attr("height",23)
	  										.attr("fill","red");

	  	var hand = dog.append("circle")
	  					.attr("cx", 245-250)
	  					.attr("cy", h - 35)
	  					.attr("r", 8)
	  					.attr("fill","yellow");

	  	var sleeve_left = dog.append("rect")
	  					.attr("x",231-250)
	  					.attr("y",h-95)
	  					.attr("width",20)
	  					.attr("height",55)
	  					.attr("fill","lightblue");

	  	var sleeve_right = dog.append("rect")
	  					.attr("x",269-250)
	  					.attr("y",h-99)
	  					.attr("width",1)
	  					.attr("height",55)
	  					.attr("fill","lightblue");

	  	var button = dog.append("circle")
	    			  .attr("cx",260-250)
	    			  .attr("cy", h-70)
	    			  .attr("r",3)
	    			  .attr("fill","black");

	  	var button = dog.append("circle")
	    			  .attr("cx",260-250)
	    			  .attr("cy", h-55)
	    			  .attr("r",3)
	    			  .attr("fill","black");

	    return dog_container;

    }


    //this is dog facing the fence
    function create_dog_looking_through_fence(which_svg) {


		var dog = which_svg.append("g")
					 .attr("class", "staring_dog")
					 .attr("transform", "translate("+w/2+",0)");
					 //.attr("transform"), "scale("+direction+",1)");
						   

	  	var head = dog.append("circle")
	  					.attr("cx", 250-250)
	  					.attr("cy", h - 120)
	  					.attr("r", 20)
	  					.attr("fill","yellow");

	  	var ear = dog.append("ellipse")
	  				 .attr("cx", 230-250)
	  				 .attr("cy", h-115)
	  				 .attr("rx", 8)
	  				 .attr("ry", 12)
	  				 .attr("fill", "orange");

	  	var ear = dog.append("ellipse")
	  				 .attr("cx", 270-250)
	  				 .attr("cy", h-115)
	  				 .attr("rx", 8)
	  				 .attr("ry", 12)
	  				 .attr("fill", "orange");

	  	var body = dog.append("rect")
	  				  .attr("x",230-250)
	  				  .attr("y",h-100)
	  				  .attr("width",40)
	  				  .attr("height",100)
	  				  .attr("fill","darkblue");

	    var briefcase_container = dog.append("g")
	    							 .attr("class", "briefcase")
	    							 .attr("transform", "translate(-30,0)");

	    var briefcase_handle = briefcase_container.append("rect")
	  					   .attr("x",235-250)
	  					   .attr("y",h-35)
	  					   .attr("width",25)
	  					   .attr("height",4)
	  					   .attr("fill","brown");

	  	var briefcase_handle_left = briefcase_container.append("rect")
	  					   .attr("x",235-250)
	  					   .attr("y",h-35)
	  					   .attr("width",4)
	  					   .attr("height",10)
	  					   .attr("fill","brown");

	  	var briefcase_handle_right = briefcase_container.append("rect")
	  					   .attr("x",258-250)
	  					   .attr("y",h-35)
	  					   .attr("width",4)
	  					   .attr("height",10)
	  					   .attr("fill","brown");

	    var briefcase = briefcase_container.append("rect")
	  					   .attr("x",225-250)
	  					   .attr("y",h-25)
	  					   .attr("width",45)
	  					   .attr("height",23)
	  					   .attr("fill","brown");

	  	var lefthand = dog.append("circle")
	  					.attr("cx", 220-250)
	  					.attr("cy", h - 38)
	  					.attr("r", 8)
	  					.attr("fill","yellow");

	  	var sleeve_left = dog.append("rect")
	  					.attr("x",220-250)
	  					.attr("y",h-95)
	  					.attr("width",15)
	  					.attr("height",55)
	  					.attr("transform", "rotate(10 0 400)")
	  					.attr("fill","lightblue");


	  	var sleeve_left = dog.append("rect")
	  					.attr("x",220-250)
	  					.attr("y",h-95)
	  					.attr("width",15)
	  					.attr("height",55)
	  					.attr("transform", "rotate(20 150 550)")
	  					.attr("fill","lightblue");

	    var righthand = dog.append("circle")
	  					.attr("cx", 300-250)
	  					.attr("cy", h - 150)
	  					.attr("r", 8)
	  					.attr("fill","yellow");

	    return dog;


    }


  	