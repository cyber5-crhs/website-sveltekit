import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_API_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
  auth: { persistSession: false },
});
