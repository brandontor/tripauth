// Initialize the JS client

import { createClient } from "@supabase/supabase-js"

import { Database } from "@/types/database"

const supabaseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SUPABASE_URL_DEV!
    : process.env.NEXT_PUBLIC_SUPABASE_URL!

const supabaseKey: string =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_DEV!
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
})

export default supabase
