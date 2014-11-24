proto.factory('countriesData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'countries' + '.json'});
            }
      };
});