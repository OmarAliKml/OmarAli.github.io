class PortfolioView {
    constructor() {
        this.summary = document.getElementById('summary');
        this.skillsContainer = document.getElementById('skillsContainer');
        this.referencesContainer = document.getElementById('referencesContainer');
        this.themeToggle = document.getElementById('themeToggle');
        this.title = document.getElementById('title');
        this.navTitle = document.getElementById('navTitle');
        this.summaryTitle = document.getElementById('summaryTitle');
        this.copyrights = document.getElementById('copyrights');
    }

    renderSkills(skills) {
        this.skillsContainer.innerHTML = '';
        const containerWidth = this.skillsContainer.offsetWidth;
        let totalWidth = 0;

        skills.forEach(skill => {
            const chip = document.createElement('span');
            chip.className = 'skill-chip';
            chip.textContent = skill;
            this.skillsContainer.appendChild(chip);

            const chipWidth = chip.offsetWidth;
            chip.style.left = `${containerWidth + totalWidth}px`;
            totalWidth += chipWidth + 10;
        });

        this.animateSkills();
    }

    renderReferences(references) {
        this.referencesContainer.innerHTML = '';
        references.forEach(course => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<a href="${course.url}" target="_blank" class="text-decoration-none">${course.title}</a>`;
            this.referencesContainer.appendChild(listItem);
        });
    }

    animateSkills() {
        const chips = this.skillsContainer.children;
        const containerWidth = this.skillsContainer.offsetWidth;
        let totalWidth = 0;

        for (let chip of chips) {
            totalWidth += chip.offsetWidth + 10;
        }

        function animate() {
            for (let chip of chips) {
                const currentLeft = parseFloat(chip.style.left);
                if (currentLeft <= -chip.offsetWidth) {
                    chip.style.left = `${containerWidth + totalWidth - chip.offsetWidth}px`;
                } else {
                    chip.style.left = `${currentLeft - 1}px`;
                }
            }
            requestAnimationFrame(animate);
        }

        animate();
    }

    bindThemeToggle(handler) {
        this.themeToggle.addEventListener('click', handler);
    }

    renderPersonalData(data) {
        this.navTitle.innerText = data.navTitle
        this.summaryTitle.innerText = data.summaryTitle
        this.summary.innerText = data.summary;
        this.title.textContent = data.title
        this.copyrights.innerHTML = data.copyrights
    }

    renderSocialLinks(socialLinks) {
        const socialContainer = document.getElementById('social-links');

        socialLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.className = `social-icon ${link.class.split('-')[1]}`;
            anchor.title = link.title;
            anchor.target = link.url.startsWith('http') ? '_blank' : '_self';

            const icon = document.createElement('i');
            icon.className = `bi ${link.class}`;

            anchor.appendChild(icon);
            socialContainer.appendChild(anchor);
        });
    }
}

export default PortfolioView