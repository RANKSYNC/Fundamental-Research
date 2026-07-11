// ============================================================
// ===== داده‌های اصلی =====
// ============================================================

// زیردسته‌ها
var subCategories = {
    geopolitical: ['War', 'Conflict', 'Peace Treaty', 'Diplomatic Relations', 'Political Crisis', 'Elections', 'Government Change', 'International Tensions'],
    central_bank: ['FED (آمریکا)', 'ECB (اروپا)', 'BOE (انگلیس)', 'BOJ (ژاپن)', 'PBOC (چین)', 'CBR (روسیه)', 'SNB (سوئیس)', 'RBA (استرالیا)', 'BOC (کانادا)'],
    interest_rate: ['Rate Hike', 'Rate Cut', 'Hold', 'Forward Guidance', 'Dot Plot', 'Rate Decision'],
    inflation: ['CPI', 'PPI', 'Core Inflation', 'Headline Inflation', 'Inflation Expectations', 'PCE', 'WPI'],
    employment: ['Unemployment Rate', 'NFP (Non-Farm Payroll)', 'Jobs Data', 'Jobless Claims', 'ADP Employment', 'Labor Force Participation', 'Wage Growth'],
    economic_growth: ['GDP', 'PMI', 'Industrial Production', 'Retail Sales', 'Consumer Spending', 'Business Investment', 'Trade Balance', 'Current Account'],
    liquidity: ['Money Supply', 'QE (Quantitative Easing)', 'QT (Quantitative Tightening)', 'Reverse Repo', 'Bank Reserves', 'Liquidity Injection', 'Liquidity Drain'],
    regulation: ['Crypto Law', 'ETF Approval', 'ETF Rejection', 'Government Decision', 'Regulatory Framework', 'SEC Action', 'CFTC Regulation', 'Banking Regulation', 'Tax Policy', 'Anti-Money Laundering', 'KYC Requirements'],
    blockchain: ['Network Upgrade', 'Hard Fork', 'Soft Fork', 'Mainnet Launch', 'Testnet', 'Bridge Launch', 'Layer 2 Solution', 'Scalability Improvement', 'Security Upgrade', 'Consensus Change', 'New Feature'],
    onchain: ['Exchange Inflows', 'Exchange Outflows', 'Active Addresses', 'Transaction Count', 'Transaction Volume', 'Gas Fees', 'Network Hashrate', 'Staking Rate', 'Locked Value (TVL)', 'Whale Activity', 'Supply on Exchanges'],
    sentiment: ['Bullish', 'Bearish', 'Fear & Greed Index', 'Put/Call Ratio', 'Volatility Index (VIX)', 'Crypto Fear & Greed', 'Investor Sentiment', 'Institutional Interest', 'Retail Interest'],
    retail: ['Retail Buying', 'Retail Selling', 'Google Trends', 'Social Media Activity', 'App Downloads', 'Exchange Signups', 'Retail Interest', 'Meme Coin Mania', 'Retail FOMO', 'Retail Capitulation', 'Search Volume'],
    sanctions: ['New Sanctions', 'Sanctions Removal', 'Sanctions Evasion', 'Economic Sanctions', 'Trade Sanctions', 'Financial Sanctions', 'Oil Sanctions', 'Crypto Sanctions', 'Sanctions Impact'],
    macroeconomics: ['Global Growth', 'Recession', 'Recovery', 'Stagflation', 'Global Trade', 'Supply Chain', 'Energy Prices', 'Food Prices', 'Global Inflation', 'Currency Wars', 'Debt Crisis', 'Fiscal Policy', 'Monetary Policy'],
    other: ['Other']
};

