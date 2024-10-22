class PortfolioController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindThemeToggle(this.handleThemeToggle.bind(this));
    }

    async setup() {
        await this.model.setup();
        this.updateView();
    }

    updateView() {
        const data = this.model.getData();
        this.view.renderPersonalData(data)
        this.view.renderSkills(data.skills);
        this.view.renderReferences(data.references);
        this.view.renderSocialLinks(data.socialLinks);
    }

    handleThemeToggle() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        this.view.themeToggle.innerHTML = newTheme === 'light' ? '<i class="bi bi-moon-fill"></i>' : '<i class="bi bi-sun-fill"></i>';
    }
}

export default PortfolioController