<script>
    import { onMount } from "svelte";

    onMount(() => {
        const collaborateInput = document.querySelectorAll('input[name="collaborate"]');
        const ideaInput = document.querySelector('textarea[name="idea"]');
        
        // Initially, set the 'idea' field as not required
        if (ideaInput) {
            ideaInput.removeAttribute('required');
        }
        
        // Listen for changes on the "collaborate" radio buttons
        collaborateInput.forEach((input)=>{
            input.addEventListener('change', ()=>{
                if (input instanceof HTMLInputElement && ideaInput){
                    if(input.value === "yes" && input.checked){
                        ideaInput.setAttribute('required', 'true');
                    }else{
                        ideaInput.removeAttribute('required');
                    }                   
                }
            })
        })
    });
</script>

<div id="form-page" class="relative flex flex-col justify-between bg-black text-white">
    <!-- show when screen size is small -->
    <div class="flex flex-row justify-between mt-8 md:mt-16">
        <!-- Top Left Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="pl-5 sm:pl-10 md:pl-20 h-5 md:h-10">
        <!-- Top Right Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="pr-5 sm:pr-10 md:pr-20 h-20 md:h-28 -translate-y-5">
    </div>
    
    <div class="relative w-full max-w-3xl px-10 md:px-6 mx-auto mb-8 text-sm text-center md:text-sm ">
        <h1 class="text-[#E762C6] text-5xl font-bold">JOIN US</h1>
        <p class="text-base mt-2 font-comfortaa">Want to make an impact with Builders League? Whether you're interested in sponsoring, volunteering, or pitching a project, we'd love to hear from you.</p>
        
        <div class="border border-white p-6 mt-6 rounded-lg font-comfortaa">
            <form action="/api/sendform" method="POST" class="space-y-4">
                <label class="block text-left">1. What is your name?</label>
                <input name="name" type="text" class="w-11/12 p-2 text-black rounded" required placeholder="Your name" maxlength="100"/>
            
                <label class="block text-left">2. Are you interested in sponsoring Builders League?</label>
                <div class="flex space-x-4 justify-center gap-10">
                    <label><input name="sponsor" type="radio" value="yes" required> Yes</label>
                    <label><input name="sponsor" type="radio" value="no" required> No</label>
                </div>
            
                <label class="block text-left">3. Are you interested in volunteering at Builders League events?</label>
                <div class="flex space-x-4 justify-center gap-10">
                    <label><input name="volunteer" type="radio" value="yes" required> Yes</label>
                    <label><input name="volunteer" type="radio" value="no" required> No</label>
                </div>
            
                <label class="block text-left">4. Would you like to collaborate on future projects in Builders League (e.g., pitching a project)?</label>
                <div class="flex space-x-4 justify-center gap-10">
                    <label><input name="collaborate" type="radio" value="yes" required> Yes</label>
                    <label><input name="collaborate" type="radio" value="no" required> No</label>
                </div>
            
                <label class="block text-left">5. If you answered "Yes" to collaboration, please tell us more about your idea:</label>
                <textarea name="idea" class="w-11/12 p-2 text-black rounded" placeholder="Your idea" maxlength="2000"/>
            
                <label class="block text-left">6. Please provide your email so we can reach out to you:</label>
                <input name="email" type="email" class="w-11/12 p-2 text-black rounded" required placeholder="Your email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$" maxlength="100" />
            
                <br />
                <br />
            
                <button type="submit" class="w-1/4 bg-[#42C7F3] text-white font-bold py-2 rounded-lg mt-6 hover:bg-sky-500 transition">SUBMIT</button>
            </form>
        </div>
    </div>

    <div class="flex flex-row justify-between">
        <!-- Bottom Left Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="pl-5 -translate-y-5 sm:pl-10 md:pl-20 h-20 md:h-28">
        <!-- Bottom Right Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="pr-5 sm:pr-10 md:pr-20 h-5 md:h-10">
    </div>
</div>
