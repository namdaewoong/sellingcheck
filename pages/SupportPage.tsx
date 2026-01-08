
import React, { useState } from 'react';
import { PricingPlan, FAQItem } from '../types';
import { Check, ChevronDown, ChevronUp, Mail, Send, MessageCircle } from 'lucide-react';

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: '무료 체험',
    price: 'FREE',
    features: ['3일 이용 가능', '5개 상품 분석', '일일 판매 리포트'],
  },
  {
    id: 'basic',
    name: '베이직 (1달)',
    price: '100,000',
    isPopular: true,
    features: ['1개월 이용 가능', '총 100개 상품 분석', '일일 판매 리포트'],
  },
  {
    id: 'pro',
    name: '프로 (1달)',
    price: '200,000',
    features: ['1개월 이용 가능', '총 300개 상품 분석', '일일 판매 리포트'],
  },
];

const faqs: FAQItem[] = [
  {
    question: '데이터는 얼마나 자주 갱신되나요?',
    answer: 'SellingCheck의 모든 판매량 데이터는 24시간마다 정기적으로 갱신됩니다.',
  },
  {
    question: '판매량 데이터의 정확도는 어느 정도인가요?',
    answer: '실제 재고 데이터를 기반으로 분석한 결과, 실제 판매량 대비 약 99.2%의 정확도를 보이고 있습니다. 셀링체크만의 독자적인 분석 시스템을 믿으셔도 좋습니다.',
  },
  {
    question: '무료 체험 기간이 있나요?',
    answer: '무료 체험 플랜을 통해 3일간 핵심 기능을 미리 경험해보실 수 있습니다.',
  },
  {
    question: '중도 해지 시 환불이 가능한가요?',
    answer: '서비스 특성상 중도 해지에 따른 환불은 불가합니다. 단, 결제 후 1일 이내이며 서비스를 전혀 이용하지 않으신 경우에 한해 100% 환불이 가능합니다.',
  },
];

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactUrl = "https://pf.kakao.com/_gWxign/friend";

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1A2B4C] mb-4">합리적인 플랜으로 수익을 극대화하세요</h1>
            <p className="text-[#1A2B4C]/70 font-bold">여러분의 성장 단계에 맞는 최적의 플랜을 선택하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-[2.5rem] p-10 border-2 transition-all hover:-translate-y-2 shadow-sm ${
                  plan.isPopular ? 'border-[#E42F2F] shadow-xl' : 'border-gray-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E42F2F] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Choice
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-[#1A2B4C]">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-extrabold text-[#1A2B4C] ${plan.id === 'free' ? 'text-4xl' : 'text-3xl'}`}>
                    {plan.id === 'free' ? '' : '₩'}{plan.price}
                  </span>
                  <span className="text-[#1A2B4C]/70 text-sm font-bold">{plan.id === 'free' ? '/ 3일' : '/ 월'}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#1A2B4C] font-bold">
                      <div className="bg-green-100 rounded-full p-1 text-green-600 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.isPopular 
                      ? 'bg-[#E42F2F] text-white hover:bg-[#c12727]' 
                      : (plan.id === 'free' ? 'bg-[#1A2B4C] text-white hover:bg-[#253961]' : 'bg-gray-100 text-[#1A2B4C] hover:bg-gray-200')
                  }`}
                >
                  {plan.id === 'free' ? '지금 시작하기' : '연락하기'}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-[#1A2B4C]/80">
            <p className="font-bold">장기 구독 플랜은 별도 연락 부탁드립니다.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1A2B4C]">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-4 text-left font-bold text-[#1A2B4C] hover:text-[#E42F2F] transition-colors"
                >
                  {faq.question}
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#E42F2F]" /> : <ChevronDown className="w-5 h-5 text-[#1A2B4C]" />}
                </button>
                {openFaq === idx && (
                  <div className="py-2 text-[#1A2B4C]/80 text-sm font-bold leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1A2B4C]">궁금한 점이 있으신가요?</h2>
            <p className="text-[#1A2B4C]/70 mb-10 font-bold">영업시간 내 가장 빠른 답변을 드립니다.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1A2B4C]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#1A2B4C]/50 font-bold uppercase">이메일 문의</p>
                  <p className="font-bold text-[#1A2B4C]">sellingchekeu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FEE500]">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-[#1A2B4C]/50 font-bold uppercase mb-1">카카오톡채널 문의</p>
                  <a 
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FEE500] text-[#1A2B4C] px-5 py-2 rounded-xl font-bold text-sm hover:bg-[#ebd300] transition-all shadow-sm"
                  >
                    카카오톡 셀링체크 검색
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
            <h4 className="text-xl font-bold mb-8 text-[#1A2B4C]">문의 메일 보내기</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A2B4C]/70">이름</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1A2B4C] outline-none text-[#1A2B4C]" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A2B4C]/70">이메일</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1A2B4C] outline-none text-[#1A2B4C]" placeholder="example@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A2B4C]/70">문의 내용</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#1A2B4C] outline-none resize-none text-[#1A2B4C]" placeholder="문의하실 내용을 입력해주세요."></textarea>
              </div>
              <button className="w-full bg-[#1A2B4C] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#253961] transition-all">
                보내기 <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
