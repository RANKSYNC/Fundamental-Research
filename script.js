// ==========================================
// ===== تنظیمات اولیه =====
// ==========================================

// داده‌های زیردسته‌ها
const subCategories = {
    geopolitical: ['War', 'Sanctions', 'Political Crisis'],
    central_bank: ['FED', 'ECB', 'BOE', 'BOJ'],
    interest_rate: ['Rate Hike', 'Rate Cut', 'Hold'],
    inflation: ['CPI', 'PPI'],
    employment: ['Unemployment', 'NFP', 'Jobs Data'],
    economic_growth: ['GDP', 'PMI'],
    liquidity: ['Money Supply', 'QE', 'QT'],
    regulation: ['Crypto Law', 'ETF', 'Government Decision'],
    sentiment: ['Bullish', 'Bearish', 'Fear & Greed'],
    other: ['Other']
};

// نام‌های فارسی دارایی‌ها
const assetNames = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    ALT: 'Altcoin',
    MEME: 'Meme Coin',
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
    GOLD: 'Gold',
    OIL: 'Oil',
    STOCK: 'Stock Market',
    OTHER: 'Other'
};

// آیکون‌های دارایی‌ها
const assetIcons = {
    BTC: '₿',
    ETH: '⟠',
    ALT: '🪙',
    MEME: '🐶',
    USD: '💵',
    EUR: '💶',
    GBP: '💷',
    GOLD: '🥇',
    OIL: '🛢️',
    STOCK: '📈',
    OTHER: '🔹'
};

// ==========================================
// ===== نمایش زمان زنده =====
// ==========================================

function updateLiveTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    };
    document.getElementById('liveTime').textContent = '⏰ ' + now.toLocaleString('fa-IR', options);
}

updateLiveTime();
setInterval(updateLiveTime, 1000);

// ==========================================
// ===== مدیریت دارایی‌ها =====
// ==========================================

const assetCheckboxes = document.querySelectorAll('.asset-item input[type="checkbox"]');
const selectedAssetsContainer = document.getElementById('selectedAssets');

assetCheckboxes.forEach(cb => {
    cb.addEventListener('change', function() {
        const parent = this.closest('.asset-item');
        parent.classList.toggle('active', this.checked);
        updateSelectedAssets();
    });
});

function updateSelectedAssets() {
    const checked = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
    const container = selectedAssetsContainer;
    
    if (checked.length === 0) {
        container.innerHTML = '<span class="hint">هنوز دارایی‌ای انتخاب نشده</span>';
        return;
    }
    
    container.innerHTML = '';
    checked.forEach(cb => {
        const value = cb.value;
        const tag = document.createElement('span');
        tag.className = 'selected-asset-tag';
        tag.innerHTML = `
            ${assetIcons[value] || '📌'} ${assetNames[value] || value}
            <span class="remove-asset" data-value="${value}">✕</span>
        `;
        container.appendChild(tag);
        
        tag.querySelector('.remove-asset').addEventListener('click', function() {
            const val = this.dataset.value;
            const checkbox = document.querySelector(`.asset-item input[value="${val}"]`);
            if (checkbox) {
                checkbox.checked = false;
                checkbox.closest('.asset-item').classList.remove('active');
                updateSelectedAssets();
                updateImpactAssets();
            }
        });
    });
    
    updateImpactAssets();
}

// ==========================================
// ===== مدیریت دسته‌بندی =====
// ==========================================

document.getElementById('mainCategory').addEventListener('change', function() {
    const subSelect = document.getElementById('subCategory');
    const category = this.value;
    
    subSelect.innerHTML = '';
    subSelect.disabled = !category;
    
    if (!category) {
        subSelect.innerHTML = '<option value="">ابتدا دسته اصلی را انتخاب کنید</option>';
        return;
    }
    
    const options = subCategories[category] || ['Other'];
    options.forEach(item => {
        const option = document.createElement('option');
        option.value = item.toLowerCase().replace(/ /g, '_');
        option.textContent = item;
        subSelect.appendChild(option);
    });
});

// ==========================================
// ===== مدیریت تاثیر روی دارایی‌ها =====
// ==========================================

const impactContainer = document.getElementById('impactContainer');
const allAssets = ['BTC', 'USD', 'GOLD', 'EUR', 'OIL', 'ETH', 'GBP', 'ALT', 'MEME', 'STOCK'];

