const jobListings = [
    {title: 'Web Developer', type: 'fullTime', location: 'City A', salary: 60000},
    {title: 'UX Designer', type: 'partTime', location: 'City B', salary: 40000},
    // Add more job listings as needed
];

document.addEventListener('DOMContentLoaded', function () {

const jobTypeFilter = document.getElementilyId('jobType'); 
const locationFiter = document.getElementById('location');
const salaryFilter = document.getElementById('salary'); 
const salaryValue = document.getElementById('salaryValue');
const filterBtn = document.getElementById('filterBtn'); 
const jobListingsContainer = document.getElementById('JobListings');

// Initial render with all job listings 
renderJoblistings(joblistings);

// Add event listener the filter button 
filterBtn.addEventListener('click', function () {
    filterjoblistings();
});

// Update salary value display when the range Input changes 
salaryFilter.addEventListener('input', function () {
    salaryValue.textContent = salaryFilter.value;
});
// Function to render job listings

function renderJobListings (jobs) {
    jobListingsContainer.innerHTML = '';

    jobs.forEach(job => {
    const listingDiv = document.createElement('div'); 
    listingDiv.innerHTML = '<h3>$(job.title)</h3><p>Type: $[job.type]</p><p>Location: $[job.location)</p><p>Salary: $[job.salary)</p>';
    jobListingsContainer.appendChild(listingDiv);
    });
}

// Function to filter job listings based on user Input

function filterJobListings() { 
    const jobType = jobTypeFilter.value;
    const location = locationFilter.value.toLowerCase(); 
    const salary = parseInt(salaryFilter.value);

const filteredJobs = joblistings.filter(job => {
    return (jobType === 'all' || job.type === jobType) &&
    (job.location.toLowerCase().includes(location)) &&
    (job.salary >= salary);
});

renderJobListings(filteredJobs);

}

});