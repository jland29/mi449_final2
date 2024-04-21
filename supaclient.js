//import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js"
import { createClient } from '@supabase/supabase-js'
//const { createClient } = require('@supabase/supabase-js');
//import { createClient } from './supabase-js.js';

const supabaseUrl = 'https://aaknwbobxxkwllnoaqxj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFha253Ym9ieHhrd2xsbm9hcXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2ODQwNDcsImV4cCI6MjAyOTI2MDA0N30.XslnKsAHqMpOW5V2kNd-l4U32szfJPzD1NXXCKtw6zs'

const supabase = createClient(supabaseUrl, supabaseKey)

var button = document.getElementById('clickButton');


async function onLogIn() {
    var emailInput = document.getElementById('email').value;
    var password = document.getElementById('pw').value;

    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', emailInput)
    .eq('password', password)

    if (data.length > 0) {
        let logText = document.getElementById("logged-in");
        logText.innerHTML += `<li>Welcome, ${emailInput}!</li>`;
    }
}

button.addEventListener('click', function() {
    onLogIn();
});

export default supabase