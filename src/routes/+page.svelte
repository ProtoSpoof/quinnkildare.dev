<script>
    import { GithubLogo, LinkedinLogo } from '$lib/assets/logos/index.js';
    export let data;
    let githubProfile = data.basics.profiles.find(
        (/** @type {{ network: string; }} */ e) => e.network === 'GitHub');
    let linkedinProfile = data.basics.profiles.find(
        (/** @type {{ network: string; }} */ e) => e.network === 'LinkedIn');
</script>

<section class="hero">
    <h1 class="name">{data.basics.name}</h1>
    <h2 class="headline">{data.basics.headline}</h2>
    <div class="profile-links">
        {#if githubProfile}
        <div class="link">
            <a href={githubProfile.url}>
                <GithubLogo/>
            </a>
        </div>
        {/if}

        {#if linkedinProfile}
        <div class="link">
            <a href={linkedinProfile.url}>
                <LinkedinLogo/>
            </a>
        </div>
        {/if}
        
    </div>
</section>

<style lang="scss">
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }
    .name {
        font-family: 'Yellowtail', cursive;
        font-size: clamp(3rem, 1.6rem + 7vw, 10rem);
        text-align: center;
        padding: 0 1rem;
        color: $text-primary;
        text-shadow: 1px 1px 0 $red, 2px 2px 0 $orange, 3px 3px 0 $yellow;
        word-spacing: 1rem;
    }

    .headline {
        // font-size: clamp(1.5rem, 1.2rem + 1.5vw, 3rem);
        font-size: clamp(1.5rem, 1.4rem + 0.5vw, 2rem);
        text-align: center;
        text-transform: uppercase;
    }

    .profile-links {
        display: flex;
        gap: clamp(2.5rem, 2rem + 2.5vw, 5rem);
        padding: 1rem;
    }

    .link {
        aspect-ratio: 1/1;
        width: clamp(2.5rem, 2rem + 2.5vw, 5rem);
    }

</style>

