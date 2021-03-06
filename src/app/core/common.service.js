(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name common
     * @module app.core
     * @requires $timeout
     * @description
     *
     * The `common` service provides access to commonly used services and functions like $timeout, $broadcast, $q, logger, etc.
     *
     */
    angular
        .module('app.core')
        .factory('common', common);

    // TODO: add helper function to common
    function common($timeout) {
        var service = {
            $timeout: $timeout
        };

        return service;

        ////////////////
    }
})();
