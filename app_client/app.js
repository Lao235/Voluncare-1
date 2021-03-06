(function () {
    angular.module('myApp', ['ionic', 'ionic-citypicker','onezone-datepicker','ngMessages','ion-datetime-picker']);
    
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url:'/',
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'about/about.html',
            controller: 'aboutCtrl'
        })
        .state('activities', {
            url:'/activities',
            templateUrl: 'activities/activities.view.html',
            controller: 'activitiesCtrl'
        })
        .state('detail', {
            url:'/activityDetail',
            params: {'activity': null},
            templateUrl: 'activityDetail/activityDetail.view.html',
            controller: 'activityDetailCtrl'
        })
        .state('register', {
            url:'/register',
            templateUrl: '/auth/register/register.view.html',
            controller: 'registerCtrl'
        })
        .state('login', {
            url:'/login',
            templateUrl: '/auth/login/login.view.html',
            controller: 'loginCtrl'
        })
        .state('postActivity', {
            url:'/postActivity',
            templateUrl: '/postActivity/postActivity.view.html',  
            controller:'postActivityCtrl'          
        })
        .state('records', {
            url:'/records',
            templateUrl: '/records/records.view.html',  
            controller:'recordsCtrl'          
        });
        $urlRouterProvider.otherwise("/"); 
};
    angular
.module('myApp')
.config(['$stateProvider', '$urlRouterProvider',config]);
}
)();
