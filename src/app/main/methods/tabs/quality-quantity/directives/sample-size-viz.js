( function()
{
  'use strict';

  angular.module('app.methods')
    .directive('sampleSizeViz', sampleSizeViz);

  /** @ngInject */
  function sampleSizeViz(d3)
  {
    return {
      restrict: 'E',
      compile: compile,
      controller: sampleSizeController,
      controllerAs: 'vm'
      //templateUrl: 'app/main/methods/tabs/quality-quantity/directives/sample-size-viz.html'
    };

    function sampleSizeController()
    {

    }

    function compile(tElement)
    {

      var width = 600,
          height = 600,
          defaultExtent = [[width/3, height/3], [2*width/3, 2*height/3]];

      var data = d3.range(5).map(function() {
        return [Math.random() * width, Math.random() * height];
      });

      var quadtree = d3.geom.quadtree()
        .extent([[-1,-1], [width+1, height + 1]])
        (data);

      var x = d3.scale.identity().domain([0, width]),
          y = d3.scale.identity().domain([0, height]);


      return postlink;

      function postlink(scope, element, attrs)
      {
        draw();

        function draw()
        {
          var svg = d3.select(tElement[0]).append('svg')
            .attr("width", width)
            .attr("height", height);

          function brushed()
          {
            var extent = brush.extent();
            point.each(function(d) { d.selected = false; });
            search(quadtree, extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
            point.classed("selected", function(d) { return d.selected; });
          }

          function search(quadtree, x0, y0, x3, y3)
          {
            quadtree.visit(function(node, x1, y1, x2, y2) {
              var p = node.point;
              if (p) p.selected = (p[0] >= x0) && (p[0] < x3) && (p[1] >= y0) && (p[1] < y3);
              return x1 >= x3 || y1 >= y3 || x2 < x0 || y2 < y0;
            });
          }

          var brush = d3.svg.brush()
            .x(x)
            .y(y)
            .extent(defaultExtent)
            .on("brush", brushed);

          var point = svg.selectAll(".point")
             .data(data)
           .enter().append("circle")
             .attr("class", "point")
             .attr("cx", function(d) { return d[0]; })
             .attr("cy", function(d) { return d[1]; })
             .attr("r", 4);

           svg.append("g")
             .attr("class", "brush")
             .call(brush)
             .call(brush.event);
        } // end draw()
      } // end postlink()
    }
  }
})();
