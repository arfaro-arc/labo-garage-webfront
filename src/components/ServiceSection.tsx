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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            整備サービス
          </h2>
          <p className="text-lg text-gray-600">
            プロフェッショナル技術であなたの愛車を守ります
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">
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
