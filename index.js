document.addEventListener("DOMContentLoaded", function () {
    const freelancersList = document.getElementById("freelancers-list");
    const averagePriceElement = document.getElementById("average-price");

    let freelancers = [];
    let averagePrice = 0;

    function updateList() {
        freelancersList.innerHTML = ""; // Clear the list

        freelancers.forEach(freelancer => {
            const freelancerElement = document.createElement("div");
            freelancerElement.classList.add("freelancer");
            freelancerElement.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
            freelancersList.appendChild(freelancerElement);
        });

        averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
    }

    // Simulate new freelancer entries every few seconds
    setInterval(function () {
        const newFreelancer = {
            name: "New Freelancer",
            occupation: "Designer", // Update with actual occupations
            startingPrice: Math.floor(Math.random() * 100) + 1, // Random starting price
        };

        freelancers.push(newFreelancer);
        averagePrice = (freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0) / freelancers.length);
        updateList();
    }, 5000); // Update every 5 seconds

    // Initial freelancers
    const initialFreelancers = [
        { name: "Alice", occupation: "Writer", startingPrice: 30 },
        { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    ];

    freelancers = [...initialFreelancers];
    averagePrice = (freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0) / freelancers.length);
    updateList();
});