// ==========================================
// ===== تنظیمات اولیه =====
// ==========================================

// ===== داده‌های زیردسته‌ها (کامل) =====
const subCategories = {
    // 🌍 ژئوپلیتیک
    geopolitical: [
        'War', 'Conflict', 'Peace Treaty', 'Diplomatic Relations',
        'Political Crisis', 'Elections', 'Government Change', 'International Tensions'
    ],
    
    // 🏛️ بانک مرکزی
    central_bank: [
        'FED (آمریکا)', 'ECB (اروپا)', 'BOE (انگلیس)', 
        'BOJ (ژاپن)', 'PBOC (چین)', 'CBR (روسیه)',
        'SNB (سوئیس)', 'RBA (استرالیا)', 'BOC (کانادا)'
    ],
    
    // 💰 نرخ بهره
    interest_rate: [
        'Rate Hike', 'Rate Cut', 'Hold', 
        'Forward Guidance', 'Dot Plot', 'Rate Decision'
    ],
    
    // 📈 تورم
    inflation: [
        'CPI', 'PPI', 'Core Inflation', 'Headline Inflation',
        'Inflation Expectations', 'PCE', 'WPI'
    ],
    
    // 👔 اشتغال
    employment: [
        'Unemployment Rate', 'NFP (Non-Farm Payroll)', 
        'Jobs Data', 'Jobless Claims', 'ADP Employment',
        'Labor Force Participation', 'Wage Growth'
    ],
    
    // 📊 رشد اقتصادی
    economic_growth: [
        'GDP', 'PMI', 'Industrial Production', 
        'Retail Sales', 'Consumer Spending', 'Business Investment',
        'Trade Balance', 'Current Account'
    ],
    
    // 💧 نقدینگی
    liquidity: [
        'Money Supply', 'QE (Quantitative Easing)', 
        'QT (Quantitative Tightening)', 'Reverse Repo',
        'Bank Reserves', 'Liquidity Injection', 'Liquidity Drain'
    ],
    
    // ⚖️ مقررات
    regulation: [
        'Crypto Law', 'ETF Approval', 'ETF Rejection',
        'Government Decision', 'Regulatory Framework', 
        'SEC Action', 'CFTC Regulation', 'Banking Regulation',
        'Tax Policy', 'Anti-Money Laundering', 'KYC Requirements'
    ],
    
    // ⛓️ بلاکچین
    blockchain: [
        'Network Upgrade', 'Hard Fork', 'Soft Fork',
        'Mainnet Launch', 'Testnet', 'Bridge Launch',
        'Layer 2 Solution', 'Scalability Improvement',
        'Security Upgrade', 'Consensus Change', 'New Feature'
    ],
    
    // 📡 داده‌های آنچین
    onchain: [
        'Exchange Inflows', 'Exchange Outflows', 
        'Active Addresses', 'Transaction Count', 'Transaction Volume',
        'Gas Fees', 'Network Hashrate', 'Staking Rate',
        'Locked Value (TVL)', 'Whale Activity', 'Supply on Exchanges'
    ],
    
    // 😊 احساسات بازار
    sentiment: [
        'Bullish', 'Bearish', 'Fear & Greed Index',
        'Put/Call Ratio', 'Volatility Index (VIX)',
        'Crypto Fear & Greed', 'Investor Sentiment',
        'Institutional Interest', 'Retail Interest'
    ],
    
    // 👥 داده‌های مردمی
    retail: [
        'Retail Buying', 'Retail Selling', 'Google Trends',
        'Social Media Activity', 'App Downloads', 'Exchange Signups',
        'Retail Interest', 'Meme Coin Mania', 'Retail FOMO',
        'Retail Capitulation', 'Search Volume'
    ],
    
    // 🚫 تحریم‌ها
    sanctions: [
        'New Sanctions', 'Sanctions Removal', 'Sanctions Evasion',
        'Economic Sanctions', 'Trade Sanctions', 'Financial Sanctions',
        'Oil Sanctions', 'Crypto Sanctions', 'Sanctions Impact'
    ],
    
    // 🌐 اقتصاد کلان
    macroeconomics: [
        'Global Growth', 'Recession', 'Recovery', 'Stagflation',
        'Global Trade', 'Supply Chain', 'Energy Prices',
        'Food Prices', 'Global Inflation', 'Currency Wars',
        'Debt Crisis', 'Fiscal Policy', 'Monetary Policy'
    ],
    
    // 🔹 سایر
    other: ['Other']
};

// ===== نام‌های فارسی دارایی‌ها =====
const assetNames = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    BNB: 'BNB',
    SOL: 'Solana',
    XRP: 'Ripple',
    ADA: 'Cardano',
    DOT: 'Polkadot',
    LINK: 'Chainlink',
    MATIC: 'Polygon',
    ALT: 'Altcoin',
    MEME: 'Meme Coin',
    USD: 'دلار آمریکا',
    EUR: 'یورو',
    GBP: 'پوند',
    JPY: 'ین ژاپن',
    CNY: 'یوان چین',
    RUB: 'روبل روسیه',
    GOLD: 'طلا',
    SILVER: 'نقره',
    OIL: 'نفت',
    NATURAL_GAS: 'گاز طبیعی',
    SP500: 'S&P 500',
    NASDAQ: 'NASDAQ',
    DOW: 'Dow Jones',
    OTHER: 'سایر'
};

