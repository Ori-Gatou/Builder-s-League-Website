<script>
    import { onMount } from "svelte";
  
    onMount(() => {
      document.querySelector('#anchor-link')?.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump behavior
        document.querySelector("#form-page")?.scrollIntoView({ behavior: "smooth" });
      });
    });
</script>
  
<div class="relative flex flex-col justify-between bg-white text-center font-sans h-[100vh]">
    <!-- Header -->
    <div>
        <div class="absolute flex justify-between items-center w-[100%] px-8 py-6 ">
            <div class="logo">
                <img src="mainlogoblack.svg" alt="Builders League" class="h-20">
            </div>
            <div class="flex space-x-4 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=100091749894319"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/ori.gatou_creative_solutions/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/ori-gatou-creative-solutions-inc/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    
        <!-- Dots (Top Left) -->
        <img src="cirdesblackabove.svg" alt="Dots Pattern" class="absolute top-32 pl-20 hidden sm:block sm:h-12 md:h-20">
    </div>
    

    <!-- Main Content -->
    <div class="max-w-2xl mx-auto text-center px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-[#42C7F3] leading-tight">
            SOLVING REAL PROBLEMS AND CHANGING THE WORLD
        </h1>
        <p class="mt-6 text-lg italic font-semibold">
            Want to make an impact with Builders League? Whether you're interested in sponsoring, volunteering, or pitching a project, we’d love to hear from you.
        </p>
        <p class="mt-4 text-base italic">
            Click the button below to let us know how you’d like to contribute!
        </p>
        <a id="anchor-link" href="#form-page" class="mt-6 inline-block bg-[#42C7F3] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-sky-500 transition">
            Get Involved
        </a>
    </div>

    <!-- Dots (Bottom Right) -->
    <div>
        <img src="cirdesblackabove.svg" alt="Dots Pattern" class="absolute bottom-16 right-0 pr-20 h-12 md:h-20">
    </div>
</div>
