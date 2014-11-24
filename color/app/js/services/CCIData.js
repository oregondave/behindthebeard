proto.factory('CCIData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'cci' + '.json'});
            }
      };
});