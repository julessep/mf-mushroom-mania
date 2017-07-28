// myApp.factory("MushFactory", function($q, $http){

//   let getMush = () => {
//     return $q( (resolve, reject) => {
//       $http.get("https://mushroom-mania-7bdb3.firebaseio.com/mushrooms.json")
//       .then( (mushrooms) => {
//         resolve(mushrooms)
//       })
//       .catch ( (err) => {
//         reject(err);
//       });
//     });
//   };

//   return {getMush};
// });
// $http uses promises languages. It's not optional!

// myApp.controller('MushController', function($scope, MushFactory){
//   MushFactory.getMush()
//   .then( (mushrooms) => {
//     let mushroomData = [];
//     angular.forEach(mushrooms.data, function(item){
//       mushroomData.push(item);
//     })
//     $scope.mushList = mushroomData;
//   });
// });

