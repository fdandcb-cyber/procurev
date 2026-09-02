export default function handler(req, res) {
    // Read environment variables submitted in Vercel Project Settings
    const supabaseUrl = 
        process.env.SUPABASE_URL ||
        process.env.VITE_SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL ||
        process.env.REACT_APP_SUPABASE_URL ||
        'https://addlxslnsxlrgleennto.supabase.co';

    const supabaseKey = 
        process.env.SUPABASE_ANON_KEY ||
        process.env.SUPABASE_KEY ||
        process.env.VITE_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        process.env.REACT_APP_SUPABASE_ANON_KEY ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkZGx4c2xuc3hscmdsZWVubnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MTQ5NjIsImV4cCI6MjA5ODQ5MDk2Mn0.AM-KEAI-hxzNNi5ML-Lki-wCsHHje8RqGubZ0h8tjPE';

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({
        supabaseUrl,
        supabaseKey
    });
}
