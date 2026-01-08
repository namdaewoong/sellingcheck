
import React from 'react';
import { BarChart3, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B4C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-[#E42F2F]" />
              <span className="text-xl font-bold">SELLINGCHECK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              데이터로 증명된 성공만을 약속합니다.<br />
              대한민국 1등 쿠팡 실제 판매량 분석 솔루션.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">일일 판매 데이터 리포트</a></li>
              <li><a href="#" className="hover:text-white transition-colors">판매량 데이터 분석</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">플랜 및 지원</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">1:1 문의</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용 약관</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">연락처</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sellingchekeu@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>상호명: 지유소</span>
              <span>사업자등록번호: 327-78-00490</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>주소: 인천광역시 서구 청라커낼로 270, 2층 208호 22626호</span>
            </div>
            <p>© 2024 SellingCheck Inc. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
