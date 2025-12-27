/* * NIKKEI Nihonshu Night - データ管理ファイル
 * ここを変更するだけで、リストやSlack設定が更新されます。

// ▼ Slack設定（チャンネルID）
const SLACK_CHANNEL_ID = "C08PQ6NUTU1"; 

// ▼ 日本酒リスト（画像は sake/ フォルダに入れてください）
const sakeData = [
    { 
        id: 1, 
        name: "日経大吟醸 磨き二割", 
        desc: "フルーティーで華やかな香り。乾杯に最適。", 
        sweetness: 3, aroma: 3, richness: 2, 
        image: "sake/sake_1.jpg" 
    },
    { 
        id: 2, 
        name: "純米 日経政宗", 
        desc: "米の旨味がガツンとくる、硬派な辛口。", 
        sweetness: 1, aroma: 1, richness: 3, 
        image: "sake/sake_2.jpg" 
    },
    { 
        id: 3, 
        name: "特別本醸造 NIKKEI ASIA", 
        desc: "スッキリとして飲み飽きしない、万能タイプ。", 
        sweetness: 1, aroma: 2, richness: 1, 
        image: "sake/sake_3.jpg" 
    },
    { 
        id: 4, 
        name: "純米吟醸 CPF", 
        desc: "甘みと酸味のバランスが絶妙なモダンな味わい。", 
        sweetness: 2, aroma: 3, richness: 2, 
        image: "sake/sake_4.jpg" 
    },
    { 
        id: 5, 
        name: "生酛 ニッケイネクスト", 
        desc: "複雑な味わいとキレの良さ。お燗もおすすめ。", 
        sweetness: 2, aroma: 1, richness: 3, 
        image: "sake/sake_5.jpg" 
    }
];