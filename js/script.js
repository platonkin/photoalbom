document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const gallery = document.getElementById('gallery');

    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Загруженное фото';

                photoDiv.appendChild(img);
                gallery.appendChild(photoDiv);
            };
            reader.readAsDataURL(file);
        }
    });
});