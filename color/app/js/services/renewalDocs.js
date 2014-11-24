proto.factory('renewalDocsData', function ($resource) {
      return {
            getData: function () {
                  return $resource('data/renewals/:id', {id:'@id'}).get({id:'renewalDocs' + '.json'});
            }
      };
});