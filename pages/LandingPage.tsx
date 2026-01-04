
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Database, 
  CheckCircle2, 
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Week 1', sales: 120 },
  { name: 'Week 2', sales: 185 },
  { name: 'Week 3', sales: 240 },
  { name: 'Week 4', sales: 310 },
  { name: 'Week 5', sales: 420 },
  { name: 'Week 6', sales: 495 },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1A2B4C] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/analytics/1600/900" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12 leading-tight">
            <div className="mb-4 md:mb-6">감으로 하는 소싱은 <span className="text-[#E42F2F]">도박</span>입니다.</div>
            <div>실제 판매량 데이터를 확인하세요.</div>
          </h1>
          <div className="max-w-3xl mx-auto mb-12 text-xl text-gray-300 font-light leading-relaxed space-y-2">
            <p>"트래픽으로 상위 노출했는데 판매는 안되고,"</p>
            <p>"로하스 낮춰서 광고비 많이 썼는데도 판매가 안되네."</p>
            <p className="text-white font-semibold mt-4">진짜 시장규모를 측정하지 못했기 때문입니다.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/support"
              className="bg-[#E42F2F] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#c12727] transition-all flex items-center justify-center gap-2 group"
            >
              3일간 무료로 판매량 분석하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/details"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center"
            >
              분석 샘플 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1A2B4C] mb-4">리뷰 개수 세고 있는 방식은 이제 그만</h2>
            <p className="text-[#1A2B4C]/70">셀링체크는 실제 판매량 데이터를 제공해드립니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="text-[#E42F2F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">불투명한 시장 규모</h3>
              <p className="text-[#1A2B4C]/70 leading-relaxed">
                광고비를 쏟아붓기 전에 해당 시장의 실제 한계를 먼저 파악해야 합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="text-[#E42F2F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">무의미한 리뷰 분석</h3>
              <p className="text-[#1A2B4C]/70 leading-relaxed">
                리뷰가 많다고 무조건 잘 팔리는 게 아닙니다. 어제, 오늘 얼마나 팔렸는지가 핵심입니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="text-[#E42F2F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2B4C] mb-4">정확한 판매량의 부재</h3>
              <p className="text-[#1A2B4C]/70 leading-relaxed">
                정확한 데이터 없이 감으로 수입/발주하는 순간, 재고 리스크는 시작됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-[#1A2B4C]">상품별 실제 판매량 추이</h4>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#E42F2F" 
                        strokeWidth={4} 
                        dot={{ r: 6, fill: '#E42F2F', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-gray-100">
                    <p className="text-xs text-[#1A2B4C]/50 mb-1">시장 수요</p>
                    <p className="text-lg font-bold text-green-500">상승세</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100">
                    <p className="text-xs text-[#1A2B4C]/50 mb-1">데이터 정확도</p>
                    <p className="text-lg font-bold text-[#1A2B4C]">99.2%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-[#1A2B4C] mb-6 leading-tight">
                클릭 한 번으로<br />
                <span className="text-[#E42F2F]">진짜 팔리는 물량</span>을 확인합니다.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A2B4C] mb-2">실제 판매량 분석</h4>
                    <p className="text-[#1A2B4C]/70">셀링체크의 판매량 분석 시스템으로 정확한 판매량을 제공합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A2B4C] mb-2">시장 규모 측정</h4>
                    <p className="text-[#1A2B4C]/70">제공된 판매량을 기반으로 시장의 전체 규모를 계산, 소싱 여부를 판단할 수 있습니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A2B4C] mb-2">실제 재고 기반 판매 데이터</h4>
                    <p className="text-[#1A2B4C]/70">리뷰 개수만 세는 구식 방식이 아닌, 실제 재고량을 기반으로 한 정확한 판매량 데이터를 제공합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[#1A2B4C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">이미 수천 명의 셀러가 증명했습니다</h2>
            <p className="text-gray-400">데이터 기반 소싱으로 바뀐 그들의 삶</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1w3qFkx2aTeXEPBLbN-gm2TzRZTXYMGMC" 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-full border-2 border-[#E42F2F] object-cover" 
                />
                <div>
                  <h4 className="font-bold">김지우 님</h4>
                  <p className="text-xs text-gray-400">직장인 N잡러 (1년차)</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"퇴근 후 2시간만 투자해서 월 순수익 350만 원 달성했습니다. 예전엔 감으로 소싱해서 반 이상이 재고였는데, 이제는 무조건 데이터만 봐요."</p>
              <div className="text-[#E42F2F] font-bold">월 매출 1,200만원 돌파</div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/1m-T4zvzfV896MRJDwwQrSUC3Tf9J4uML" 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-full border-2 border-[#E42F2F] object-cover" 
                />
                <div>
                  <h4 className="font-bold">박민호 님</h4>
                  <p className="text-xs text-gray-400">전업 셀러 (6개월차)</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"셀링체크 덕분에 경쟁사 판매량을 정확히 알게 됐어요. 시장 규모를 알고 들어가니 광고비 낭비가 사라졌습니다."</p>
              <div className="text-[#E42F2F] font-bold">첫 달 순이익 240만원</div>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://lh3.googleusercontent.com/d/16KZhhVc9FiASvA2SEYuqw98H8iLJBXDC" 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-full border-2 border-[#E42F2F] object-cover" 
                />
                <div>
                  <h4 className="font-bold">이서연 님</h4>
                  <p className="text-xs text-gray-400">전업 주부 (3개월차)</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"데이터 분석이라고 해서 어려울 줄 알았는데, 판매량이 숫자로 딱 나오니까 너무 쉬워요. 육아하면서도 충분히 가능합니다."</p>
              <div className="text-[#E42F2F] font-bold">누적 판매량 5,000개 돌파</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-[#1A2B4C] mb-8">
            망설이는 지금 이 순간에도<br />
            누군가는 데이터를 통해 돈을 벌고 있습니다.
          </h2>
          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 mb-12">
            <div className="flex flex-col items-center justify-center gap-4 mb-8 text-[#1A2B4C]">
              <p className="text-2xl font-bold">무료 체험 플랜</p>
              <p className="text-5xl font-extrabold text-[#E42F2F]">FREE</p>
              <p className="text-[#1A2B4C]/70 font-semibold">3일간 무료로 모든 데이터 확인</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left text-[#1A2B4C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold">3일간 무제한 이용 가능</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold">실제 판매량 분석 리포트</span>
              </div>
            </div>
            <Link
              to="/support"
              className="inline-flex bg-[#E42F2F] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-[#c12727] transition-all shadow-xl shadow-red-200"
            >
              3일간 무료로 판매량 분석하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
