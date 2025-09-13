document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        const cookieBanner = document.createElement('div');
        cookieBanner.className = 'cookie-banner';
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-icon">
                    <canvas id="cookieCanvas" width="80" height="80"></canvas>
                    <button id="downloadCanvas" class="download-btn" title="Descarcă imaginea">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                    </button>
                </div>
                <p>Acest site folosește cookie-uri pentru a îmbunătăți experiența dumneavoastră. 
                   Continuând să navigați pe site, sunteți de acord cu utilizarea cookie-urilor.</p>
                <div class="cookie-buttons">
                    <button class="accept-cookies">Accept</button>
                    <button class="decline-cookies">Refuz</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(cookieBanner);

        const canvas = document.getElementById('cookieCanvas');
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#684A27';
        ctx.fillStyle = '#684A27';
        ctx.beginPath();
        ctx.arc(30, 30, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(30, 30, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(28, 28, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#684A27';
        ctx.beginPath();
        ctx.arc(50, 30, 8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(50, 30, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(48, 28, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#684A27';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(40, 45, 20, 0.2 * Math.PI, 0.8 * Math.PI);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(25, 35);
        ctx.lineTo(20, 30);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(55, 35);
        ctx.lineTo(60, 30);
        ctx.stroke();
        const downloadBtn = document.getElementById('downloadCanvas');
        downloadBtn.addEventListener('click', function() {
            const link = document.createElement('a');
            link.download = 'smile.png';
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        const acceptButton = cookieBanner.querySelector('.accept-cookies');
        const declineButton = cookieBanner.querySelector('.decline-cookies');

        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.remove();
        });

        declineButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.remove();
        });
    }
}); 