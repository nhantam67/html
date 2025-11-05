import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xowaxqdflqphajiazubp.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvd2F4cWRmbHFwaGFqaWF6dWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMTEyNjAsImV4cCI6MjA3Nzc4NzI2MH0.wTGFWSVjeGZyCIMIY2ykGpLSkLNYHKeWtz3AX1uJkrU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
