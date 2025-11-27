import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vlstnotannzqtscaadty.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsc3Rub3Rhbm56cXRzY2FhZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxOTM2NTgsImV4cCI6MjA3OTc2OTY1OH0.5A8lBklMiFAE95XkkIzd2o8EI6k-nBJ1u4ybawiquAE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase