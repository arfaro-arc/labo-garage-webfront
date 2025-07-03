
import { CheckCircle, Settings, Sparkles, Wrench, Clock, ClipboardCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ServiceSection = () => {
  const services = [
    {
      title: "車検・点検",
      icon: ClipboardCheck,
      iconColor: "text-[#3498DB]",
      items: [
        "国家資格整備士が点検整備を実施",
        "12ヶ月点検",
        "定期点検",
        "24ヶ月点検"
      ]
    },
    {
      title: "修理・メンテナンス",
      icon: Wrench,
      iconColor: "text-[#E67E22]",
      items: [
        "OBD診断・故障相談",
        "ECU書き換え",
        "タイヤ交換",
        "エアコン修理"
      ]
    },
    {
      title: "緊急対応",
      icon: Clock,
      iconColor: "text-[#E74C3C]",
      items: [
        "スピード対応 × 明朗価格",
        "バッテリー上がり対応",
        "パンク修理",
        "応急処置対応"
      ]
    }
  ];

  const customEquipmentItems = [
    "ドラレコ・ナビ・ETC取付（配線処理美しく仕上げます）",
    "スピーカー交換・サブウーファー取付（音質改善）",
    "室内灯LED化・カーテシランプ（車種に応じて対応）",
    "スマホ充電・ホルダー設置（シガー電源引き込みなど）",
    "持ち込みパーツ対応（事前相談歓迎）"
  ];

  const detailingServices = [
    "手洗い洗車・簡易コーティング",
    "室内清掃・除菌・消臭",
    "ヘッドライト黄ばみ除去＆コート",
    "ウィンドウ撥水施工",
    "エンジンルーム清掃（要相談）"
  ];

  const exteriorCustomization = [
    "エアロパーツ取り付け（フロントリップ／スポイラー／ガーニッシュ類）※要事前確認",
    "ホーン交換（純正位置 or エンジンルーム内に配線延長対応可）",
    "マフラーカッター取付（溶接不要タイプ中心に対応。接触確認も実施）",
    "メッキパーツ装着（ドアハンドル／モール類／ドレスアップアイテム全般）"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${service.iconColor} flex-shrink-0`} />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-tight break-words">
                    {service.title}
                  </h3>
                </div>
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
            );
          })}
        </div>

        {/* Three-column layout for Custom Equipment, Car Detailing and Exterior Customization */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Left Column: Custom & Comfort Equipment Accordion */}
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="custom-equipment" className="border-none">
                  <AccordionTrigger className="bg-white rounded-lg shadow-md px-3 py-4 sm:px-4 sm:py-4 md:px-6 md:py-4 hover:shadow-lg transition-shadow mb-0 hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-3 sm:gap-4 w-full">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#3498DB] flex-shrink-0" />
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-tight break-words text-left">
                        各種取り付け・快適装備
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white rounded-b-lg shadow-md px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 mt-0 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <ul className="space-y-3 sm:space-y-4">
                      {customEquipmentItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Center Column: Car Detailing Accordion */}
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="detailing-services" className="border-none">
                  <AccordionTrigger className="bg-white rounded-lg shadow-md px-3 py-4 sm:px-4 sm:py-4 md:px-6 md:py-4 hover:shadow-lg transition-shadow mb-0 hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-3 sm:gap-4 w-full">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#E74C3C] flex-shrink-0" />
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-tight break-words text-left">
                        カーディティール
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white rounded-b-lg shadow-md px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 mt-0 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <ul className="space-y-3 sm:space-y-4">
                      {detailingServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Column: Exterior Customization Accordion */}
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="exterior-customization" className="border-none">
                  <AccordionTrigger className="bg-white rounded-lg shadow-md px-3 py-4 sm:px-4 sm:py-4 md:px-6 md:py-4 hover:shadow-lg transition-shadow mb-0 hover:no-underline [&[data-state=open]]:rounded-b-none [&[data-state=open]]:mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-3 sm:gap-4 w-full">
                      <Wrench className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#9B59B6] flex-shrink-0" />
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 leading-tight break-words text-left">
                        外装カスタマイズ
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white rounded-b-lg shadow-md px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 mt-0 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <ul className="space-y-3 sm:space-y-4">
                      {exteriorCustomization.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
