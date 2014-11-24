proto.factory('commsData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/eventTracker/:id', {id:'@id'}).get({id:'comm' + '.json'});
            }
      };
});