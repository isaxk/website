<script>
	import SocialIcon from "./SocialIcon.svelte";

</script>
<div class="hero">
    <div class="top-row">
        
        <div class="left">
            <div class="greeting">
                Hi! 
            </div>
            <div class="title">
                I'm Isaac <div class="light">(@isaxk)</div>
            </div>
            <div class="bio">Casual Web Developer</div>
            <div class="socials">
                <SocialIcon icon="github" href="https://github.com/isaxk"/>
                <SocialIcon icon="discord" href="https://discordapp.com/users/988006561442041886"/>
            </div>
        </div>
        <div class="profile-picture">
            <img src="/profilepicture.jpg" alt="profile" title="My cat (Boe)">
        </div>
    </div>

</div>

<style>
    .hero {
        max-width: 640px;
        width: 100%;
        padding: 0px 20px;
        box-sizing: border-box;
    }
    .top-row {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;
        align-items: center;
    }
    @media screen and (max-width: 530px) {
        .top-row {
            grid-template-columns: 1fr;
            place-items: center;
            text-align: center;
            gap: 0px;
            padding-bottom: 50px;
        }
    }
    .left {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 0px;
        align-items: center;
        padding: 20px 0px;
    }

    .greeting {
        font-size: 25px;
    }
    .greeting, .bio, .light {
        color: #ffffffd0;
    }
    .title {
        font-size: 35px;
        font-weight: 800;
    }
    .light {
        font-weight: 300;
        font-size: 80%;
        transform: translateY(-2.5px);
        display: inline-block;
    }
    .profile-picture {
        width: 100%;
        max-width: 180px;
    }
    .profile-picture img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
</style>