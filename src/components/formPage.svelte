<script>
    import { onMount } from "svelte";

    onMount(() => {
        const collaborateYes = document.querySelector('input[name="collaborate"][value="yes"]');
        const collaborateNo = document.querySelector('input[name="collaborate"][value="no"]');
        const ideaInput = document.querySelector('input[name="idea"]');
        
        // Initially, set the 'idea' field as not required
        if (ideaInput) {
            ideaInput.removeAttribute('required');
        }
        
        // Listen for changes on the "collaborate" radio buttons
        if (collaborateYes && collaborateNo) {
            collaborateYes.addEventListener('change', () => {
                if (collaborateYes instanceof HTMLInputElement && collaborateYes.checked) {
                    // Set 'idea' as required when 'Yes' is selected
                    if (ideaInput) {
                        ideaInput.setAttribute('required', 'true');
                    }
                }
            });
    
            collaborateNo.addEventListener('change', () => {
                if (collaborateNo instanceof HTMLInputElement && collaborateNo.checked) {
                    // Remove 'required' from 'idea' when 'No' is selected
                    if (ideaInput) {
                        ideaInput.removeAttribute('required');
                    }
                }
            });
        }
    });
</script>

<div id="form-page" class="relative flex flex-col justify-between bg-black text-white sm:h-[100vh]">

    <!-- hide when screen size is small -->
    <div class="hidden sm:block">
        <!-- Top Left Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="absolute top-16 left-0 pl-10 lg:pl-20 h-5 md:h-10 z-0">

        <!-- Top Right Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="absolute top-16 right-0 pr-10 lg:pr-20 h-20 md:h-28 z-0 -translate-y-5">
    </div>

    <!-- show when screen size is small -->
    <div class="sm:hidden flex flex-row justify-between">
        <!-- Top Left Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="mt-8 sm:top-16 pl-5 h-5 z-0 ">

        <!-- Top Right Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="mt-8 pr-5 h-20 z-0 -translate-y-5">
    </div>
    
    <div class=" max-w-3xl mx-auto text-center px-10 lg:px-6 text-sm lg:text-base z-10">
        <h1 class="text-[#E762C6] text-4xl font-bold">JOIN US</h1>
        <p class="text-sm mt-2">Want to make an impact with Builders League? Whether you're interested in sponsoring, volunteering, or pitching a project, we'd love to hear from you.</p>
        
        <div class="border border-white p-6 mt-6 rounded-lg">
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
                <textarea name="idea" class="w-11/12 p-2 text-black rounded" required placeholder="Your idea" maxlength="2000"/>
            
                <label class="block text-left">6. Please provide your email so we can reach out to you:</label>
                <input name="email" type="email" class="w-11/12 p-2 text-black rounded" required placeholder="Your email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$" maxlength="100" />
            
                <br />
                <br />
            
                <button type="submit" class="w-1/3 bg-[#4CC9F0] text-black font-bold py-2 rounded mt-6">SUBMIT</button>
            </form>
        </div>
    </div>

    <!-- hide when screen size is small -->
    <div class="hidden sm:block">
        <!-- Bottom Left Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="absolute bottom-10 left-0 pl-10 lg:pl-20 h-20 md:h-28 z-0 translate-y-5">
        <!-- Bottom Right Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="absolute bottom-10 right-0 pr-10 lg:pr-20 h-5 md:h-10 z-0">
    </div>
    
    <!-- show when screen size is small -->
    <div class="sm:hidden flex flex-row justify-between mt-8">
        <!-- Bottom Left Symbol -->
        <img src="stardeswhite.png" alt="Top Right Symbol" class="pl-5 h-20 z-0 -translate-y-5">
        <!-- Bottom Right Symbol -->
        <img src="tridesabove.svg" alt="Top Left Symbol" class="pr-5 h-5 z-0">
    </div>
</div>
