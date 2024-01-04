
function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const fileListElement = document.getElementById('fileList');

    fileListElement.innerHTML = '';

    if (fileInput.files.length > 0) {
        for (const file of fileInput.files) {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            fileListElement.appendChild(listItem);
        }
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-3';
        successAlert.textContent = 'Files uploaded successfully!';
        document.querySelector('.container').appendChild(successAlert);
        setTimeout(() => {
            successAlert.remove();
        }, 3000);
    } else {
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger mt-3';
        errorAlert.textContent = 'Please select files to upload.';
        document.querySelector('.container').appendChild(errorAlert);
        setTimeout(() => {
            errorAlert.remove();
        }, 3000);
    }
    fileInput.value = '';
}

function deleteFile() {
    const deleteInput = document.getElementById('deleteInput');

    if (deleteInput.value) {
        const selectedFileName = deleteInput.value;
        const index = uploadedFiles.indexOf(selectedFileName);
        if (index !== -1) {
            uploadedFiles.splice(index, 1);
        }
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-3';
        successAlert.textContent = `File "${selectedFileName}" deleted successfully!`;
        document.querySelector('.container').appendChild(successAlert);
        setTimeout(() => {
            successAlert.remove();
        }, 3000);
    } else {
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger mt-3';
        errorAlert.textContent = 'Please select a file to delete.';
        document.querySelector('.container').appendChild(errorAlert);
        setTimeout(() => {
            errorAlert.remove();
        }, 3000);
    }

    deleteInput.value = '';
    populateDeleteDropdown();
}

function populateDeleteDropdown() {
    const deleteInput = document.getElementById('deleteInput');
    const fileListElement = document.getElementById('fileList');
    deleteInput.innerHTML = '';

    for (const fileElement of fileListElement.children) {
        const fileName = fileElement.textContent;
        uploadedFiles.push(fileName);
        const option = document.createElement('option');
        option.value = fileName;
        option.textContent = fileName;
        deleteInput.appendChild(option);
    }
}
 