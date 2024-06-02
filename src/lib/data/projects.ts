import QuetemSS from "$lib/assets/screenshots/quetem.png";
import FlagsSS from "$lib/assets/screenshots/quickflags.png";
import FocusTuneSS from "$lib/assets/screenshots/focustune.png";
import WeirdTextSS from "$lib/assets/screenshots/weirdtext.jpeg";
import SinceThisSS from "$lib/assets/screenshots/sincethispageloaded.png";

export const projects = [
    {
        name: "Quetem",
        description: "Live wait times for global theme parks.",
        screenshot: QuetemSS,
        href: "https://quetem.isaxk.com",
        featured: true,
    },
    {
        name: "QuickFlags",
        description: "Fast paced, simple flag knowledge game.",
        screenshot: FlagsSS,
        href: "https://flags.isaxk.com",
        featured: true,
    },
    {
        name: "FocusTune",
        description: "Distraction-free desktop app for study radios.",
        screenshot: FocusTuneSS,
        href: "https://focustune.isaxk.com",
        featured: false,
    },
    {
        name: "WeirdText",
        description: "Make your text look weird.",
        screenshot: WeirdTextSS,
        href: "https://weirdtext.isaxk.com",
        featured: false,
    },
    {
        name: "Since this page loaded...",
        description: "Counters for global events",
        screenshot: SinceThisSS,
        href: "https://sincethispageloaded.isaxk.com",
        featured: false,
    },
];
