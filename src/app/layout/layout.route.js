(() => {

    /**
     * @ngdoc function
     * @name app.layout#layoutConfig
     * @module app.layout
     * @description
     *
     * The `layoutConfig` run block sets the layout states and triggers the `app` state which is the default state upon app loading.
     */
    angular
        .module('app.layout')
        .run(layoutConfig);

    /**
     * Sets initial application routes.
     * some info: https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views
     *
     * @param  {object} statehelper
     * @param  {object} templateRegistry
     * @param  {object} viewRegistry
     * @param  {object} $state
     */

    function layoutConfig(statehelper, templateRegistry, viewRegistry, $state) {
        statehelper.configureStates(getStates());

        // when layout is ready, go to the default state
        $state.go('app');

        //$state.go('app', {}, {location: true}); // will change the url;
        // http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#methods_go
        // need to detect if it's a single-page app or multiple apps

        ////////////////

        /**
         * Returns collection of state objects for layout module.
         * @return {array} A collection of state objects for UI-router
         */
        function getStates() {
            // TODO: move toc and toolbox parts to the corresponding modules
            return [
                {
                    name: 'app',
                    config: {
                        url: '/',
                        views: {
                            appbarPlug: {
                                templateUrl: templateRegistry.appbar
                            },

                            /*panelPlug: {
                                template: '<div>panel placeholder' +
                                    '<a href="">example of a link</a></div>'
                            },
                            filtersPlug: {
                                template: '<div>panel placeholder</div>'
                            },*/
                            detailsPlug: {
                                template: '<div>details panel placeholder</div>'
                            },
                            geoSearchPlug: {
                                template: '<div>geosearch placeholder</div>'
                            }
                        }
                    }
                },
                {
                    name: 'app.main.toc.filters',
                    config: {
                        abstract: true,
                        views: viewRegistry.filtersPlug
                    }
                },
                {
                    name: 'app.main.toc.filters.default',
                    config: {
                        url: 'default',
                        views: {
                            contentPlug: {
                                //templateUrl: templateRegistry.filtersDefault
                                template: '<rv-filters-default></rv-filters-default>'
                            }
                        }
                    }
                },
                {
                    name: 'app.main.toc.filters.default.minimized',
                    config: {
                        url: 'full'
                    }
                },
                {
                    name: 'app.main.toc.filters.default.full',
                    config: {
                        url: 'full'
                    }
                },
                {
                    name: 'app.main.toc.filters.default.attached',
                    config: {
                        url: 'full'
                    }
                },
                {
                    name: 'app.main',
                    config: {
                        abstract: true,
                        views: viewRegistry.panelPlug
                    }
                },
                {
                    name: 'app.main.toc',
                    config: {
                        url: 'toc',
                        views: {
                            contentPlug: {
                                templateUrl: templateRegistry.toc
                            }
                        }
                    }
                },
                {
                    name: 'app.main.toc.side',
                    config: {
                        abstract: true,
                        views: viewRegistry.sidePanelPlug
                    }
                },
                {
                    name: 'app.main.toc.side.metadata',
                    config: {
                        url: 'metadata',
                        views: {
                            contentPlug: {
                                templateUrl: templateRegistry.metadata
                            }
                        }
                    }
                },
                {
                    name: 'app.main.toc.side.settings',
                    config: {
                        url: 'settings',
                        views: {
                            contentPlug: {
                                templateUrl: templateRegistry.settings
                            }
                        }
                    }
                },
                {
                    name: 'app.main.toolbox',
                    config: {
                        url: 'toolbox',
                        views: {
                            contentPlug: {
                                templateUrl: templateRegistry.toolbox
                            }
                        }
                    }
                }
            ];
        }
    }
})();
