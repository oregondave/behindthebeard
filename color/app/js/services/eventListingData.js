proto.factory('eventListingData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/eventTracker/:id', {id:'@id'}).get({id:'eventListing' + '.json'});
            }
      };
});