// ===== آیکون‌های دارایی‌ها =====
const assetIcons = {
    BTC: '₿',
    ETH: '⟠',
    BNB: '🟡',
    SOL: '☀️',
    XRP: '💠',
    ADA: '🔷',
    DOT: '🔴',
    LINK: '🔗',
    MATIC: '🟣',
    ALT: '🪙',
    MEME: '🐶',
    USD: '💵',
    EUR: '💶',
    GBP: '💷',
    JPY: '💴',
    CNY: '💵',
    RUB: '₽',
    GOLD: '🥇',
    SILVER: '🥈',
    OIL: '🛢️',
    NATURAL_GAS: '🔥',
    SP500: '📈',
    NASDAQ: '📊',
    DOW: '📉',
    OTHER: '🔹'
};

// ===== نام‌های فارسی دسته‌بندی‌ها =====
const categoryMap = {
    geopolitical: '🌍 ژئوپلیتیک',
    central_bank: '🏛️ بانک مرکزی',
    interest_rate: '💰 نرخ بهره',
    inflation: '📈 تورم',
    employment: '👔 اشتغال',
    economic_growth: '📊 رشد اقتصادی',
    liquidity: '💧 نقدینگی',
    regulation: '⚖️ مقررات',
    blockchain: '⛓️ بلاکچین',
    onchain: '📡 داده‌های آنچین',
    sentiment: '😊 احساسات بازار',
    retail: '👥 داده‌های مردمی',
    sanctions: '🚫 تحریم‌ها',
    macroeconomics: '🌐 اقتصاد کلان',
    other: '🔹 سایر'
};

// ===== ایموجی‌های تاثیر =====
const impactEmojis = {
    positive: '🟢',
    negative: '🔴',
    neutral: '⚪'
};

