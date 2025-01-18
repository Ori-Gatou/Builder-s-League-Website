// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();  // This loads the variables from your .env file

const supabaseUrl = process.env.SUPABASE_URL!;  // Replace with your Supabase URL
const supabaseKey = process.env.SUPABASE_SECRET_KEY!;  // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
