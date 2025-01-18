// routes/api/sendform/+server.ts
import { supabase } from '$lib/supabase';
import type { RequestHandler } from './$types';


export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get('name')?.toString() || '';
    const sponsor_interest = formData.get('sponsor')?.toString() || '';
    const volunteer_interest = formData.get('volunteer')?.toString() || '';
    const collaborate_interest = formData.get('collaborate')?.toString() || '';
    const collaborate_idea = formData.get('idea')?.toString() || '';
    const email = formData.get('email')?.toString() || '';

    if (email.length > 50) {
        return new Response(JSON.stringify({ error: 'Email must be less than 50 characters' }), { status: 400 });
    }

    // Validate name length
    if (name.length > 500) {
        return new Response(JSON.stringify({ error: 'Name must be less than 500 characters' }), { status: 400 });
    }

    // Validate idea length
    if (collaborate_idea.length > 500) {
        return new Response(JSON.stringify({ error: 'Idea must be less than 500 characters' }), { status: 400 });
    }

    // Insert form data into Supabase
    const { data, error } = await supabase
        .from('get_involve_submission')  // Replace with your table name
        .insert([
            {
                name,
                email,
                sponsor_interest,
                volunteer_interest,
                collaborate_interest,
                collaborate_idea,
            },
        ]);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response('', { status: 302, headers: { Location: '/thank-you' } });
};
