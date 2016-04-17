( function ()
  {
      'use strict';

      angular.module('app.lab-two')
	  .directive('yaxisViz', yaxisViz);

      /** @ngInject */
      function yaxisViz(d3, $timeout)
      {
	  return {
	      restrict: 'E',
	      compile: compile,
	      controller: yAxisController,
	      controllerAs: 'vm',
	      templateUrl: 'app/main/lab-two/directives/yaxis.html'
	  };

	  function yAxisController()
	  {
	      var vm = this;
	      vm.yMin = 0;
	      vm.yMax = 100;
	  }

	  function compile(tElement)
	  {
	      return postlink;

	      function postlink(scope, element, attrs)
	      {
		  var margin
		  , width
		  , height
		  , x
		  , y
		  , xAxis
		  , yAxis
		  , svg
		  , data
		  ;

		  margin = {
		      top     : 20,
		      right   : 20,
		      bottom  : 30,
		      left    : 40
		  };

		  // Initialization
		  var tmpWidth = document
		      .getElementsByClassName('main-page-content')[0].offsetWidth;
		  width = tmpWidth - margin.left - margin.right;
		  height = 500 - margin.top - margin.bottom;

		  x = d3.scale.ordinal()
		      .rangeRoundBands([0,width],.1);

		  y = d3.scale.linear()
		      .range([height, 0]);

		  xAxis = d3.svg.axis()
		      .scale(x)
		      .orient("bottom");

		  yAxis = d3.svg.axis()
		      .scale(y)
		      .orient("left")
		      .ticks(10, "%");

		  svg = d3.select(tElement[0]).append('svg')
		      .attr("width", width + margin.left + margin.right)
		      .attr("height", height + margin.top + margin.bottom)
		      .append("g")
		      .attr("transform", "translate(" + margin.left +
			    ", " + margin.top + ")"
			   );

		  data = [];
		  [0.65, 0.77, 0.81, 0.54, 0.80].forEach(function(cv, i) {
		      data.push({x: String(i), y: cv});
		  });

		  x.domain(data.map(function(d) {return d.x}));
		  scope.vm.yMin = 0;
		  scope.vm.yMax = d3.max(data, (function(d) { return d.y;}));
		  y.domain([scope.vm.yMin, scope.vm.yMax]);
		  
		  svg.append("g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0,"+height+")")
		      .call(xAxis);

		  svg.append("g")
		      .attr("class", "y axis")
		      .call(yAxis);
		  
		   svg.selectAll(".bar")
			  .data(data)
			  .enter()
			  .append("rect")
			  .attr("class", "bar")
			  .attr("x", function(d) {return x(d.x); })
			  .attr("width", x.rangeBand())
			  .attr("y", function(d) { return y(d.y); })
			  .attr("height", function(d) {return height - y(d.y);});
		  

		  function update()
		  {
		      
	              y.domain([scope.vm.yMin, scope.vm.yMax]);

		      var svg = d3.select(tElement[0]).transition();
		      
		      svg.select(".y.axis")
			  .duration(600)
			  .call(yAxis);
		      
		      svg.selectAll(".bar")
			  .attr("height", function(d) {return height - y(d.y);});
		  }
	      }
	  }
      }

  })();
