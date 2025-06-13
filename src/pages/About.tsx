
import Header from '../components/Header';
import LineButton from '../components/LineButton';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            会社概要
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                自動車整備工場 LABO について
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                私たち LABO は、お客様の愛車を最高のコンディションに保つことを使命として、
                八王子市で自動車整備サービスを提供しております。
                豊富な経験と最新の技術を駆使し、安全で快適なカーライフをサポートいたします。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">会社情報</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">会社名:</span>
                      <span className="ml-2 text-gray-600">自動車整備工場 LABO</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">代表者:</span>
                      <span className="ml-2 text-gray-600">田中 太郎</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">設立:</span>
                      <span className="ml-2 text-gray-600">2010年4月</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">従業員数:</span>
                      <span className="ml-2 text-gray-600">8名</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">営業情報</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">営業時間:</span>
                      <span className="ml-2 text-gray-600">平日 9:00 〜 18:00</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">定休日:</span>
                      <span className="ml-2 text-gray-600">土曜日・日曜日・祝日</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">電話番号:</span>
                      <span className="ml-2 text-gray-600">042-XXX-XXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                サービス内容
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">一般整備・修理</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">車検・点検</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">エンジンオイル交換</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">タイヤ交換・バランス調整</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">板金・塗装</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">中古車販売</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">各種保険取扱い</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">レッカーサービス</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <LineButton />
    </div>
  );
};

export default About;
