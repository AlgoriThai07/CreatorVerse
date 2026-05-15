import { createClient } from "@supabase/supabase-js";

const URL = "https://wziyyiuyhpbsnfkclmop.supabase.co/rest/v1/";
const API_KEY = "sb_publishable_V1WVR5yqDtr7lD4akyGM3g_5D9UBdoO";

export const supabase = createClient(URL, API_KEY);