function updateImpactAssets() {
    const selected = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
    const selectedValues = Array.from(selected).map(cb => cb.value);
    
    if (selectedValues.length === 0) {
        impactContainer.innerHTML = '<p class="impact-hint" style="color: #a0aec0;">📌 ابتدا دارایی‌ها را انتخاب کنید</p>';
        return;
    }
    
    impactContainer.innerHTML = '';
    selectedValues.forEach(asset => {
        const item = document.createElement('div');
        item.className = 'impact-item';
        item.innerHTML = `
            <span class="asset-label">${assetIcons[asset] || '📌'} ${assetNames[asset] || asset}</span>
            <div class="impact-buttons">
                <button type="button" class="impact-btn positive" data-asset="${asset}" data-value="positive">↑ مثبت</button>
                <button type="button" class="impact-btn negative" data-asset="${asset}" data-value="negative">↓ منفی</button>
                <button type="button" class="impact-btn neutral active" data-asset="${asset}" data-value="neutral">→ خنثی</button>
            </div>
        `;
        impactContainer.appendChild(item);
    });
    
    // Event listeners for impact buttons
    document.querySelectorAll('.impact-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.impact-item');
            parent.querySelectorAll('.impact-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ==========================================
// ===== ذخیره و بازیابی داده‌ها =====
// ==========================================

function saveToLocalStorage(newsObj) {
    let allNews = JSON.parse(localStorage.getItem('fundamental_news') || '[]');
    allNews.push(newsObj);
    localStorage.setItem('fundamental_news', JSON.stringify(allNews));
    localStorage.setItem('last_news', JSON.stringify(newsObj));
    return allNews;
}

function getLastNews() {
    const data = localStorage.getItem('last_news');
    return data ? JSON.parse(data) : null;
}

// ==========================================
// ===== ساخت شیء خبر =====
// ==========================================

function generateNewsObject() {
    // 1. Assets
    const assets = [];
    document.querySelectorAll('.asset-item input[type="checkbox"]:checked').forEach(cb => {
        assets.push(cb.value);
    });
    
    // 2. Category
    const mainCategory = document.getElementById('mainCategory').value;
    const subCategory = document.getElementById('subCategory').value;
    
    // 3. News
    const title = document.getElementById('newsTitle').value.trim();
    const content = document.getElementById('newsContent').value.trim();
    const source = document.getElementById('newsSource').value.trim();
    
    // 4. Impact
    const impact = {};
    document.querySelectorAll('.impact-item').forEach(item => {
        const assetName = item.querySelector('.asset-label').textContent.trim();
        // extract asset code from label
        let assetCode = '';
        for (const [code, name] of Object.entries(assetNames)) {
            if (assetName.includes(name) || assetName.includes(code)) {
                assetCode = code;
                break;
            }
        }
        const activeBtn = item.querySelector('.impact-btn.active');
        impact[assetCode || 'unknown'] = activeBtn ? activeBtn.dataset.value : 'neutral';
    });
    
    // 5. Time (با زمان فعلی اگر خالی بود)
    let date = document.getElementById('newsDate').value;
    let time = document.getElementById('newsTime').value;
    
    if (!date || !time) {
        const now = new Date();
        if (!date) {
            date = now.toISOString().split('T')[0];
        }
        if (!time) {
            time = now.toTimeString().slice(0, 5);
        }
    }
    
    const shortTerm = document.getElementById('shortTerm').value;
    const mediumTerm = document.getElementById('mediumTerm').value;
    const longTerm = document.getElementById('longTerm').value;
    
    // 6. ID
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    
    return {
        id: id,
        timestamp: new Date().toISOString(),
        assets: assets,
        category: {
            main: mainCategory,
            sub: subCategory
        },
        news: {
            title: title,
            content: content,
            source: source
        },
        impact: impact,
        time: {
            date: date,
            time: time,
            shortTerm: shortTerm,
            mediumTerm: mediumTerm,
            longTerm: longTerm
        }
    };
}

// ==========================================
// ===== ساخت پیام تلگرام =====
// ==========================================

function generateTelegramMessage(newsObj) {
    const emojis = {
        positive: '🟢',
        negative: '🔴',
        neutral: '⚪'
    };
    
    const impactTexts = {
        positive: 'مثبت 📈',
        negative: 'منفی 📉',
        neutral: 'خنثی ⏸️'
    };
    
    let impactText = '';
    for (const [asset, value] of Object.entries(newsObj.impact)) {
        const name = assetNames[asset] || asset;
        impactText += `${emojis[value] || '⚪'} ${name}: ${impactTexts[value] || value}\n`;
    }
    
    const categoryMap = {
        geopolitical: '🌍 ژئوپلیتیک',
        central_bank: '🏛️ بانک مرکزی',
        interest_rate: '💰 نرخ بهره',
        inflation: '📈 تورم',
        employment: '👔 اشتغال',
        economic_growth: '📊 رشد اقتصادی',
        liquidity: '💧 نقدینگی',
        regulation: '⚖️ مقررات',
        sentiment: '😊 احساسات بازار',
        other: '🔹 سایر'
    };
    
    const mainCat = categoryMap[newsObj.category.main] || newsObj.category.main;
    const subCat = newsObj.category.sub ? ` › ${newsObj.category.sub.replace(/_/g, ' ')}` : '';
    
    // Asset tags
    const assetTags = newsObj.assets.map(a => `#${a}`).join(' ');
    
    let message = `📊 *خبر فاندامنتال جدید*\n\n`;
    message += `📌 *عنوان:* ${newsObj.news.title}\n`;
    message += `📂 *دسته:* ${mainCat}${subCat}\n`;
    message += `📅 *زمان:* ${newsObj.time.date} ${newsObj.time.time}\n`;
    
    const timeParts = [];
    if (newsObj.time.shortTerm) timeParts.push(`⏱️ کوتاه‌مدت: ${newsObj.time.shortTerm}`);
    if (newsObj.time.mediumTerm) timeParts.push(`میان‌مدت: ${newsObj.time.mediumTerm}`);
    if (newsObj.time.longTerm) timeParts.push(`بلندمدت: ${newsObj.time.longTerm}`);
    if (timeParts.length > 0) {
        message += `📊 *بازه زمانی:* ${timeParts.join(' | ')}\n`;
    }
    message += `\n📝 *متن خبر:*\n${newsObj.news.content}\n\n`;
    message += `📊 *تاثیر:*\n${impactText}`;
    
    if (newsObj.news.source) {
        message += `\n🔗 *منبع:* ${newsObj.news.source}`;
    }
    
    message += `\n\n${assetTags}`;
    
    return message;
}

// ==========================================
// ===== نمایش در صفحه پیش‌نمایش =====
// ==========================================

function displayPreview(newsObj) {
    if (!newsObj) {
        window.location.href = 'index.html';
        return;
    }
    
    const previewCard = document.getElementById('previewCard');
    
    // Build impact HTML
    let impactHTML = '';
    for (const [asset, value] of Object.entries(newsObj.impact)) {
        const name = assetNames[asset] || asset;
        const emoji = value === 'positive' ? '🟢' : value === 'negative' ? '🔴' : '⚪';
        const className = value === 'positive' ? 'impact-positive' : value === 'negative' ? 'impact-negative' : 'impact-neutral';
        impactHTML += `
            <div class="impact-item-preview">
                <span>${emoji}</span>
                <span>${name}</span>
                <span class="${className}">${value === 'positive' ? '📈 مثبت' : value === 'negative' ? '📉 منفی' : '⏸️ خنثی'}</span>
            </div>
        `;
    }
    
    // Category name
    const categoryMap = {
        geopolitical: '🌍 ژئوپلیتیک',
        central_bank: '🏛️ بانک مرکزی',
        interest_rate: '💰 نرخ بهره',
        inflation: '📈 تورم',
        employment: '👔 اشتغال',
        economic_growth: '📊 رشد اقتصادی',
        liquidity: '💧 نقدینگی',
        regulation: '⚖️ مقررات',
        sentiment: '😊 احساسات بازار',
        other: '🔹 سایر'
    };
    const mainCat = categoryMap[newsObj.category.main] || newsObj.category.main;
    const subCat = newsObj.category.sub ? ` › ${newsObj.category.sub.replace(/_/g, ' ')}` : '';
    
    // Time parts
    const timeParts = [];
    if (newsObj.time.shortTerm) timeParts.push(`⏱️ کوتاه‌مدت: ${newsObj.time.shortTerm}`);
    if (newsObj.time.mediumTerm) timeParts.push(`میان‌مدت: ${newsObj.time.mediumTerm}`);
    if (newsObj.time.longTerm) timeParts.push(`بلندمدت: ${newsObj.time.longTerm}`);
    
    previewCard.innerHTML = `
        <div class="news-title">📌 ${newsObj.news.title}</div>
        <div class="news-meta">
            <span>📂 ${mainCat}${subCat}</span>
            <span>📅 ${newsObj.time.date} ${newsObj.time.time}</span>
            ${timeParts.length > 0 ? `<span>📊 ${timeParts.join(' | ')}</span>` : ''}
            ${newsObj.news.source ? `<span>🔗 ${newsObj.news.source}</span>` : ''}
            <span>🆔 ${newsObj.id}</span>
        </div>
        <div class="news-content-text">${newsObj.news.content}</div>
        <div class="impact-grid">${impactHTML}</div>
        <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
            ${newsObj.assets.map(a => `<span style="background: #667eea; color: white; padding: 4px 14px; border-radius: 20px; font-size: 0.8em;">#${a}</span>`).join('')}
        </div>
    `;
    
    // JSON output
    document.getElementById('jsonOutput').textContent = JSON.stringify(newsObj, null, 2);
    
    // Save for copy
    window._lastNews = newsObj;
    window._lastTelegram = generateTelegramMessage(newsObj);
}

// ==========================================
// ===== دکمه‌های کپی =====
// ==========================================

function copyTelegram() {
    if (window._lastTelegram) {
        navigator.clipboard.writeText(window._lastTelegram).then(() => {
            showToast('✅ پیام تلگرام کپی شد!');
        }).catch(() => {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = window._lastTelegram;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('✅ پیام تلگرام کپی شد!');
        });
    }
}

function copyJSON() {
    if (window._lastNews) {
        const json = JSON.stringify(window._lastNews, null, 2);
        navigator.clipboard.writeText(json).then(() => {
            showToast('✅ JSON کپی شد!');
        }).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = json;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('✅ JSON کپی شد!');
        });
    }
}

function editNews() {
    window.location.href = 'index.html';
}

function newNews() {
    localStorage.removeItem('last_news');
    window.location.href = 'index.html';
}

// ==========================================
// ===== Toast Notification =====
// ==========================================

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#2d3748',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '12px',
        fontWeight: '600',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        zIndex: '9999',
        animation: 'slideUp 0.3s ease',
        fontSize: '1.1em'
    });
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// ===== ارسال فرم =====
// ==========================================

document.getElementById('newsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validation
    const assets = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
    if (assets.length === 0) {
        showToast('⚠️ لطفاً حداقل یک دارایی انتخاب کنید!');
        return;
    }
    
    const title = document.getElementById('newsTitle').value.trim();
    if (!title) {
        showToast('⚠️ لطفاً عنوان خبر را وارد کنید!');
        document.getElementById('newsTitle').focus();
        return;
    }
    
    const content = document.getElementById('newsContent').value.trim();
    if (!content) {
        showToast('⚠️ لطفاً متن خبر را وارد کنید!');
        document.getElementById('newsContent').focus();
        return;
    }
    
    const mainCat = document.getElementById('mainCategory').value;
    if (!mainCat) {
        showToast('⚠️ لطفاً دسته‌بندی خبر را انتخاب کنید!');
        document.getElementById('mainCategory').focus();
        return;
    }
    
    // Generate news
    const newsObj = generateNewsObject();
    saveToLocalStorage(newsObj);
    
    // Save to session for preview
    sessionStorage.setItem('preview_news', JSON.stringify(newsObj));
    
    // Redirect to preview page
    window.location.href = 'preview.html';
});

// ==========================================
// ===== بارگذاری در صفحه پیش‌نمایش =====
// ==========================================

if (window.location.pathname.includes('preview.html')) {
    const newsData = sessionStorage.getItem('preview_news') || localStorage.getItem('last_news');
    if (newsData) {
        try {
            const newsObj = JSON.parse(newsData);
            displayPreview(newsObj);
        } catch (e) {
            window.location.href = 'index.html';
        }
    } else {
        window.location.href = 'index.html';
    }
}

// ==========================================
// ===== مقداردهی اولیه در صفحه اصلی =====
// ==========================================

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    // Set default date and time
    const now = new Date();
    document.getElementById('newsDate').value = now.toISOString().split('T')[0];
    document.getElementById('newsTime').value = now.toTimeString().slice(0, 5);
    
    // Load last news if exists
    const lastNews = getLastNews();
    if (lastNews) {
        console.log('📊 آخرین خبر:', lastNews.title);
    }
}

console.log('✅ سیستم خبر فاندامنتال آماده است!');
console.log('📊 تعداد اخبار ذخیره شده:', JSON.parse(localStorage.getItem('fundamental_news') || '[]').length);
