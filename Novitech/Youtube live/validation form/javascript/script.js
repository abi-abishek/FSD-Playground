function validateForm() {

    // Get form inputs
    
    var name = document.getElementById('name').value;
    
    var email = document.getElementById('email').value;
    
    // Reset error messages
    
    document.getElementById('nameError').innerHTML = ''; 
    document.getElementById('emailError').innerHTML = '';
    
    // Validate Name

    if (name === '') {

    document.getElementById('nameError').innerHTML = 'Name is required'; 
    return false; // Prevent form submission
    
    }
    
    // Validate Email
    
    var emailRegex = /^[^\s@]+@ [^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
    
    document.getElementById('emailError').innerHTML = 'Invalid email format'; 
    return false; // Prevent form submission
    
    }
    
    // If validation passes, the form will be submitted alert('Form submitted successfully!');
    
    return true;
}