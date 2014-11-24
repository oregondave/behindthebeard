proto.factory('orderData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'orders' + '.json'});
            }
      };
});