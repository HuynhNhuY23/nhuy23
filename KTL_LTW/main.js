// Lắng nghe sự kiện click trên nút
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeButton');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        // Thực hiện hành động khi nút được nhấp
        output.textContent = 'Xin chào! Bạn đã nhấp vào nút.';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        var form = this;
        var formData = new FormData(form);

        fetch('process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById('response').innerHTML = data;
            form.reset(); // Reset the form after successful submission
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    });
});