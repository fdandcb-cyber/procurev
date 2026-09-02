export default function handler(req, res) {
    const supabaseUrl = 
        process.env.SUPABASE_URL ||
        process.env.VITE_SUPABASE_URL ||
        process.env.NEXT_PUBLIC_SUPABASE_URL ||
        process.env.REACT_APP_SUPABASE_URL ||
        'https://lxfkygzdywysdlaxmpdo.supabase.co';

    const supabaseKey = 
        process.env.SUPABASE_ANON_KEY ||
        process.env.SUPABASE_KEY ||
        process.env.VITE_SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        process.env.REACT_APP_SUPABASE_ANON_KEY ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Zmt5Z3pkeXd5c2RsYXhtcGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyODYzMzIsImV4cCI6MjEwMzg2MjMzMn0.YWlHtsBCB6AWTu0xfgI1zU9InwjcjG-1R488lYxrSq0';

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({
        supabaseUrl,
        supabaseKey
    });
}