const impactTexts = {
    positive: 'مثبت 📈',
    negative: 'منفی 📉',
    neutral: 'خنثی ⏸️'
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
        hour12: false,
        timeZone: 'Asia/Tehran'
    };
    const el = document.getElementById('liveTime');
    if (el) {
        el.textContent = '⏰ ' + now.toLocaleString('fa-IR', options);
    }
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
        container.innerHTML = '<span class="hint">📌 هنوز دارایی‌ای انتخاب نشده</span>';
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
        const labelText = item.querySelector('.asset-label').textContent.trim();
        let assetCode = '';
        for (const [code, name] of Object.entries(assetNames)) {
            if (labelText.includes(name) || labelText.includes(code)) {
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
// ===== ساخت پیام تلگرام (کامل) =====
// ==========================================

function generateTelegramMessage(newsObj) {
    let impactText = '';
    if (newsObj.impact && Object.keys(newsObj.impact).length > 0) {
        for (const [asset, value] of Object.entries(newsObj.impact)) {
            const name = assetNames[asset] || asset;
            impactText += `${impactEmojis[value] || '⚪'} ${name}: ${impactTexts[value] || value}\n`;
        }
    } else {
        impactText = 'تاثیری ثبت نشده';
    }
    
    const mainCat = categoryMap[newsObj.category?.main] || newsObj.category?.main || 'نامشخص';
    const subCat = newsObj.category?.sub ? ` › ${newsObj.category.sub.replace(/_/g, ' ')}` : '';
    
    const assetTags = (newsObj.assets || []).map(a => `#${a}`).join(' ');
    
    let message = `📊 *خبر فاندامنتال جدید*\n\n`;
    message += `📌 *عنوان:* ${newsObj.news?.title || 'بدون عنوان'}\n`;
    message += `📂 *دسته:* ${mainCat}${subCat}\n`;
    message += `📅 *زمان:* ${newsObj.time?.date || 'نامشخص'} ${newsObj.time?.time || ''}\n`;
    
    const timeParts = [];
    if (newsObj.time?.shortTerm) timeParts.push(`⏱️ کوتاه‌مدت: ${newsObj.time.shortTerm}`);
    if (newsObj.time?.mediumTerm) timeParts.push(`میان‌مدت: ${newsObj.time.mediumTerm}`);
    if (newsObj.time?.longTerm) timeParts.push(`بلندمدت: ${newsObj.time.longTerm}`);
    if (timeParts.length > 0) {
        message += `📊 *بازه زمانی:* ${timeParts.join(' | ')}\n`;
    }
    message += `\n📝 *متن خبر:*\n${newsObj.news?.content || 'متن خبری وجود ندارد'}\n\n`;
    message += `📊 *تاثیر:*\n${impactText}`;
    
    if (newsObj.news?.source) {
        message += `\n🔗 *منبع:* ${newsObj.news.source}`;
    }
    
    if (assetTags) {
        message += `\n\n${assetTags}`;
    }
    
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
    if (!previewCard) return;
    
    // Build impact HTML
    let impactHTML = '';
    if (newsObj.impact && Object.keys(newsObj.impact).length > 0) {
        for (const [asset, value] of Object.entries(newsObj.impact)) {
            const name = assetNames[asset] || asset;
            const emoji = impactEmojis[value] || '⚪';
            const label = impactTexts[value] || value;
            const className = value === 'positive' ? 'impact-positive' : value === 'negative' ? 'impact-negative' : 'impact-neutral';
            impactHTML += `
                <div class="impact-item-preview">
                    <span class="impact-emoji">${emoji}</span>
                    <span class="impact-asset">${assetIcons[asset] || '📌'} ${name}</span>
                    <span class="${className}">${label}</span>
                </div>
            `;
        }
    } else {
        impactHTML = '<p style="color: #a0aec0; grid-column: 1/-1; text-align: center;">تاثیری ثبت نشده است</p>';
    }
    
    const mainCat = categoryMap[newsObj.category?.main] || newsObj.category?.main || 'نامشخص';
    const subCat = newsObj.category?.sub ? ` › ${newsObj.category.sub.replace(/_/g, ' ')}` : '';
    
    const timeParts = [];
    if (newsObj.time?.shortTerm) timeParts.push(`⏱️ کوتاه‌مدت: ${newsObj.time.shortTerm}`);
    if (newsObj.time?.mediumTerm) timeParts.push(`میان‌مدت: ${newsObj.time.mediumTerm}`);
    if (newsObj.time?.longTerm) timeParts.push(`بلندمدت: ${newsObj.time.longTerm}`);
    
    const assetTags = (newsObj.assets || []).map(a => 
        `<span class="asset-tag">${assetIcons[a] || '📌'} ${assetNames[a] || a}</span>`
    ).join('');
    
    previewCard.innerHTML = `
        <div class="news-title">
            <span class="title-icon">📌</span>
            ${newsObj.news?.title || 'بدون عنوان'}
        </div>
        <div class="news-meta">
            <span class="meta-tag">${mainCat}${subCat}</span>
            <span>📅 ${newsObj.time?.date || 'نامشخص'} ${newsObj.time?.time || ''}</span>
            ${timeParts.length > 0 ? `<span>📊 ${timeParts.join(' | ')}</span>` : ''}
            ${newsObj.news?.source ? `<span>🔗 ${newsObj.news.source}</span>` : ''}
            <span>🆔 ${newsObj.id || 'N/A'}</span>
        </div>
        <div class="news-content-text">${newsObj.news?.content || 'متن خبری وجود ندارد'}</div>
        
        <div class="impact-section-title">
            <span>📊</span> تاثیر روی دارایی‌ها
        </div>
        <div class="impact-grid">${impactHTML}</div>
        
        <div class="asset-tags">${assetTags}</div>
    `;
    
    // JSON output
    const jsonOutput = document.getElementById('jsonOutput');
    if (jsonOutput) {
        jsonOutput.textContent = JSON.stringify(newsObj, null, 2);
    }
    
    // Save for copy
    window._lastNews = newsObj;
    window._lastTelegram = generateTelegramMessage(newsObj);
}

// ==========================================
// ===== دکمه‌های کپی =====
// ==========================================

function copyTelegram() {
    if (!window._lastTelegram) {
        showToast('⚠️ خبری برای کپی وجود ندارد!');
        return;
    }
    
    navigator.clipboard.writeText(window._lastTelegram).then(() => {
        showToast('✅ پیام تلگرام کپی شد!');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = window._lastTelegram;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✅ پیام تلگرام کپی شد!');
    });
}

function copyJSON() {
    if (!window._lastNews) {
        showToast('⚠️ خبری برای کپی وجود ندارد!');
        return;
    }
    
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

function editNews() {
    window.location.href = 'index.html';
}

function newNews() {
    sessionStorage.removeItem('preview_news');
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
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// ===== ارسال فرم =====
// ==========================================

const newsForm = document.getElementById('newsForm');
if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
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
}

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
    const dateInput = document.getElementById('newsDate');
    const timeInput = document.getElementById('newsTime');
    if (dateInput) dateInput.value = now.toISOString().split('T')[0];
    if (timeInput) timeInput.value = now.toTimeString().slice(0, 5);
    
    // Load last news if exists
    const lastNews = getLastNews();
    if (lastNews) {
        console.log('📊 آخرین خبر:', lastNews.news?.title);
    }
}

console.log('✅ سیستم خبر فاندامنتال نسخه ۲ آماده است!');
console.log('📊 تعداد اخبار ذخیره شده:', JSON.parse(localStorage.getItem('fundamental_news') || '[]').length);
console.log('📂 دسته‌بندی‌های موجود:', Object.keys(subCategories).length);
console.log('🪙 دارایی‌های موجود:', Object.keys(assetNames).length);
