<script>

import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
} from 'svelte/transition';
    let faqItems = [
        {
            question: "1. What is a Builders League Hackathon?",
            answer: "Our hackathons are unique, collaborative events where participants work together as one large team on a shared challenge. Unlike traditional hackathons, we emphasize teamwork, rest, and creativity, with features like Code Freeze sessions to promote balance and productivity."
        },
        {
            question: "2. Who can participate in Builders League events?",
            answer: "If you have coding skills, you can join as a Builder to directly contribute to the challenge. If you don’t have coding experience, you can still participate as a GOAT volunteer to help with non-technical tasks like event coordination."
        },
        {
            question: "3. What roles exist in Builders League?",
            answer: `
                <ul class="list-disc ml-10">
                    <li>Builders: The core participants who solve problems, create projects, and tackle real-world challenges.</li>
                    <li>PuMAs (Project Management Angels): The leaders who guide teams, ensure projects stay on track, and help manage timelines and goals.</li>
                    <li>Code Wizards: Technical mentors who assist Builders by providing guidance, troubleshooting, and helping resolve complex technical challenges.</li>
                    <li>GOATs (Greatest of All Time Volunteers): Volunteers who handle non-technical tasks, keep everything running smoothly, and ensure the event is a success.</li>
                </ul>
                Stay tuned for announcements on how to apply for these roles in upcoming events.
            `
        },
        {
            question: "4. How do I join Builders League?",
            answer: "Stay connected by joining our Discord community and following us on social media. Watch out for announcements about upcoming events and registration opportunities."
        },
        {
            question: "5. What are Code Freeze sessions?",
            answer: "Code Freeze sessions are scheduled breaks during our hackathons, encouraging participants to rest, recharge, and reflect. We believe that a well-rested mind fosters better creativity and collaboration."
        },
        {
            question: "6. Do I need coding skills to participate?",
            answer: "Yes, coding skills are essential to actively contribute as a Builder during our hackathons. If you don’t have coding experience but still want to be involved, you can volunteer to assist with non-technical roles."
        },
        {
            question: "7. What kind of food is provided at Builders League events?",
            answer: "We’re proud to say that Builders League serves food beyond the typical cheese pizzas and coffee. Expect delicious, satisfying meals to fuel your creativity and collaboration."
        },
        {
            question: "8. Are there prizes for participating?",
            answer: "Yes! Our events often include prizes for top contributors, such as gift cards and recognition certificates to celebrate your efforts."
        },
        {
            question: "9. I want to sponsor or support Builders League. How can I get involved?",
            answer: "We welcome sponsors a nd supporters! Contact us through our website or email us directly to learn about sponsorship opportunities and how you can contribute to our mission."
        }
    ];

    let showMore = faqItems.map(() => false)

</script>

<div class="relative flex flex-col justify-between bg-white min-h-screen">

   <div class="flex flex-row justify-between mt-8 md:mt-16">
        <!-- Top Left FAQ -->
        <h1 class="left-0 pl-10 font-bold text-[#792298] text-5xl md:pl-20 sm:text-6xl md:text-8xl">
            FAQ
        </h1>
        <!-- Top Right Symbol -->
        <img src="cirdesblackabove.svg" alt="Top Right Symbol" class="pr-10 md:pr-20 h-12 md:h-20">
    </div>
   
    <div class="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl px-10 md:px-6 mx-auto my-8 text-sm md:text-sm font-comfortaa ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each faqItems as item, index}
                {#if index != 2}
                <div class="bg-[#EDEB52] col-span-1 p-2 rounded-md">
                    <b>{item.question}</b><br>
                    <span class="text-xs overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: {showMore[index] ? 'unset' : 3}; -webkit-box-orient: vertical;">
                        {@html item.answer}
                    </span>
                    <button 
                        class="text-[#792298] text-xs underline mt-1 cursor-pointer"
                        on:click={() => showMore[index] = !showMore[index]}>
                        {showMore[index] ? "See Less" : "See More"}
                    </button>
                </div>
                {:else}
                <div class="bg-[#EDEB52] col-span-1 md:col-span-2 p-2 rounded-md">
                    <b>{item.question}</b><br>
                    <span class="text-xs block overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: {showMore[index] ? 'unset' : 3}; -webkit-box-orient: vertical;">
                        {@html item.answer}
                    </span>
                    <button 
                        class="text-[#792298] text-xs underline mt-1 cursor-pointer"
                        on:click={() => showMore[index] = !showMore[index]}>
                        {showMore[index] ? "See Less" : "See More"}
                    </button>
                </div>
                {/if}
            {/each}
        </div>
    </div>

    <div class="flex flex-row justify-between mb-8 md:mb-16">
        <!-- Dots Image (Bottom Left) -->
        <img src="cirdesblackabove.svg" alt="Dots Pattern" class=" pl-10 h-12 md:pl-20 md:h-20">
        <!-- Star Image (Bottom Middle) -->
        <img src="stardesblack.png" alt="Bottom Right Symbol" class="h-12 md:h-20">
        <!-- Dots Image (Bottom Right) -->
        <img src="cirdesblackabove.svg" alt="Bottom Right Symbol" class="right-0 pr-10 md:pr-20 h-12 md:h-20">
    </div>
</div>