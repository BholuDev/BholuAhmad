$(document).ready(function () {
    // Initialize the flipster carousel
    $('.carousel').flipster({
        style: 'carousel',
        spacing: -0.3,
    });

    // Function to open book pages
    function bookOpen() {
        let page = document.getElementsByClassName("page");
        let index = page.length;

        page[index - 1].style.transform = "rotateY(-180deg)";
        page[index - 1].style.boxShadow = "0 0 8px #fff";
        page[index - 2].style.boxShadow = "0 0 8px #fff";
        page[index - 3].style.boxShadow = "0 0 8px #fff";
        page[index - 4].style.boxShadow = "0 0 8px #fff";
        page[index - 5].style.boxShadow = "0 0 8px #fff";
        page[index - 6].style.boxShadow = "0 0 8px #fff";
        page[index - 7].style.boxShadow = "0 0 8px #fff";
        page[index - index].style.boxShadow = "2px 3px 1px #fff";

        setTimeout(() => {
            page[index - 2].style.transform = "rotateY(-179deg)";
        }, 400);

        setTimeout(() => {
            page[index - 3].style.transform = "rotateY(-178deg)";
        }, 800);

        setTimeout(() => {
            page[index - 4].style.transform = "rotateY(-176deg)";
        }, 1200);

        setTimeout(() => {
            page[index - 5].style.transform = "rotateY(-174deg)";
        }, 1600);

        setTimeout(() => {
            page[index - 6].style.transform = "rotateY(-172deg)";
        }, 2000);

        setTimeout(() => {
            page[index - 7].style.transform = "rotateY(-60deg)";
        }, 2400);
    }

    // Add a click event handler for the download button
    $('#downloadButton').on('click', function () {
        // Find the currently displayed image
        let visibleImage = $('.carousel li.flip-current img');

        // Check if an image is visible
        if (visibleImage.length > 0) {
            // Create a temporary anchor element to trigger the download
            let downloadLink = document.createElement('a');
            downloadLink.href = visibleImage.attr('src');
            downloadLink.download = 'downloaded_image.jpg'; // You can set the desired file name here
            downloadLink.style.display = 'none';

            // Append the anchor to the document and trigger the click event
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Remove the anchor element from the document
            document.body.removeChild(downloadLink);
        } else {
            alert('No image is currently displayed.'); // Handle no image case
        }
    });
});
