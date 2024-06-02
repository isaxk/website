import Picture from "$lib/assets/profilepicture.jpg";
import { DiscordSolid, GithubSolid } from "flowbite-svelte-icons";

export const userInfo = {
    name: "Isaac",
    username: "isaxk",
    bio: "Casual Web Developer",
    picture: Picture,
};

export const socials = [
    {
        name: "GitHub",
        href: "https://github.com/isaxk",
        icon: GithubSolid,
    },
    {
        name: "Discord",
        href: "https://discord.com/users/988006561442041886",
        icon: DiscordSolid,
    },
];
