( function()
{
  'use strict';

  angular.module('app.lab-one')
    .directive('sampleSizeViz', sampleSizeViz);

  /** @ngInject */
  function sampleSizeViz(d3, $timeout)
  {
    return {
      restrict: 'E',
      compile: compile,
      controller: sampleSizeController,
      controllerAs: 'vm',
      templateUrl: 'app/main/lab-one/directives/sample-size-viz.html'
    };

    function sampleSizeController()
    {
      var vm = this;
      vm.selected = [];
      vm.numSelected = 0;
      vm.populationSize = 4000;
    }

    function compile(tElement)
    {


      return postlink;

      function postlink(scope, element, attrs)
      {
        var margin
          , width
          , height
          , defaultExtent
          , data
          , quadtree
          , x
          , y;

        $timeout(function() {
          console.log(attrs);
          margin = {top: 30, right: 20, bottom: 30, left: 20}
            , width = document.getElementsByClassName('main-page-content')[0].offsetWidth
            , width = width - margin.left - margin.right
            , height = 600
            , defaultExtent = [[width/3, height/3], [2*width/3, 2*height/3]];

          if (attrs.random == "true") {
            data = d3.range(scope.vm.populationSize).map(function(value) {
                var ret = [Math.random() * width, Math.random() * height];
                ret.type = value % 2 ? "red" : "blue";
                return ret;
            });
          }
          else if (attrs.random == "false")
          {
            data = d3.range(scope.vm.populationSize / 2).map(function() {
              var ret = [Math.random() * width, Math.random() * height];
              ret.type = "red";
              if (ret[0] < width/2 && Math.random() < 0.66) {
                ret[0] += Math.random() * width / 2;
              }
              return ret;
            });
            var data2 = d3.range(scope.vm.populationSize / 2).map(function() {
              var ret = [Math.random() * width, Math.random() * height];
              ret.type = "blue";
              if (ret[0] > width/2 && Math.random() < 0.66) {
                ret[0] -= Math.random() * width / 2;
              }
              return ret;
            });

            data = data.concat(data2);
          }

          quadtree = d3.geom.quadtree()
            .extent([[-1,-1], [width+1, height + 1]])
            (data);

          x = d3.scale.identity().domain([0, width]);
          y = d3.scale.identity().domain([0, height]);

          /* Responsivitiy -- not easy
          d3.select(window).on('resize', resize);
          function resize() {
            width = document.getElementsByClassName('main-page-content')[0].offsetWidth;
            width = width - margin.left - margin.right;
            x.range([0,width]);
            // TODO
          }*/

          draw();
        }, 0);

        function draw()
        {
          var svg = d3.select(tElement[0]).append('svg')
            .attr("width", width)
            .attr("height", height);

          function brushed()
          {
            var extent = brush.extent();
            point.each(function(d) { d.selected = false; });
            scope.$apply(function() {
              scope.vm.selected.length = 0;
              search(quadtree, extent[0][0], extent[0][1], extent[1][0], extent[1][1]);
              point.classed("selected", function(d) {
                if (d.selected) scope.vm.selected.push(d);
                return d.selected;
              });
            });
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
             .attr("r", 4)
             .classed("red", function(d) { return d.type == "red"})
             .classed("blue", function(d) {return d.type == "blue"});

           svg.append("g")
             .attr("class", "brush")
             .call(brush)
             .call(brush.event);
        } // end draw()
      } // end postlink()
    }
  }
})();
