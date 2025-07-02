
import { CheckCircle } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "車検・点検",
      items: [
        "国家資格整備士が点検整備を実施",
        "法定12ヶ月点検",
        "定期点検",
        "法定24ヶ月点検"
      ]
    },
    {
      title: "修理・メンテナンス",
      items: [
        "OBD診断・故障相談",
        "ECU書き換え",
        "タイヤ交換",
        "エアコン修理"
      ]
    },
    {
      title: "緊急対応",
      items: [
        "スピード対応 × 明朗価格",
        "バッテリー上がり対応",
        "パンク修理",
        "応急処置対応"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight break-words max-w-4xl mx-auto">
            整備サービス
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto break-words">
            プロフェッショナル技術であなたの愛車を守ります
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center leading-tight break-words">
                {service.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
