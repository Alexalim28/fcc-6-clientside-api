const vibes = [
    "...and very awesome!",
    "...and so beatiful!",
    "...and strong dude!",
    "...and so is this puppy! 🐶"
];

const vibe = vibes[Math.floor(Math.random() * vibes.length)];

document.querySelector(".vibe").append(vibe);