// نام دارایی‌ها
var assetNames = {
    BTC: 'Bitcoin', ETH: 'Ethereum', BNB: 'BNB', SOL: 'Solana', XRP: 'Ripple',
    ADA: 'Cardano', DOT: 'Polkadot', LINK: 'Chainlink', MATIC: 'Polygon',
    ALT: 'Altcoin', MEME: 'Meme Coin',
    USD: 'دلار آمریکا', EUR: 'یورو', GBP: 'پوند', JPY: 'ین ژاپن',
    CNY: 'یوان چین', RUB: 'روبل روسیه',
    GOLD: 'طلا', SILVER: 'نقره', OIL: 'نفت', NATURAL_GAS: 'گاز طبیعی',
    SP500: 'S&P 500', NASDAQ: 'NASDAQ', DOW: 'Dow Jones',
    OTHER: 'سایر'
};

// آیکون دارایی‌ها
var assetIcons = {
    BTC: '₿', ETH: '⟠', BNB: '🟡', SOL: '☀️', XRP: '💠',
    ADA: '🔷', DOT: '🔴', LINK: '🔗', MATIC: '🟣',
    ALT: '🪙', MEME: '🐶',
    USD: '💵', EUR: '💶', GBP: '💷', JPY: '💴', CNY: '💰', RUB: '₽',
    GOLD: '🥇', SILVER: '🥈', OIL: '🛢️', NATURAL_GAS: '🔥',
    SP500: '📈', NASDAQ: '📊', DOW: '📉',
    OTHER: '🔹'
};

// نام فارسی دسته‌بندی‌ها
var categoryMap = {
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

// ============================================================
// ===== توابع کمکی =====
// ============================================================

function getElement(id) {
    return document.getElementById(id);
}

function showToast(msg) {
    var old = document.querySelector('.toast');
    if (old) old.remove();

    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);

    setTimeout(function() {
        t.classList.add('hide');
        setTimeout(function() { t.remove(); }, 300);
    }, 3000);
}

// ============================================================
// ===== زمان زنده =====
// ============================================================

function updateLiveTime() {
    var now = new Date();
    var el = getElement('liveTime');
    if (el) {
        el.textContent = '⏰ ' + now.toLocaleString('fa-IR', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });
    }
}
updateLiveTime();
setInterval(updateLiveTime, 1000);

// ============================================================
// ===== مدیریت دارایی‌ها =====
// ============================================================

var checkboxes = document.querySelectorAll('.asset-item input[type="checkbox"]');
var selectedContainer = getElement('selectedAssets');

checkboxes.forEach(function(cb) {
    cb.addEventListener('change', function() {
        var parent = this.closest('.asset-item');
        if (parent) {
            parent.classList.toggle('active', this.checked);
        }
        updateSelectedAssets();
    });
});

function updateSelectedAssets() {
    var checked = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
    var container = selectedContainer;

    if (checked.length === 0) {
        container.innerHTML = '<span class="hint">📌 هنوز دارایی‌ای انتخاب نشده</span>';
        updateImpactAssets();
        return;
    }

    container.innerHTML = '';
    checked.forEach(function(cb) {
        var val = cb.value;
        var tag = document.createElement('span');
        tag.className = 'selected-asset-tag';
        tag.innerHTML =
            (assetIcons[val] || '📌') + ' ' + (assetNames[val] || val) +
            ' <span class="remove-asset" data-value="' + val + '">✕</span>';
        container.appendChild(tag);

        tag.querySelector('.remove-asset').addEventListener('click', function() {
            var v = this.dataset.value;
            var inp = document.querySelector('.asset-item input[value="' + v + '"]');
            if (inp) {
                inp.checked = false;
                var p = inp.closest('.asset-item');
                if (p) p.classList.remove('active');
                updateSelectedAssets();
            }
        });
    });

    updateImpactAssets();
}

// ============================================================
// ===== مدیریت دسته‌بندی =====
// ============================================================

var mainCat = getElement('mainCategory');
var subCat = getElement('subCategory');

