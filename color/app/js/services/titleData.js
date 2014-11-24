proto.factory('titleData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/eventTracker/:id', {id:'@id'}).get({id:'titleData' + '.json'});
            }
      };
});