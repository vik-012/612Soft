import { createClient } from '@supabase/supabase-js';
import type { Database } from 'src/lib/types.ts'

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);