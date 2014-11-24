proto.factory('csrData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'csrList' + '.json'});
            }
      };
});