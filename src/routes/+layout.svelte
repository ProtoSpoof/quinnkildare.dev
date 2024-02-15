<script>
    import "../app.scss";
    import { Particles } from "$lib/particles/particles.js";
    export const prerender = true;
    export let data;
</script>

<div class="background">
    <Particles></Particles>
</div>
<slot data={data}></slot>

<style lang="scss">
    .background {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $background;
        top: 0;
        left: 0;
        z-index: -1;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
</style>