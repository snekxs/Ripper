import {createClient} from "@supabase/supabase-js";


export default function Client() {

    const supabaseUrl = "https://dizdszfvqffitvnbmkkm.supabase.co";
    const supabaseKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpemRzemZ2cWZmaXR2bmJta2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg4ODgxMTYsImV4cCI6MTk4NDQ2NDExNn0.N9Var6jMOY5RTk2PwDgml3dLkwy8oZk1MgJEexbsCSI";

    const supabase = createClient(supabaseUrl, supabaseKey);

    return supabase;

}