
import { Wrench, Car, Shield, Clock } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-[#2ECC71]" />,
      title: "整備・修理",
      description: "エンジンからブレーキまで、あらゆる整備・修理に対応いたします。"
    },
    {
      icon: <Car className="w-12 h-12 text-[#3498DB]" />,
      title: "車検",
      description: "確実で迅速な車検サービス。事前点検で安心をお届けします。"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#E74C3C]" />,
      title: "点検",
      description: "定期点検で愛車の状態をチェック。トラブルを未然に防ぎます。"
    },
    {
      icon: <Clock className="w-12 h-12 text-[#F39C12]" />,
      title: "緊急対応",
      description: "突然のトラブルにも迅速対応。お困りの際はお気軽にご連絡ください。"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            整備受付中のサービス
          </h2>
          <p className="text-lg text-gray-600">
            プロフェッショナルな技術で愛車をサポート
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
