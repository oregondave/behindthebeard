proto.factory('customerDetailsData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'customerDetails' + '.json'});
            }
      };
});