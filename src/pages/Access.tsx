
import { Instagram } from 'lucide-react';
import Header from '../components/Header';
import LineButton from '../components/LineButton';

const Access = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/labo_garage', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            アクセス
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                店舗情報
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">所在地</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">住所:</span>
                      <span className="ml-2 text-gray-600">
                        〒192-0000<br />
                        東京都八王子市○○町1-2-3
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">最寄駅:</span>
                      <span className="ml-2 text-gray-600">JR八王子駅より徒歩15分</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">駐車場:</span>
                      <span className="ml-2 text-gray-600">5台完備</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">営業時間</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">平日:</span>
                      <span className="ml-2 text-gray-600">9:00 〜 18:00</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">定休日:</span>
                      <span className="ml-2 text-gray-600">土曜日・日曜日・祝日</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">電話:</span>
                      <span className="ml-2 text-gray-600">042-XXX-XXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                地図
              </h2>
              
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12946.18147741633!2d139.31637995!3d35.66580115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191d52c3f3e3e5%3A0x1c1f8b9e8b9c4a4a!2z44CSMTkyLTAwNjMg5p2x5Lqs6YO96YKo546L5a2Q5biC!5e0!3m2!1sja!2sjp!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                ご予約・お問い合わせ
              </h2>
              
              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  整備のご予約やお問い合わせは、InstagramのDMにて承っております。<br />
                  お気軽にメッセージをお送りください。
                </p>
                
                <button
                  onClick={handleInstagramClick}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium flex items-center justify-center mx-auto"
                >
                  <Instagram size={20} className="mr-2" />
                  Instagram DMで予約
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <LineButton />
    </div>
  );
};

export default Access;
