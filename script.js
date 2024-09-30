// Expand project description
function expandProject(projectElement) {
  const description = projectElement.querySelector('.project-description');
  if (description.style.display === 'block') {
    description.style.display = 'none';
  } else {
    description.style.display = 'block';
  }
}

// Validate contact form
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return false;
  }
  
  alert('Message sent successfully!');
  return true;
}

// Learn more button interaction
document.getElementById('learnMoreBtn').addEventListener('click', function() {
  alert('Thank you for your interest in learning more about me!');
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Open modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}



const toggle = document.getElementById('theme-toggle');
const projectModal = document.getElementById('projectModal');
const projectDetails = document.getElementById('projectDetails');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

function openProject(project) {
    let content = '';
    if (project === 'cybersecurity') {
        content = `<h2>Cybersecurity Project: Password Hacking</h2>
                   <p>This project involved creating a simulation of password hacking techniques to understand vulnerabilities.</p>`;
    } else if (project === 'ultrasonic') {
        content = `<h2>Arduino Ultrasonic System</h2>
                   <p>This project focused on using Arduino to build an ultrasonic distance measuring system.</p>`;
    } else if (project === 'circuit') {
        content = `<h2>Arduino-Based Circuit with 74HC32 Gate</h2>
                   <p>This project used Tinkercad to create a circuit that integrates Arduino with a 74HC32 logic gate.</p>`;
    }
    projectDetails.innerHTML = content;
    projectModal.style.display = "block";
}

function closeModal() {
    projectModal.style.display = "none";
}




//new 


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting in the default way
  
  // Simulate form processing
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Validate the form fields
  if (name && email && message) {
      document.getElementById("formResponse").innerText = "Thank you, " + name + "! Your message has been sent.";
      document.getElementById("formResponse").style.color = "green";
      
      // Reset the form
      document.getElementById("contactForm").reset();
  } else {
      document.getElementById("formResponse").innerText = "Please fill in all fields.";
      document.getElementById("formResponse").style.color = "red";
  }
});
