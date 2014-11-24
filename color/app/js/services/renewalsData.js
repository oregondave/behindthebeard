proto.factory('renewalsData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'renewals' + '.json'});
            }
      };
});