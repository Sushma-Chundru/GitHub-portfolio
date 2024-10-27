const resumeUrl = 'resume/Sushma Resume.pdf'; // Change to your resume file path

        document.getElementById('resumeButton').onclick = function() {
            // Download the file
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'SushmaChundruResume.pdf'; // Filename for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Open the file in a new tab
            window.open(resumeUrl, '_blank');
        };