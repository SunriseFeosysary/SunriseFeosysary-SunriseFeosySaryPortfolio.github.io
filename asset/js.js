
// Navigation entre pages
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link, .footer-link,.btn');
    const pages = document.querySelectorAll('.page');
    
    // Fonction pour changer de page
    function changePage(pageId) {
        // Masquer toutes les pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Afficher la page sélectionnée
        document.getElementById(pageId).classList.add('active');
        
        // Mettre à jour la navigation active
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Gérer les clics sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            changePage(pageId);
            
            // Faire défiler vers le haut de la page
            window.scrollTo(0, 0);
        });
    });
    
    // Filtrage du portefeuille
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mettre à jour les boutons actifs
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filtrer les éléments
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // LIEN DU BOUTON PLAY
    const lienyoutube = document.querySelectorAll('.play-btn');
    lienyoutube.forEach(box => {
        box.addEventListener('click', () => {
            const url = box.getAttribute('data-lien');
            window.open(url, '_blank');
        })
    })
});
