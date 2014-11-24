proto.factory('customerData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'customerListing' + '.json'});
            }
      };
});