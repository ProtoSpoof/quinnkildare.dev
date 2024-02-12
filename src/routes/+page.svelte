<script>
    import '$lib/sass/global.scss';
    import { onMount } from "svelte";

    /**
     * @type {{ basics?: any; }}
     */
    let data;
    onMount(async () => {
        try {
            let response = await fetch("https://gitconnected.com/v1/portfolio/protospoof");
            data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
            data = {};
        }
    });
</script>
<img class="profile-picture" src={data?.basics?.image} alt="Quinlan Kildare">
<h1 class="name">Quinlan Kildare</h1>
<h2>Computer Scientist, Programmer, Engineer</h2>
<div>

</div>

<style lang="scss">
    .profile-picture {
        aspect-ratio: 1;
        width: clamp(5rem, 10rem, 20rem);
        border-radius: 9999px;
        outline-style: solid;
        outline-color: #fdfd96;
        outline-width: 1px;
        box-shadow: 0 0 15px 5px #FDFD96;
    }
    .name {
        font-family: 'Yellowtail', cursive;
    }
</style>

