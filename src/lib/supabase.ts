import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || "";

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

export default supabase;