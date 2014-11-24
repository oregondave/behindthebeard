proto.factory('statesData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'states' + '.json'});
            }
      };
});