/**
 * Created by Tommy_Phan on 12/11/2015.
 */
angular.module('articles').factory('Articles',[
   '$resource',
    function($resource){
        return $resource('api/articles/:articleId',{
           articleId : '@_id'
        },{
            update : {
                method : 'PUT'
            }
        });
    }
]);