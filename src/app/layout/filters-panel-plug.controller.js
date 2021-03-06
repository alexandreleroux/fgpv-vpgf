(() => {

    /**
     * @ngdoc function
     * @name FiltersPanelPlugController
     * @module app.layout
     * @requires $rootScope
     * @description
     *
     * The `FiltersPanelPlugController` controller handles the filters panel plug view.
     * `self.active` is triggering an `active` CSS class to be added to the side panel plug when it's active.
     * `self.mode` is bound to a CSS class indicating current mode of the filters panel (default, attached, minimized, or full). `rvMorph` directive is used to animate between modes (when `rv-morph` attribute is applied to a HTML node).
     */
    angular
        .module('app.layout')
        .controller('FiltersPanelPlugController', FiltersPanelPlugController);

    function FiltersPanelPlugController($rootScope, $state) {
        const self = this;
        self.active = true;
        self.mode = 'default';

        self.closePanel = closePanel;

        ////////

        // staggers the main panel's transition if the side panel is open
        // FIXME: should be moved to a filter service and made sane
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {
                const filtersReg = /filters/;

                if (filtersReg.test(toState.name)) {
                    self.mode = toState.name.split('.')
                        .pop();
                }
            });

        /**
         * Temporary function to close the filters panel.
         * FIXME: this should be handled in the shatehelper
         */
        function closePanel() {
            let toState = $state.current.name.replace(/.filters.*/, '');
            console.log('Closing filters panel; going to', toState);
            $state.go(toState, {}, {
                location: false
            });
        }
    }
})();
