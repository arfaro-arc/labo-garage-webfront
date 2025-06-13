
const AccessSection = () => {
  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=八王子市', '_blank');
  };

  return (
    <section id="access" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            アクセス
          </h2>
          <p className="text-lg text-gray-600">
            自動車整備工場 LABO へのアクセス方法
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 地図 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="w-full h-96 cursor-pointer relative group"
                onClick={handleMapClick}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.845!2d139.31!3d35.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzM2LjAiTiAxMznCsDE4JzM2LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="自動車整備工場 LABO 所在地"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-800 font-medium">クリックで大きな地図を開く</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* アクセス情報 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">店舗情報</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></span>
                    住所
                  </h4>
                  <p className="text-gray-600 ml-5">
                    〒192-0000<br />
                    東京都八王子市○○町1-2-3
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-[#3498DB] rounded-full mr-3"></span>
                    営業時間
                  </h4>
                  <p className="text-gray-600 ml-5">
                    平日: 9:00 〜 18:00<br />
                    土曜: お問い合わせください<br />
                    日祝: 定休日
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-[#E74C3C] rounded-full mr-3"></span>
                    電話番号
                  </h4>
                  <p className="text-gray-600 ml-5">
                    <a href="tel:042-XXX-XXXX" className="hover:text-[#3498DB] transition-colors">
                      042-XXX-XXXX
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-[#F39C12] rounded-full mr-3"></span>
                    アクセス
                  </h4>
                  <p className="text-gray-600 ml-5">
                    JR中央線 八王子駅より徒歩10分<br />
                    駐車場完備（5台）
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  ※ 初回ご来店の際は、事前にお電話またはLINEでご連絡いただけますとスムーズです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
