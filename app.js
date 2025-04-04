import Cone from "./dist/cone.js";

angular.module('coneApp', [])
  .controller('ConeController', function($scope) 
  {
    // Khởi tạo các thuộc tính radius và height
    $scope.radius = 0;
    $scope.height = 0;

    // Tạo đối tượng Cone khi người dùng nhập bán kính và chiều cao
    $scope.updateCone = function() 
    {
      if (typeof Cone !== 'undefined')
      {
        $scope.cone = new Cone($scope.radius, $scope.height);
      } 
    };


    
    // Các phép tính cho hình nón
    $scope.slantHeight = function() 
    {
      return $scope.cone ? $scope.cone.slantHeight() : NaN;
    };

    $scope.lateralSurfaceArea = function() 
    {
      return $scope.cone ? $scope.cone.lateralSurfaceArea() : NaN;
    };

    $scope.baseArea = function() 
    {
      return $scope.cone ? $scope.cone.baseArea() : NaN;
    };

    $scope.totalSurfaceArea = function() 
    {
      return $scope.cone ? $scope.cone.totalSurfaceArea() : NaN;
    };

    $scope.volume = function() 
    {
      return $scope.cone ? $scope.cone.volume() : NaN;
    };

    // Khởi tạo khi load trang
    $scope.updateCone();
  });
