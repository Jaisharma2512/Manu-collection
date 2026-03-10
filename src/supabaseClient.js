import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pmbufhwkrkpibdvhcjhj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYnVmaHdrcmtwaWJkdmhjamhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNTY3OTAsImV4cCI6MjA4ODYzMjc5MH0.8rNEcJvzoF0iOEKKem9ionHb8CXqXiTsqtQnOwni1LE'

export const supabase = createClient(supabaseUrl, supabaseKey)
