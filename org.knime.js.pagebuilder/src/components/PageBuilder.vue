<script>
import * as pagebuilderStoreConfig from '~/store/pagebuilder';
import * as interactivityStoreConfig from '~/store/interactivity';
import * as alertStoreConfig from '~/store/alert';
import Page from '~/src/components/layout/Page';
import AlertGlobal from '~/src/components/layout/AlertGlobal';
import MenuBar from '~/src/components/layout/MenuBar';

export default {
    components: {
        Page,
        AlertGlobal,
        MenuBar
    },
    initStore(store) { // this method is to be called by the embedding app, cf. README
        store.registerModule('pagebuilder', pagebuilderStoreConfig);
        store.registerModule('pagebuilder/interactivity', interactivityStoreConfig);
        store.registerModule('pagebuilder/alert', alertStoreConfig);
    },
    computed: {
        hasPage() {
            let page = this.$store.state.pagebuilder.page;
            return Boolean(page && page.wizardPageContent);
        }
    }
};
</script>

<template>
  <div>
    <Page v-if="hasPage" />
    <AlertGlobal />
    <MenuBar />
  </div>
</template>
