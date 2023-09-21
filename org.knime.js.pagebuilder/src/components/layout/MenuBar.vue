<script>
export default {
    methods: {
        sendToParent(action) {
            const winRef = window.opener;
            winRef.postMessage({
                action: action,
                type: 'viewMessage',
                viewWindowId: window.viewWindowId
            }, '*');
        },
        reset() {
            this.sendToParent('reset');
        },
        apply() {
            this.sendToParent('apply');
        },
        close() {
            this.sendToParent('close');
        }
    }
};
</script>
<template>
    <div class="menu-bar">
        <button @click="reset" class="menu-item">重置</button>
        <button @click="apply" class="menu-item">应用</button>
        <button @click="close" class="menu-item">关闭</button>
    </div>
</template>

<style lang="postcss" scoped>
.menu-bar {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 4px;
    background-color: #eee;
    .menu-item {
        margin-right: 8px;
        padding: 2px 8px;
        font-size: 12px;
    }
}
</style>
