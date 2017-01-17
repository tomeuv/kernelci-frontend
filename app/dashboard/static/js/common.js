/*! Kernel CI Dashboard | Licensed under the GNU GPL v3 (or later) */
require.config({
    paths: {
        'lib': './lib',
        'app': './app',
        'charts': './app/charts',
        'utils': './app/utils',
        'compare': './app/compare',
        'tables': './app/tables',
        'buttons': './app/buttons',
        'components': './app/components',
        'jquery': 'lib/jquery-2.2.1',
        'jquery.hotkeys': 'lib/jquery.hotkeys-1.0.min',
        'jquery.hotkeymap': 'lib/jquery.hotkeymap-1.0.min',
        'bootstrap': 'lib/bootstrap-3.3.6',
        'sprintf': 'lib/sprintf-1.0.3',
        'd3': 'lib/d3-3.5.16',
        'datatables.net': 'lib/jquery.dataTables-1.10.11',
        'datatables.bootstrap': 'lib/dataTables.bootstrap-1.10.11',
        'URI': 'lib/URI-1.17.0',
        'punycode': 'lib/punycode-1.17.0',
        'IPv6': 'lib/IPv6-1.17.0',
        'SecondLevelDomains': 'lib/SecondLevelDomains-1.17.0'
    },
    map: {
        '*': {
            'app/view-boot-compare': 'app/view-boot-compare.2016.6',
            'app/view-boots-all': 'app/view-boots-all.2016.11',
            'app/view-boots-all-job': 'app/view-boots-all-job.2016.6',
            'app/view-boots-all-job-kernel-defconfig': 'app/view-boots-all-job-kernel-defconfig.2016.6',
            'app/view-boots-all-lab': 'app/view-boots-all-lab.2016.11',
            'app/view-boots-board': 'app/view-boots-board.2016.11',
            'app/view-boots-board-job': 'app/view-boots-board-job.2016.11',
            'app/view-boots-board-job-kernel': 'app/view-boots-board-job-kernel.2016.6',
            'app/view-boots-board-job-kernel-defconfig': 'app/view-boots-board-job-kernel-defconfig.2016.6',
            'app/view-boots-board-lab': 'app/view-boots-board-lab.2016.6',
            'app/view-boots-id': 'app/view-boots-id.2016.11',
            'app/view-boots-job-kernel': 'app/view-boots-job-kernel.2016.7',
            'app/view-boots-regressions': 'app/view-boots-regressions.2016.11',
            'app/view-build-compare': 'app/view-build-compare.2016.6',
            'app/view-builds-all': 'app/view-builds-all.2016.11',
            'app/view-builds-id': 'app/view-builds-id.2016.6.1',
            'app/view-builds-job-kernel': 'app/view-builds-job-kernel.2016.7.1',
            'app/view-builds-job-kernel-defconfig': 'app/view-builds-job-kernel-defconfig.2016.6',
            'app/view-builds-job-kernel-defconfig-logs': 'app/view-builds-job-kernel-defconfig-logs.2016.6',
            'app/view-compare': 'app/view-compare.2016.6',
            'app/view-index': 'app/view-index.2016.6',
            'app/view-info-faq': 'app/view-info-faq.2016.6',
            'app/view-job-compare': 'app/view-job-compare.2016.6',
            'app/view-jobs-all': 'app/view-jobs-all.2016.6',
            'app/view-jobs-job': 'app/view-jobs-job.2016.6',
            'app/view-jobs-job-branch': 'app/view-jobs-job-branch.2016.6',
            'app/view-socs-all': 'app/view-socs-all.2016.6',
            'app/view-socs-soc': 'app/view-socs-soc.2016.6',
            'app/view-socs-soc-job': 'app/view-socs-soc-job.2016.6',
            'app/view-socs-soc-job-kernel': 'app/view-socs-soc-job-kernel.2016.6',
            'app/view-sponsors': 'app/view-sponsors.2016.6',
            'app/view-stats': 'app/view-stats.2016.6',
            'app/view-tests-all': 'app/view-tests-all.2016.11'
        }
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'datatables.bootstrap': {
            deps: ['datatables.net']
        },
        'jquery.hotkeys': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'jquery.hotkeymap': {
            deps: ['jquery.hotkeys']
        }
    }
});
