myApp.controller("DetailController", ["$scope", "characters", "chapters", "seasons", "WikipediaService",
			function($scope,  characters,  chapters,  seasons, WikipediaService) {
                $scope.characters = characters;
				$scope.chapters = chapters;
				$scope.seasons = seasons;
				$scope.getInfo = function(name) {
					WikipediaService.getInfo(name)            
					.then(
					  function(data) {
						$scope.detail = data.query.pages;
					  },
					  function(error) {
						$scope.detail = error;
					});
				}
			}
        ])
		.factory("WikipediaService", ["$http", "$q", function($http, $q) {
          return {
            getInfo: function(name) {
              var defered = $q.defer();
              var url = 'http://en.wikipedia.org/w/api.php?titles=' + name + '&action=query&format=json&callback=JSON_CALLBACK&prop=extracts|pageimages&piprop=thumbnail&pithumbsize=200';
              $http.jsonp(url).then(function(response) {
                  defered.resolve(response.data);
                }, function(response) {
                  defered.reject(response.data)
                });
              return defered.promise;
            }
          };
        }]);