
import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

const GuidePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[#E42F2F] font-bold text-sm tracking-widest uppercase mb-4 block">성공 로드맵</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A2B4C] mb-6 leading-tight">
              감으로 하는 소싱은 그만<br />
              <span className="text-[#E42F2F]">실제 판매량</span>으로 결정하세요
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              "리뷰 개수 세기" 같은 구식 방법에서 벗어나세요.<br />
              셀링체크가 제공하는 실제 데이터를 따라가면 실패 확률은 0%에 수렴합니다.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/business/800/600" 
              alt="Success Story" 
              className="rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">분석부터 소싱까지</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: '실제 판매량 분석', desc: '상위 상품들이 매일 몇 개씩 실제로 팔리는지 체크합니다.' },
            { step: '02', title: '경쟁자 판매 추이', desc: '경쟁사들의 판매량이 유지되는지, 빠지는지 확인합니다.' },
            { step: '03', title: '데이터 기반 소싱', desc: '검증된 판매 데이터를 바탕으로 소싱을 결정합니다.' },
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl bg-[#E42F2F] border border-red-400 group shadow-lg">
              <span className="text-5xl font-black text-white/20 absolute top-4 right-8">{item.step}</span>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#E42F2F] mb-6 relative z-10">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 relative z-10 text-white">{item.title}</h4>
              <p className="text-red-50 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Specs: Case Study */}
      <section className="py-24 bg-[#1A2B4C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <img 
                src="https://picsum.photos/seed/entrepreneur/600/800" 
                alt="Interviewee" 
                className="rounded-3xl h-[400px] w-full object-cover"
              />
            </div>
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 text-[#E42F2F] mb-4">
                <Zap className="w-5 h-5 fill-current" />
                <span className="font-bold">베스트 성공 사례</span>
              </div>
              <h3 className="text-3xl font-extrabold text-[#1A2B4C] mb-6">"판매량 데이터를 알고 나니 광고 효율이 달라졌습니다"</h3>
              <p className="text-gray-600 italic">
                "이전에는 트래픽만 보고 상위에 꽂으면 다 팔릴 줄 알았어요. 하지만 셀링체크로 시장 규모를 확인해 보니, 제가 들어간 곳은 이미 포화 상태였죠. 데이터를 보고 다른 틈새를 공략해 바로 매출을 냈습니다."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;