if (mainCat) {
    mainCat.addEventListener('change', function() {
        var category = this.value;
        subCat.innerHTML = '';
        subCat.disabled = !category;

        if (!category) {
            subCat.innerHTML = '<option value="">ابتدا دسته اصلی را انتخاب کنید</option>';
            return;
        }

        var options = subCategories[category] || ['Other'];
        options.forEach(function(item) {
            var opt = document.createElement('option');
            opt.value = item.toLowerCase().replace(/ /g, '_');
            opt.textContent = item;
            subCat.appendChild(opt);
        });
    });
}

// ============================================================
// ===== مدیریت تاثیر =====
// ============================================================

var impactContainer = getElement('impactContainer');

function updateImpactAssets() {
    var checked = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
    var values = [];
    checked.forEach(function(cb) { values.push(cb.value); });

    if (values.length === 0) {
        impactContainer.innerHTML = '<p class="impact-hint" style="color:#a0aec0;">📌 ابتدا دارایی‌ها را انتخاب کنید</p>';
        return;
    }

    impactContainer.innerHTML = '';
    values.forEach(function(asset) {
        var div = document.createElement('div');
        div.className = 'impact-item';
        div.innerHTML =
            '<span class="asset-label">' + (assetIcons[asset] || '📌') + ' ' + (assetNames[asset] || asset) + '</span>' +
            '<div class="impact-buttons">' +
            '<button type="button" class="impact-btn positive" data-asset="' + asset + '" data-value="positive">↑ مثبت</button>' +
            '<button type="button" class="impact-btn negative" data-asset="' + asset + '" data-value="negative">↓ منفی</button>' +
            '<button type="button" class="impact-btn neutral active" data-asset="' + asset + '" data-value="neutral">→ خنثی</button>' +
            '</div>';
        impactContainer.appendChild(div);
    });

    document.querySelectorAll('.impact-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var parent = this.closest('.impact-item');
            if (parent) {
                parent.querySelectorAll('.impact-btn').forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
            }
        });
    });
}

// ============================================================
// ===== ذخیره‌سازی =====
// ============================================================

function saveToLocalStorage(obj) {
    var all = JSON.parse(localStorage.getItem('fundamental_news') || '[]');
    all.push(obj);
    localStorage.setItem('fundamental_news', JSON.stringify(all));
    localStorage.setItem('last_news', JSON.stringify(obj));
    return all;
}

// ============================================================
// ===== ساخت شیء خبر =====
// ============================================================

