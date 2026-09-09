// ===== 产品数据（合作金融机构展示） =====
const products = [
    {
        id: 1,
        bankName: "招商银行",
        productName: "闪电贷",
        rate: "3.4% 起",
        amount: "最高 50 万",
        term: "最长 36 期",
        features: "纯信用 · 实时审批",
        applyUrl: "https://www.cmbchina.com/",
        logo: "🏦"
    },
    {
        id: 2,
        bankName: "建设银行",
        productName: "快贷",
        rate: "3.85% 起",
        amount: "最高 30 万",
        term: "最长 24 期",
        features: "公积金用户专享",
        applyUrl: "https://www.ccb.com/",
        logo: "🏛️"
    },
    {
        id: 3,
        bankName: "平安银行",
        productName: "新一贷",
        rate: "4.2% 起",
        amount: "最高 50 万",
        term: "最长 48 期",
        features: "保单/公积金均可",
        applyUrl: "https://bank.pingan.com/",
        logo: "🛡️"
    },
    {
        id: 4,
        bankName: "中信银行",
        productName: "信秒贷",
        rate: "3.65% 起",
        amount: "最高 30 万",
        term: "最长 36 期",
        features: "线上申请 · 极速放款",
        applyUrl: "https://www.citicbank.com/",
        logo: "🏢"
    },
    {
        id: 5,
        bankName: "微众银行",
        productName: "微粒贷",
        rate: "3.6% 起",
        amount: "最高 20 万",
        term: "最长 24 期",
        features: "微信生态 · 随借随还",
        applyUrl: "https://www.webank.com/",
        logo: "📱"
    },
    {
        id: 6,
        bankName: "网商银行",
        productName: "网商贷",
        rate: "3.8% 起",
        amount: "最高 100 万",
        term: "最长 12 期",
        features: "小微企业专享",
        applyUrl: "https://www.mybank.cn/",
        logo: "🏪"
    }
];

// ===== 渲染产品卡片 =====
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="bank-name">${product.logo} ${product.bankName}</div>
            <div class="product-name">${product.productName}</div>
            <div class="product-detail">
                <span class="detail-label">年化利率</span>
                <span class="detail-value rate">${product.rate}</span>
            </div>
            <div class="product-detail">
                <span class="detail-label">贷款额度</span>
                <span class="detail-value amount">${product.amount}</span>
            </div>
            <div class="product-detail">
                <span class="detail-label">还款期限</span>
                <span class="detail-value">${product.term}</span>
            </div>
            <div class="product-detail">
                <span class="detail-label">产品特色</span>
                <span class="detail-value">${product.features}</span>
            </div>
            <a href="${product.applyUrl}" target="_blank" rel="noopener noreferrer" class="apply-btn">
                前往 ${product.bankName} 申请
            </a>
            <div class="compliance-tip">
                ⚠️ 点击将跳转至金融机构官方页面
            </div>
        </div>
    `).join('');
}

// ===== 给所有“申请按钮”添加合规跳转确认 =====
function setupApplyButtons() {
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.apply-btn');
        if (!btn) return;

        const bankName = btn.closest('.product-card')?.querySelector('.bank-name')?.textContent?.trim() || '该金融机构';
        const confirmed = confirm(
            `您即将离开本平台，前往 ${bankName} 的官方页面。\n\n` +
            '本平台仅为信息展示，不参与任何贷款审批与资金发放。\n' +
            '请仔细阅读金融机构的贷款协议与风险提示。\n\n' +
            '是否继续？'
        );

        if (!confirmed) {
            e.preventDefault();
        }
    });
}

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupApplyButtons();
    console.log('✅ 贷款导流平台已启动（合规演示版）');
});