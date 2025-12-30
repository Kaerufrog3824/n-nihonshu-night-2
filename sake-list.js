/* * NIKKEI Nihonshu Night - データ管理ファイル */

// ▼ Slack設定（チャンネルID）
const SLACK_CHANNEL_ID = "C08PQ6NUTU1";

// ▼ 日本酒リスト
// 甘さ(sweetness)・香り(aroma)・重さ(richness) は 1〜5 の5段階評価
const sakeData = [
    {
        id: 1,
        name: "新政 Colors 秋桜 (Cosmos)",
        prefecture: "秋田県",
        brewery: "新政酒造",
        desc: "木桶仕込みの奥深さと、果実のような甘酸っぱいモダンな味わい。",
        sweetness: 4, aroma: 4, richness: 3,
        image: "sake/sake_1.jpg"
    },
    {
        id: 2,
        name: "\"超\"王祿 春季限定 本生・原酒",
        prefecture: "島根県",
        brewery: "王祿酒造",
        desc: "黄金色の旨みと鋭いキレ。濃厚なコクと春の苦味が調和する硬派な一本。",
        sweetness: 2, aroma: 2, richness: 5,
        image: "sake/sake_2.jpg"
    },
    {
        id: 3,
        name: "ぷくぷく醸造 VaVaVa (ホップどぶろく)",
        prefecture: "福島県",
        brewery: "ぷくぷく醸造",
        desc: "ホップの爆発的香りとドブロクの甘酸っぱさ。ビールの技法を取り入れた新時代のSAKE。",
        sweetness: 4, aroma: 5, richness: 4,
        image: "sake/sake_3.jpg"
    }
];