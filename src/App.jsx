import React, { useState, useEffect } from 'react';

// 頁首元件
const Header = ({ onNavigate }) => {
    const handleNavClick = (e, page) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <header className="flex justify-between items-center mb-12">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-teal-600">SereneScape</a>
            <nav>
                <ul className="flex space-x-6 text-slate-600">
                    <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link hover:text-teal-600 transition-colors pb-1">首頁</a></li>
                    <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link hover:text-teal-600 transition-colors pb-1">關於我</a></li>
                </ul>
            </nav>
        </header>
    );
};

// 首頁元件
const HomePage = ({ onNavigate }) => {
    const handleReadMoreClick = (e) => {
        e.preventDefault();
        onNavigate('article');
    };

    return (
        <section id="home">
            <div className="bg-white p-10 rounded-2xl shadow-sm text-center mb-12 animate-fade-in">
                <h1 className="text-4xl font-bold text-slate-800 mb-3">質感生活記事</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">探索日常中的美好，從咖啡、旅行到心靈成長，在這裡分享我的所見所聞。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 卡片 1 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="https://placehold.co/600x400/a7f3d0/334155?text=城市漫遊" alt="城市風景" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <span className="text-xs font-semibold text-teal-600 bg-teal-100 px-2 py-1 rounded-full">城市漫遊</span>
                        <h2 className="text-xl font-bold mt-3 mb-2 text-slate-800">在巷弄間發現的老城故事</h2>
                        <p className="text-slate-500 text-sm mb-4">一個悠閒的午後，我走進了城市中被遺忘的角落，每一塊磚瓦都似乎在訴說著過往的歷史...</p>
                        <a href="#article" onClick={handleReadMoreClick} className="font-semibold text-teal-600 hover:text-teal-700 transition-colors">閱讀更多 →</a>
                    </div>
                </div>
                {/* 卡片 2 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="https://placehold.co/600x400/bae6fd/334155?text=咖啡時光" alt="咖啡" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <span className="text-xs font-semibold text-sky-600 bg-sky-100 px-2 py-1 rounded-full">咖啡時光</span>
                        <h2 className="text-xl font-bold mt-3 mb-2 text-slate-800">手沖咖啡的療癒魔法</h2>
                        <p className="text-slate-500 text-sm mb-4">從磨豆的香氣到注水的專注，手沖咖啡不僅僅是飲品，更是一種生活的儀式感...</p>
                        <a href="#article" onClick={handleReadMoreClick} className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">閱讀更多 →</a>
                    </div>
                </div>
                {/* 卡片 3 */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src="https://placehold.co/600x400/fecaca/334155?text=心靈成長" alt="書本" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <span className="text-xs font-semibold text-rose-600 bg-rose-100 px-2 py-1 rounded-full">心靈成長</span>
                        <h2 className="text-xl font-bold mt-3 mb-2 text-slate-800">學習獨處：與自己和解的藝術</h2>
                        <p className="text-slate-500 text-sm mb-4">在這個喧囂的世界裡，學會享受獨處的時光，是給自己最好的禮物。這本書給了我許多啟發...</p>
                        <a href="#article" onClick={handleReadMoreClick} className="font-semibold text-rose-600 hover:text-rose-700 transition-colors">閱讀更多 →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 關於我元件
const AboutPage = () => (
    <section id="about">
        <div className="bg-white p-10 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <img src="https://placehold.co/400x400/c7d2fe/334155?text=關於我" alt="作者照片" className="w-48 h-48 rounded-full object-cover flex-shrink-0" />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-slate-800 mb-3">關於 SereneScape</h1>
                    <p className="text-slate-500 mb-4">嗨，我是艾莉！一位熱愛用文字和鏡頭記錄生活的城市探險家。對我來說，生活不是一場競賽，而是一趟充滿驚喜的旅程。</p>
                    <p className="text-slate-500">這個部落格是我分享這趟旅程點滴的空間。無論是一杯香醇的咖啡、一本觸動心弦的書，或是一段意外的旅行，我都希望能將這些美好的瞬間傳遞給你。希望你在這裡能找到片刻的寧靜與靈感。</p>
                </div>
            </div>
        </div>
    </section>
);

// 文章頁元件
const ArticlePage = ({ onNavigate }) => {
    const handleBackClick = (e) => {
        e.preventDefault();
        onNavigate('home');
    };

    return (
        <section id="article">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">城市漫遊</span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-4">在巷弄間發現的老城故事</h1>
                    <p className="text-slate-400 mt-4">發表於 2025-10-18 by SereneScape</p>
                </div>
                <img src="https://placehold.co/1200x600/a7f3d0/334155?text=老城故事" alt="文章主圖" className="w-full rounded-2xl mb-8" />
                <div className="prose max-w-none text-slate-600">
                    <p>一個悠閒的午後，我走進了城市中被遺忘的角落，每一塊磚瓦都似乎在訴說著過往的歷史。陽光透過老榕樹的葉縫灑下斑駁的光影，空氣中瀰漫著一股淡淡的青草與泥土混合的氣息。這裡沒有城市的喧囂，只有時間緩慢流淌的聲音。</p>
                    <p>沿著石板路前行，我看到了一間古老的書店。木製的門框上掛著一個手寫的招牌，字跡已經有些模糊。我推開門，一陣書香撲鼻而來。店主是一位白髮蒼蒼的老爺爺，他正戴著老花眼鏡，專注地修補一本舊書。看到我進來，他抬起頭，露出一個溫暖的微笑。</p>
                    <h3 className="text-slate-700">意外的發現</h3>
                    <p>在書店的深處，我發現了一本地圖，上面標記著許多已經消失的地名。老爺爺告訴我，這張地圖是他年輕時親手繪製的，記錄了這座城市的變遷。我們聊了很久，從城市的歷史到人生的哲理，彷彿進行了一場穿越時空的對話。</p>
                    <blockquote>
                        <p>"每一條老街都有自己的靈魂，只要你願意傾聽。"</p>
                    </blockquote>
                    <p>離開書店時，夕陽已將天空染成一片溫柔的橘紅色。這次的巷弄探險，不僅讓我看到了城市的另一面，更讓我深刻體會到，生活中最美的風景，往往就藏在那些不經意的轉角處。</p>
                </div>
                <div className="text-center mt-12">
                    <a href="#home" onClick={handleBackClick} className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300">返回首頁</a>
                </div>
            </div>
        </section>
    );
};

// 頁尾元件
const Footer = () => (
    <footer className="text-center text-slate-400 mt-16">
        <p>&copy; 2025 SereneScape. All Rights Reserved.</p>
    </footer>
);

function App() {
    const [page, setPage] = useState('home');

    // 透過監聽 URL hash 的變化來切換頁面，這能讓瀏覽器的上一頁/下一頁功能正常運作
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1).toLowerCase();
            if (['home', 'about', 'article'].includes(hash)) {
                setPage(hash);
            } else {
                setPage('home'); // 如果 hash 不合法，預設到首頁
            }
            window.scrollTo(0, 0); // 切換頁面時捲動到頂部
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // 初始載入時觸發一次

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    // 導覽函數，用來更新 URL hash
    const navigate = (targetPage) => {
        window.location.hash = targetPage;
    };
    
    // 根據目前的 page state 決定要渲染哪個頁面元件
    const renderPage = () => {
        switch (page) {
            case 'about':
                return <AboutPage />;
            case 'article':
                return <ArticlePage onNavigate={navigate} />;
            case 'home':
            default:
                return <HomePage onNavigate={navigate} />;
        }
    };

    return (
        <div className="container mx-auto max-w-5xl px-4 py-8">
            <Header onNavigate={navigate} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;
