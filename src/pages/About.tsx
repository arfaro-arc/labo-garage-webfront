
import Header from '../components/Header';
import LineButton from '../components/LineButton';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              会社概要
            </h1>
            <p className="text-xl text-gray-600">
              自動車整備工場 LABO について
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">会社情報</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">会社名</h3>
                        <p className="text-gray-600">自動車整備工場 LABO</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">代表者</h3>
                        <p className="text-gray-600">田中 太郎</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">所在地</h3>
                        <p className="text-gray-600">
                          〒192-0000<br />
                          東京都八王子市○○町1-2-3
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">電話番号</h3>
                        <p className="text-gray-600">042-XXX-XXXX</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">営業時間</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">平日</h3>
                        <p className="text-gray-600">9:00 〜 18:00</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">土曜日</h3>
                        <p className="text-gray-600">お問い合わせください</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-1">日曜・祝日</h3>
                        <p className="text-gray-600">定休日</p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">サービス内容</h2>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 車検・点検</li>
                        <li>• 一般修理・メンテナンス</li>
                        <li>• 緊急対応・レッカーサービス</li>
                        <li>• 各種相談・見積もり</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 自動車整備工場 LABO. All rights reserved.
          </p>
        </div>
      </footer>
      
      <LineButton />
    </div>
  );
};

export default About;
