import React from 'react';
import { Database, ShieldCheck, BrainCircuit, CheckCircle, Zap } from 'lucide-react';

const DetailsPage: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-24">
      {/* Header Section */}
      <section className="bg-[#1A2B4C] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">데이터는 거짓말을 하지 않습니다</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            SellingCheck는 어떻게 99%의 예측 정확도를 달성할까요?<br />
            우리의 정교한 데이터 수집 모델과 분석 로직을 공개합니다.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Sample Image Section */}
          <div className="mb-16 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/d/11AbnvPA97nTd5gaV5guiMVtymRl2rgFy" 
              alt="SellingCheck Data Sample" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Infographic Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto text-[#1A2B4C]">
                <Database className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C]">시장 수요 분석</h3>
              <p className="text-[#1A2B4C]/70 text-sm font-medium leading-relaxed">단순 노출이나 트래픽이 아닌, 실제 구매로 이어진 판매량 데이터를 기반으로 수요를 측정합니다.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto text-[#E42F2F]">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C]">경쟁자 분석</h3>
              <p className="text-[#1A2B4C]/70 text-sm font-medium leading-relaxed">상위 노출 상품들의 일별/주별 판매량을 분석하여 내가 진입했을 때 가져올 수 있는 파이를 예측합니다.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto text-indigo-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C]">검증된 신뢰성</h3>
              <p className="text-[#1A2B4C]/70 text-sm font-medium leading-relaxed">실제 재고 데이터와 비교 검증을 거쳐 오차 범위를 1% 이내로 줄였습니다.</p>
            </div>
          </div>

          {/* Focus Box Section (Removed Top Border) */}
          <div className="mt-20">
            <div className="max-w-2xl mx-auto text-center bg-[#E42F2F] p-8 rounded-3xl border border-red-200">
              <div>
                <h4 className="text-xl font-bold mb-3 text-white">"우리는 오직 판매량에만 집중합니다"</h4>
                <p className="text-red-50 font-medium leading-relaxed">
                  복잡한 리포트보다 더 중요한 것은 '실제로 얼마나 팔리는가'입니다. 셀링체크는 본질에 집중하여 가장 정확한 판매량 데이터를 제공하는 데 모든 역량을 집중하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Guide Section */}
      <section className="bg-white py-24 mt-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E42F2F] font-bold text-sm tracking-widest uppercase mb-4 block">성공 로드맵</span>
            <h2 className="text-4xl font-extrabold text-[#1A2B4C] mb-6">분석부터 소싱까지</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              "리뷰 개수 세기" 같은 구식 방법에서 벗어나세요.<br />
              셀링체크가 제공하는 실제 데이터를 따라가면 실패 확률은 0%에 수렴합니다.
            </p>
          </div>

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

          {/* Success Story in Guide */}
          <div className="mt-24 bg-[#1A2B4C] rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
              <img 
                src="https://lh3.googleusercontent.com/d/1aZVu6XIiTWr7bGW72gQVikLiIm2FLe-e" 
                alt="Success Story Male Seller" 
                className="rounded-3xl h-[400px] w-full object-cover shadow-2xl"
              />
            </div>
            <div className="lg:w-3/5 text-white">
              <div className="flex items-center gap-2 text-[#E42F2F] mb-4">
                <Zap className="w-5 h-5 fill-current" />
                <span className="font-bold">베스트 성공 사례</span>
              </div>
              <p className="text-[#E42F2F] font-bold text-lg mb-2">34세 남성 전업 온라인 셀러</p>
              <h3 className="text-3xl font-extrabold mb-6">"판매량 데이터를 알고 나니 광고 효율이 달라졌습니다"</h3>
              <p className="text-gray-300 italic text-lg leading-relaxed">
                "이전에는 트래픽만 보고 상위에 꽂으면 다 팔릴 줄 알았어요. 하지만 셀링체크로 시장 규모를 확인해 보니, 제가 들어간 곳은 이미 포화 상태였죠. 데이터를 보고 다른 틈새를 공략해 바로 매출을 냈습니다."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;