function generateNewsObject() {
    // 1. Assets
    var assets = [];
    document.querySelectorAll('.asset-item input[type="checkbox"]:checked').forEach(function(cb) {
        assets.push(cb.value);
    });

    // 2. Category
    var mainCategory = getElement('mainCategory').value;
    var subCategory = getElement('subCategory').value;

    // 3. News
    var title = getElement('newsTitle').value.trim();
    var content = getElement('newsContent').value.trim();
    var source = getElement('newsSource').value.trim();

    // 4. Impact
    var impact = {};
    document.querySelectorAll('.impact-item').forEach(function(item) {
        var label = item.querySelector('.asset-label');
        if (!label) return;
        var labelText = label.textContent.trim();
        var assetCode = '';
        for (var code in assetNames) {
            if (labelText.includes(assetNames[code]) || labelText.includes(code)) {
                assetCode = code;
                break;
            }
        }
        var activeBtn = item.querySelector('.impact-btn.active');
        impact[assetCode || 'unknown'] = activeBtn ? activeBtn.dataset.value : 'neutral';
    });

    // 5. Time
    var date = getElement('newsDate').value;
    var time = getElement('newsTime').value;
    var now = new Date();
    if (!date) date = now.toISOString().split('T')[0];
    if (!time) time = now.toTimeString().slice(0, 5);

    var shortTerm = getElement('shortTerm').value;
    var mediumTerm = getElement('mediumTerm').value;
    var longTerm = getElement('longTerm').value;

    // 6. ID
    var id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

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

// ============================================================
// ===== ساخت پیام تلگرام =====
// ============================================================

function generateTelegramMessage(obj) {
    var impactText = '';
    if (obj.impact && Object.keys(obj.impact).length > 0) {
        for (var key in obj.impact) {
            var val = obj.impact[key];
            var name = assetNames[key] || key;
            var emoji = val === 'positive' ? '🟢' : val === 'negative' ? '🔴' : '⚪';
            var label = val === 'positive' ? 'مثبت 📈' : val === 'negative' ? 'منفی 📉' : 'خنثی ⏸️';
            impactText += emoji + ' ' + name + ': ' + label + '\n';
        }
    } else {
        impactText = 'تاثیری ثبت نشده';
    }

    var mainCat = categoryMap[obj.category.main] || obj.category.main || 'نامشخص';
    var subCat = obj.category.sub ? ' › ' + obj.category.sub.replace(/_/g, ' ') : '';

    var assetTags = '';
    if (obj.assets && obj.assets.length > 0) {
        assetTags = '\n\n' + obj.assets.map(function(a) { return '#' + a; }).join(' ');
    }

    var timeParts = [];
    if (obj.time.shortTerm) timeParts.push('⏱️ کوتاه‌مدت: ' + obj.time.shortTerm);
    if (obj.time.mediumTerm) timeParts.push('میان‌مدت: ' + obj.time.mediumTerm);
    if (obj.time.longTerm) timeParts.push('بلندمدت: ' + obj.time.longTerm);

    var msg = '📊 *خبر فاندامنتال جدید*\n\n';
    msg += '📌 *عنوان:* ' + (obj.news.title || 'بدون عنوان') + '\n';
    msg += '📂 *دسته:* ' + mainCat + subCat + '\n';
    msg += '📅 *زمان:* ' + (obj.time.date || 'نامشخص') + ' ' + (obj.time.time || '') + '\n';
    if (timeParts.length > 0) {
        msg += '📊 *بازه زمانی:* ' + timeParts.join(' | ') + '\n';
    }
    msg += '\n📝 *متن خبر:*\n' + (obj.news.content || 'متن خبری وجود ندارد') + '\n\n';
    msg += '📊 *تاثیر:*\n' + impactText;
    if (obj.news.source) {
        msg += '\n🔗 *منبع:* ' + obj.news.source;
    }
    msg += assetTags;

    return msg;
}

// ============================================================
// ===== ارسال فرم =====
// ============================================================

var form = getElement('newsForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validation
        var assets = document.querySelectorAll('.asset-item input[type="checkbox"]:checked');
        if (assets.length === 0) {
            showToast('⚠️ لطفاً حداقل یک دارایی انتخاب کنید!');
            return;
        }

        var title = getElement('newsTitle').value.trim();
        if (!title) {
            showToast('⚠️ لطفاً عنوان خبر را وارد کنید!');
            getElement('newsTitle').focus();
            return;
        }

        var content = getElement('newsContent').value.trim();
        if (!content) {
            showToast('⚠️ لطفاً متن خبر را وارد کنید!');
            getElement('newsContent').focus();
            return;
        }

        var mainCat = getElement('mainCategory').value;
        if (!mainCat) {
            showToast('⚠️ لطفاً دسته‌بندی خبر را انتخاب کنید!');
            getElement('mainCategory').focus();
            return;
        }

        // Generate
        var obj = generateNewsObject();
        saveToLocalStorage(obj);
        sessionStorage.setItem('preview_news', JSON.stringify(obj));

        // Redirect
        window.location.href = 'preview.html';
    });
}

// ============================================================
// ===== مقداردهی اولیه =====
// ============================================================

// تنظیم تاریخ و زمان فعلی
var now = new Date();
var dateInput = getElement('newsDate');
var timeInput = getElement('newsTime');
if (dateInput) dateInput.value = now.toISOString().split('T')[0];
if (timeInput) timeInput.value = now.toTimeString().slice(0, 5);

console.log('✅ سیستم خبر فاندامنتال آماده است!');
console.log('📊 تعداد اخبار:', JSON.parse(localStorage.getItem('fundamental_news') || '[]').length);
