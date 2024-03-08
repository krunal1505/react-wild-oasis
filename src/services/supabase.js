import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wrcngamuykskyrqoxpss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyY25nYW11eWtza3lycW94cHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjM2MTgsImV4cCI6MjAyNTM5OTYxOH0.QdapicHQIPv7a3SAPjL0n-YkW2QFL1TEhNB71izDJvo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
